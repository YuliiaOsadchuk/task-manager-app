import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Signin from './components/signin/Signin';
import { PATHS } from './enums';
import Home from './pages/home/Home';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PATHS.SIGNIN} element={<Signin />} />
      <Route path={PATHS.HOME} element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
