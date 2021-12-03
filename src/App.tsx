import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';

import Router from './Router';

const App: React.FC = () => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};

export default App;
