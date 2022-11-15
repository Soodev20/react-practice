import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import SearchInput from '../SearchInput';
import Button from './Button';

const layoutCss = css`
  min-width: 300px;
  min-height: 600px;
`

const headerArea = css`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 5px 0.5rem;
  z-index: 1000;
  background-color: white;
`

const outletArea = css`
  padding-top: 60px;
  padding-bottom: 55px;
  width: 100%;
  min-height: 100vh;
`

function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div css={layoutCss}>
      <header css={headerArea}>
          {(pathname === '/' || pathname === '/list')
            ? (
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <SearchInput />
              </div>
            ) : (
              <Button
                clickHandler={() => navigate(-1)}
                text='뒤로가기'
                color='#FFFFFF'
              />
            )
          }
      </header>
      <div css={outletArea}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;