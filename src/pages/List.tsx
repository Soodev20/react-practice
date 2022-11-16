import { Fragment, useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { useLocation } from 'react-router-dom';
import { css } from '@emotion/react';
import ClubInfoCard from '../components/ClubInfoCard';
import { iFilterCondition, iResponseClubInfo } from '../type/type';
import filterClubInfoSelector from '../recoil/selectors/filterClubInfo';
import filterOptionChoiceAtom from '../recoil/atoms/filterOptionChoice';

const gridWrapper = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
`

function ListPage() {
  const result = useRecoilValue<Array<iResponseClubInfo> | undefined>(filterClubInfoSelector);
  const [options, setOptions] = useRecoilState<iFilterCondition>(filterOptionChoiceAtom);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const typeParams = searchParams.get('type');
    const placeParams = searchParams.get('place');
    const newOption = {} as iFilterCondition;

    if (!typeParams && !placeParams) return;

    if (typeParams) newOption.type = [typeParams];
    if (placeParams) newOption.place = [placeParams];

    setOptions({ ...options, ...newOption});
  }, [])

  return (
    <Fragment>
      <div css={gridWrapper}>
        {!!result && result.map(cardData => {
          return (
            <div key={cardData.createdAt}>
              <ClubInfoCard cardData={cardData}/>
            </div>
          )
        })}
      </div>
    </Fragment>
  );
}

export default ListPage;
