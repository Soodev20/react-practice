import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { iClub } from '../type/type';

type CardProps = {
  clubData: iClub;
}

const cardWrapper = css`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  cursor: pointer;
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

function ClubInfoCard({ clubData }: CardProps) {
  const { id, coverUrl, name, type, place, description } = clubData;
  const navigate = useNavigate();

  const onClickHandler = (id: string) => {
    navigate({
      pathname: '/detail',
      search: `?id=${id}`,
    });
  }

  return (
    <div css={cardWrapper} onClick={() => onClickHandler(id)}>
      <div css={imgContainer}>
        <img src={coverUrl}/>
      </div>
      <div css={textContainer}>
        <h4>{name}</h4>
        <span>{`${type}, @${place}`}</span>
        <h5>{description}</h5>
      </div>
    </div>
  );
}

export default ClubInfoCard;