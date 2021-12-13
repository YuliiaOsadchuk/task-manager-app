import React, { ReactElement, useContext, FC } from 'react';
import { Route, Navigate } from 'react-router-dom';

import { authContext } from './auth-context';

type Props = {
  element: ReactElement;
};

const PrivateRoute: FC<Props> = ({ element }) => {
  const auth = useContext(authContext);
  const renderElement: ReactElement = auth?.user ? element : <Navigate to='/' />;

  return <Route element={renderElement} />;
};

export default PrivateRoute;
