import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { APP_ROUTES } from './enums';

const Signin = lazy(() => import('./components/signin/signin'));
const Home = lazy(() => import('./pages/home/home'));

const Router: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Download...</div>}>
      <Routes>
        <Route path={APP_ROUTES.SIGNIN} element={<Signin />} />
        <Route path={APP_ROUTES.HOME} element={<Home />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default Router;
