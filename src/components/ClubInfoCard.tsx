import { useNavigate } from 'react-router-dom';
import { iResponseClubInfo } from '../type/type';
import InfoCard from '../components/common/InfoCard';
import { css } from '@emotion/react';

type CardProps = {
  cardData: iResponseClubInfo;
}

const cardWrapperGrid = css`
  cursor: pointer;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
`

function ClubInfoCard({ cardData }: CardProps) {
  const navigate = useNavigate();
  const { name, type, place, description } = cardData.club;

  const onClickHandler = (cardData: iResponseClubInfo) => {
    navigate({
      pathname: '/detail',
      search: `?id=${cardData.club.id}`,
    });
  }

  return (
    <InfoCard
      cardData={cardData}
      clickHandler={() => onClickHandler(cardData)}
      styles={cardWrapperGrid}
    >
      <div>
        <h4>{name}</h4>
        <span>{`${type}, @${place}`}</span>
        <h5>{description}</h5>
      </div>
    </InfoCard>
  );
}

export default ClubInfoCard;