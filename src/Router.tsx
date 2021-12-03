import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Signin from './components/signin/Signin';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
