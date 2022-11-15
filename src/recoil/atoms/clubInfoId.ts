import { atom } from 'recoil';

const clubInfoIdAtom = atom<string>({
  key: '@clubInfo/id',
  default: '',
});

export default clubInfoIdAtom;
