import { atom } from 'recoil';

const inputKeywordAtom = atom<string>({
  key: '@input/Keyword',
  default: '',
});

export default inputKeywordAtom;
