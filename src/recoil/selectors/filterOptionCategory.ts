import { selector } from 'recoil';
import { getFilterCategories } from '../../helper/helper';
import { iFilterCondition } from '../../type/type';
import getClubInfoSelector from './getClubInfo';

const filterOptionCategorySelector = selector<iFilterCondition>({
  key: '@clubInfo/filterOptionCategory',
  get: ({ get }) => {
    const data = get(getClubInfoSelector);

    return getFilterCategories(data);
  },
});

export default filterOptionCategorySelector;
