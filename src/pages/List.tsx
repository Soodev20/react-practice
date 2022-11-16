import { Fragment, useEffect, useState, useRef, RefObject, useCallback } from 'react';
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
  const [data, setData] = useState<Array<iResponseClubInfo>>([]);
  const [page, setPage] = useState<number>(0);
  const observer = useRef<IntersectionObserver | null>(null)
  const location = useLocation();
  const CONTENT_PER_PAGE = 10;

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const typeParams = searchParams.get('type');
    const placeParams = searchParams.get('place');
    const newOption = {} as iFilterCondition;

    if (!typeParams && !placeParams) return;

    if (typeParams) newOption.type = [typeParams];
    if (placeParams) newOption.place = [placeParams];

    setOptions({ ...options, ...newOption});
  }, []);

  const lastItemRef = useCallback((node: Element) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prevPage => prevPage + 1)
      }
    });
    if (node) observer.current.observe(node);
  }, [result])

  useEffect(() => {
    if (result && result.length > CONTENT_PER_PAGE) {
      const startPoint = page ? CONTENT_PER_PAGE * page + 1 : CONTENT_PER_PAGE * page;
      const lastPoint = (startPoint + CONTENT_PER_PAGE > result.length) ? -1 : startPoint + CONTENT_PER_PAGE;
      const newData = result.slice(startPoint, lastPoint);

      setData([...data, ...newData]);
    }

    if (result && result.length <= CONTENT_PER_PAGE) {
      setData(result);
    }
  }, [result, page])

  return (
    <Fragment>
      <div css={gridWrapper}>
        {!!result && data.map((cardData, index) => {
            if (result.length === index + 1) {
              return (
                <div key={cardData.createdAt} ref={() => lastItemRef}>
                  <ClubInfoCard cardData={cardData}/>
                </div>
              )
            } else {
              <div key={cardData.createdAt}>
                <ClubInfoCard cardData={cardData}/>
              </div>
            }
        })}
      </div>
    </Fragment>
  );
}

export default ListPage;
