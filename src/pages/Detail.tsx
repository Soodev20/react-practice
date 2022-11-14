import { useRecoilValue } from 'recoil';
import getClubInfoSelector from '../recoil/selectors/getClubInfo';

function DetailPage() {
  const result = useRecoilValue(getClubInfoSelector);

  return (
    <div>
      <p>This is DetailPage</p>
    </div>
  );
}

export default DetailPage;
