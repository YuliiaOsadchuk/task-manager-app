import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomeLazy from './pages/home/home-lazy';
import SigninLazy from './pages/sign-in/sign-in-lazy';
import { APP_ROUTES } from './enums';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={APP_ROUTES.SIGNIN} element={<SigninLazy />} />
      <Route path={APP_ROUTES.HOME} element={<HomeLazy />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
