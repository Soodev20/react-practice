import { selector } from 'recoil';
import { isIncludesKeyword, isContainName, isMatchStrOption } from '../../helper/helper';
import filterOptionChoiceAtom from '../atoms/filterOptionChoice';
import inputKeywordAtom from '../atoms/inputKeyword';
import getClubInfoSelector from './getClubInfo';
import { iResponseClubInfo } from '../../type/type';

const filterClubInfoSelector = selector<Array<iResponseClubInfo> | undefined>({
  key: '@clubInfo/filterClubInfo',
  get: ({ get }) => {
    const data = get(getClubInfoSelector);
    const keyword = get(inputKeywordAtom);
    const options = get(filterOptionChoiceAtom);

    let filteredData = data;

    if (keyword) {
      filteredData = filteredData.filter(clubInfo => {
        const { club, leaders, partners } = clubInfo;

        return (isIncludesKeyword(`${club.name}${club.description}`, keyword) || isContainName([...leaders, ...partners], keyword));
      });
    }

    if (options.type.length) {
      filteredData = filteredData.filter(clubInfo => {
        return (isMatchStrOption(clubInfo.club.type, options.type));
      });
    }

    if (options.place.length) {
      filteredData = filteredData.filter(clubInfo => {
        return (isMatchStrOption(clubInfo.club.place, options.place));
      });
    }

    return filteredData;
  },
});

export default filterClubInfoSelector;
