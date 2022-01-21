import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PrivateRoute from './components/auth/private-route';
import { APP_ROUTES } from './enums';
import HomeLazy from './pages/home/home-lazy';
import SigninLazy from './pages/sign-in/sign-in-lazy';

const Router = (): ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path={APP_ROUTES.HOME} element={<PrivateRoute />}>
        <Route path={APP_ROUTES.HOME} element={<HomeLazy />} />
      </Route>
      <Route path={APP_ROUTES.SIGNIN} element={<SigninLazy />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
