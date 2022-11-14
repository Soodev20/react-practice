import React from 'react';
import { css } from '@emotion/react';

type Props = {
  children: React.ReactNode;
}

const background = css`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000E6;
`

const innerArea = css`
  display: flex;
  padding: 20px;
  background-color: #FFFFFF;
  border-radius: 5px;
`


function Modal({ children }: Props) {
  return (
    <div css={background}>
      <div css={innerArea}>
        {children}
      </div>
    </div>
  );
}

export default Modal;