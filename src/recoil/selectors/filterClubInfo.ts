import { selector } from 'recoil';
import { iPerson } from '../../type/type';
import filterOptionChoiceAtom from '../atoms/filterOptionChoice';
import inputKeywordAtom from '../atoms/inputKeyword';
import getClubInfoSelector from './getClubInfo';

const isIncludesKeyword = (target: string, keyword: string) => {
  return target.includes(keyword);
}

const isContainName = (names: Array<iPerson>, keyword: string) => {
  return !!names.filter(person => isIncludesKeyword(person.name, keyword)).length
}

const isMatchStrOption = (target: string, category: Array<string>) => {
  return !!category.filter(option => isIncludesKeyword(target, option)).length
}

const filterClubInfoSelector = selector({
  key: '@clubInfo/filterClubInfo',
  get: ({ get }) => {
    const keyword = get(inputKeywordAtom);
    const options = get(filterOptionChoiceAtom);
    const data = get(getClubInfoSelector);

    let filteredData = data;

    if (keyword) {
      filteredData = filteredData.filter(clubInfo => {
        const { club, leaders, partners } = clubInfo;

        return (isIncludesKeyword(`${club.name}${club.description}`, keyword) || isContainName([...leaders, ...partners], keyword));
      });
    }

    if (options.type.length) {
      filteredData = filteredData.filter(clubInfo => {
        return(isMatchStrOption(clubInfo.club.type, options.type))
      });
    }

    if (options.place.length) {
      filteredData = filteredData.filter(clubInfo => {
        return(isMatchStrOption(clubInfo.club.place, options.place))
      });
    }

    return filteredData;
  },
});

export default filterClubInfoSelector;
