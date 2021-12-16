import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { APP_ROUTES } from './enums';
import HomeLazy from './pages/home/home-lazy';
import SigninLazy from './pages/sign-in/sign-in-lazy';
import { getUserAuthenticated } from './session-storage-utils';

const Router = (): ReactElement => {
  const isAuthenticated = getUserAuthenticated();
  const routeElement = isAuthenticated ? <HomeLazy /> : <SigninLazy />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTES.HOME} element={routeElement} />
        <Route path={APP_ROUTES.SIGNIN} element={<SigninLazy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
