import { css } from '@emotion/react';

type ButtonProps = {
  clickHandler: () => void;
  text: string;
  color?: string;
}

const filterButton = (color: string | undefined) => css`
  width: 80px;
  height: 25px;
  margin: 5px;
  background-color: ${ color || '#ffa500' };
  border-radius: 5px;
  border: 1px solid #ffa500;
`

function Button({ clickHandler, text, color }: ButtonProps) {
  return (
    <button
      css={filterButton(color)}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
}

export default Button;