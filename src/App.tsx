import { ThemeProvider } from '@mui/material/styles';
import React from 'react';

import { THEME } from './theme';

const App: React.FC = () => (
  <ThemeProvider theme={THEME}>
    <h1>Task Manager</h1>
  </ThemeProvider>
);

export default App;
