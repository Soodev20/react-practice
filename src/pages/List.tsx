import { Fragment } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/react';
import ClubInfoCard from '../components/ClubInfoCard';
import { iResponseClubInfo } from '../type/type';
import filterClubInfoSelector from '../recoil/selectors/filterClubInfo';

const gridWrapper = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
`

function ListPage() {
  const result = useRecoilValue<Array<iResponseClubInfo>>(filterClubInfoSelector);

  return (
    <Fragment>
      <div css={gridWrapper}>
        {!!result && result.map(cardData => {
          return (
            <div key={cardData.createdAt}>
              <ClubInfoCard clubData={cardData.club}/>
            </div>
          )
        })}
      </div>
    </Fragment>
  );
}

export default ListPage;
