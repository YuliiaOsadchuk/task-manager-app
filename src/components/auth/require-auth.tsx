import React, { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { APP_ROUTES } from '../../enums';
import UserAuth from './user-auth';

const RequireAuth = ({ children }: any): ReactElement => {
  const location = useLocation();

  const userAuth = new UserAuth();
  const isUserAuthenticated = userAuth.isAuthenticated();

  if (!isUserAuthenticated) {
    return <Navigate to={APP_ROUTES.SIGNIN} state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
