import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';

import Router from './Router';
import store from './store/store';

const App: React.FC = () => {
  const theme = createTheme();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
