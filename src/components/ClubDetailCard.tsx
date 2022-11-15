import { iResponseClubInfo } from '../type/type';
import InfoCard from './common/InfoCard';
import { css } from '@emotion/react';

type CardProps = {
  cardData: iResponseClubInfo;
}

const cardWrapperGrid = css`
  cursor: pointer;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
`

function ClubDetailCard({ cardData }: CardProps) {
  const { club, createdAt, leaders, partners, price } = cardData;
  const { name, type, place, description, meetings } = club;

  return (
    <InfoCard
    cardData={cardData}
    styles={cardWrapperGrid}
    >
    <div>
        <h1>{name}</h1>
        <span>{createdAt}</span>
      <div>
        <span>리더: </span>
        {leaders.map(leader => {
          return <span key={leader.name}>{leader.name}</span>
        })}
      </div>
      <div>
        <span>파트너: </span>
        {partners.map(partner => {
          return <span key={partner.name}>{partner.name}</span>
        })}
      </div>
      <span>{`${type}, @${place}, ${meetings.length} 회 진행, ₩${price}`}</span>
      <h4>{description}</h4>
    </div>
  </InfoCard>
  );
}

export default ClubDetailCard;