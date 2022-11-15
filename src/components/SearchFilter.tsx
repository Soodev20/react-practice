import { useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import filterOptionCategorySelector from '../recoil/selectors/filterOptionCategory';
import Modal from './common/Modal';
import Button from './common/Button';
import { css } from '@emotion/react';
import { iFilterCondition } from '../type/type';
import filterOptionChoiceAtom from '../recoil/atoms/filterOptionChoice';
import FilterCategory from './FilterCategory';
import { useNavigate } from 'react-router-dom';

type filterProp = {
  buttonHandler: () => void,
}

const filterArea = css`
  display: flex;
  flex-direction: column;
  width: 20%;
  min-width: 280px;
  padding-top: 30px;
  min-height: 300px;
`

const buttonArea = css`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
`

function SearchFilter({ buttonHandler }: filterProp) {
  const { type, place }= useRecoilValue<iFilterCondition>(filterOptionCategorySelector);
  const [options, setOptions] = useRecoilState<iFilterCondition>(filterOptionChoiceAtom);
  const [localOptions, setLocalOptions] = useState<iFilterCondition>(options);
  const navigate = useNavigate();

  const optionHandler = (optionName: string, data: string) => {
    if (optionName === 'type' || optionName === 'place') {
      let updatedOption: Array<string> = [];

      if (localOptions[optionName].includes(data)) {
        updatedOption = localOptions[optionName].filter(option => option !== data);
      } else {
        updatedOption = [...localOptions[optionName], data];
      }

      return setLocalOptions({...localOptions, [optionName]: updatedOption});
    }
  }

  const onSubmitHandler = () => {
    navigate({
      pathname: '/list',
      search: `?type=${localOptions.type.join()}&place=${localOptions.place.join()}`,
    });
    setOptions(localOptions);
    buttonHandler();
  }

  const onClickResetHandler = () => {
    const emptyOptions: iFilterCondition = {
      type: [],
      place: [],
      price: { lower: 0, upper: 0 },
    };
    navigate({
      pathname: '/list',
      search: '',
    });
    setOptions(emptyOptions);
    buttonHandler();
  }

  return (
    <Modal>
      <div css={filterArea}>
        <FilterCategory
          type='type'
          options={type}
          choices={localOptions.type}
          clickLabelHandler={optionHandler}
        />
        <FilterCategory
          type='place'
          options={place}
          choices={localOptions.place}
          clickLabelHandler={optionHandler}
        />
        <div>
          <input></input>
        </div>
        <div css={buttonArea}>
          <Button
            clickHandler={buttonHandler}
            text='취소'
            color='#FFFFFF'
          />
          <Button
            clickHandler={onClickResetHandler }
            text='초기화'
            color='#FFFFFF'
          />
          <Button clickHandler={onSubmitHandler} text='적용' />
        </div>
      </div>
    </Modal>
  )
}

export default SearchFilter;