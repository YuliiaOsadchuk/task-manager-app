import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Signin from './components/signin/sign-in';
import { APP_ROUTES } from './enums';
import Home from './pages/home/home-page';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={APP_ROUTES.SIGNIN} element={<Signin />} />
      <Route path={APP_ROUTES.HOME} element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
