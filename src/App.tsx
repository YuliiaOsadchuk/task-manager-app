import { ThemeProvider } from '@mui/material/styles';
import React from 'react';

import { theme } from './theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <h1>Task Manager</h1>
  </ThemeProvider>
);

export default App;
