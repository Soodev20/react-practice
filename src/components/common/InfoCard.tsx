import { css, SerializedStyles } from '@emotion/react';
import { iResponseClubInfo } from '../../type/type';

type CardProps = {
  cardData: iResponseClubInfo;
  children: React.ReactNode;
  styles: SerializedStyles; // must include grid setting
  clickHandler?: (cardData: iResponseClubInfo) => void;
}

const cardWrapper = css`
  display: grid;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #ecece9 inset;
  background: #fff;
  height: 100%;
`

const imgContainer = css`
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    width: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const textContainer = css`
  position: relative;
  width: auto;
  overflow: hidden;
  padding: 0.5rem;

  h5 {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    color: #696969;
  }
`

function InfoCard({ cardData, styles, clickHandler, children }: CardProps) {
  return (
    <div css={[cardWrapper, styles]} onClick={() => {clickHandler && clickHandler(cardData)}}>
      <div css={imgContainer}>
        <img src={cardData.club.coverUrl}/>
      </div>
      <div css={textContainer}>
        {children}
      </div>
    </div>
  );
}

export default InfoCard;