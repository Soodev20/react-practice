import { selector } from 'recoil';
import { iResponseClubInfo } from '../../type/type';
import clubInfoIdAtom from '../atoms/clubInfoId';
import filterClubInfoSelector from './filterClubInfo';
import { isIncludesKeyword } from '../../helper/helper';

const clubDetailSelector = selector<iResponseClubInfo | undefined>({
  key: '@clubInfo/detail',
  get: ({ get }) => {
    const filteredData = get(filterClubInfoSelector);
    const id = get(clubInfoIdAtom);

    let dataById = {} as iResponseClubInfo | undefined;

    if (id && filteredData) {
      dataById = filteredData.find(data => {
        return (isIncludesKeyword(data.club.id, id));
      });
    }

    if (typeof dataById !== undefined) return dataById;
  },
});

export default clubDetailSelector;
