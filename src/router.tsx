import React, { useContext, ReactElement } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { authContext } from './auth/auth-context';
import { APP_ROUTES } from './enums';
import HomeLazy from './pages/home/home-lazy';
import SigninLazy from './pages/sign-in/sign-in-lazy';

const Router: React.FC = () => {
  const auth = useContext(authContext);
  // eslint-disable-next-line no-console
  console.log('user', auth);
  const renderElement: ReactElement = auth?.user ? <HomeLazy /> : <Navigate to='/' />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTES.SIGNIN} element={<SigninLazy />} />
        <Route path={APP_ROUTES.HOME} element={renderElement} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
