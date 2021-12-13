import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

import { useProvideAuth } from './auth/auth';
import { authContext } from './auth/auth-context';
import Router from './router';
import { store } from './store/store';
import { THEME } from './theme';

const App = (): ReactElement => {
  const auth = useProvideAuth();

  return (
    <authContext.Provider value={auth}>
      <Provider store={store}>
        <ThemeProvider theme={THEME}>
          <CssBaseline />
          <Router />
        </ThemeProvider>
      </Provider>
    </authContext.Provider>
  );
};

export default App;
