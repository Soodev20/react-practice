import { css } from '@emotion/react';
import CheckLabel from './common/CheckLabel';

type OptionProps = {
  type: string,
  options: Array<string>,
  choices: Array<string>,
  clickLabelHandler: (optionName: string, data: string) => void,
}

const categoryArea = css`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

function FilterCategory({ type, options, choices, clickLabelHandler }: OptionProps) {
  return (
    <div css={categoryArea}>
      {options.map(data => {
        return (
          <CheckLabel
            key={data}
            label={data}
            isChecked={choices.includes(data)}
            clickHandler={() => clickLabelHandler(type, data)}
          />
        );
      })}
    </div>
  );
}

export default FilterCategory;