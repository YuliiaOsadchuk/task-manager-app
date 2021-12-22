import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RequireAuth from './components/auth/require-auth';
import { APP_ROUTES } from './enums';
import HomeLazy from './pages/home/home-lazy';
import SigninLazy from './pages/sign-in/sign-in-lazy';

const Router = (): ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route
        path={APP_ROUTES.HOME}
        element={
          <RequireAuth>
            <HomeLazy />
          </RequireAuth>
        }
      />
      <Route path={APP_ROUTES.SIGNIN} element={<SigninLazy />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
