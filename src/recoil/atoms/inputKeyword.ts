import { atom } from 'recoil';

const inputKeywordAtom = atom({
  key: '@input/inputKeyword',
  default: '',
});

export default inputKeywordAtom