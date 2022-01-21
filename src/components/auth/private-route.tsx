import React, { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { APP_ROUTES } from '../../enums';
import UserAuth from './user-auth';

const PrivateRoute = (): ReactElement => {
  const userAuth = new UserAuth();
  const isUserAuthenticated = userAuth.isAuthenticated();

  return isUserAuthenticated ? <Outlet /> : <Navigate to={APP_ROUTES.SIGNIN} />;
};

export default PrivateRoute;
