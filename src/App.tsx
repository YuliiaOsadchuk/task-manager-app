import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';

import Router from './rrouter';
import store from './store/store';
import { THEME } from './theme';

const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={THEME}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  </Provider>
);

export default App;
