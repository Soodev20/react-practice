import { css, keyframes } from '@emotion/react';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

const loading = css`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #ffa500;
    border-radius: 50%;
    animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #ffa500 transparent transparent transparent;
  }
`

function Loading() {
  return (
    <div css={loading}>
      <div />
    </div>
  );
}

export default Loading;