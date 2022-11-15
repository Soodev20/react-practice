import React, { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import inputKeywordAtom from '../recoil/atoms/inputKeyword';
import Button from './common/Button';
import { css } from '@emotion/react';
import SearchFilter from './SearchFilter';

const input = css`
  width: 200px;
  height: 20px;
  margin: 5px;
  outline: none;
`

function SearchInput() {
  const [keyword, setKeyword] = useRecoilState(inputKeywordAtom);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSearchKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      const enteredKeyword = inputRef.current?.value;
      const trimmedKeyword = enteredKeyword ? enteredKeyword.trim() : '';

      setKeyword(trimmedKeyword);
    }
  }

  const filterButtonHandler = () => {
    setShowFilter(!showFilter)
  }

  return (
    <div>
      <input
        css={input}
        ref={inputRef}
        defaultValue={keyword}
        placeholder='검색어를 입력해주세요.'
        onKeyUp={onSearchKeyword}
      />
      <Button clickHandler={filterButtonHandler} text='카테고리' />
      {showFilter
        && (
          <SearchFilter buttonHandler={(filterButtonHandler)} />
        )
      }
    </div>
  );
}

export default SearchInput;