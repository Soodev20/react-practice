import { atom } from 'recoil';
import { iFilterCondition } from '../../type/type';

const filterOptionChoiceAtom = atom<iFilterCondition>({
  key: '@filter/optionChoice',
  default: {
    type: [],
    place: [],
    price: { lower: 0, upper: 0 },
  },
});

export default filterOptionChoiceAtom;
