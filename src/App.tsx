import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/common/Layout';
import Loading from './components/common/Loading';
import NotFoundPage from './pages/NotFound';

const ListPage = lazy(() => import('./pages/List'));
const DetailPage = lazy(() => import('./pages/Detail'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path='/list'
            element={
              <Suspense fallback={<Loading />}>
                <ListPage />
              </Suspense>
            }
          />
          <Route
            path='/detail'
            element={
              <Suspense fallback={<Loading />}>
                <DetailPage />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={<Navigate to="/list" replace />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
