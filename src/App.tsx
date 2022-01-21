import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { ReactElement, useEffect } from 'react';

import { useAppDispatch } from './hooks';
import Router from './router';
import { loadUsers } from './store/users.slices';
import { THEME } from './theme';

const App = (): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <ThemeProvider theme={THEME}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};

export default App;
