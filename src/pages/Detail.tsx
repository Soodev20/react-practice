import { Fragment, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useLocation } from 'react-router-dom';
import clubInfoIdAtom from '../recoil/atoms/clubInfoId';
import ClubDetailCard from '../components/ClubDetailCard';
import clubDetailSelector from '../recoil/selectors/clubDetail';
import { iResponseClubInfo } from '../type/type';

function DetailPage() {
  const [id, setId] = useRecoilState<string>(clubInfoIdAtom);
  const designatedClubData = useRecoilValue<iResponseClubInfo | undefined>(clubDetailSelector);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const idParams = searchParams.get('id');

    if (!idParams) return;

    setId(idParams);
  }, [])

  return (
    <Fragment>
      {(id.length && !!designatedClubData)
        && <ClubDetailCard cardData={designatedClubData}/>
      }
      {(!designatedClubData || !designatedClubData?.createdAt)
        && (
          <div>
            <h1>일치하는 정보를 찾을 수 없습니다.</h1>
          </div>
        )
      }
    </Fragment>
  );
}

export default DetailPage;
