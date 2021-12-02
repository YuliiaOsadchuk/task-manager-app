import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';

const App: React.FC = () => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <h1>Task Manager</h1>
    </ThemeProvider>
  );
};

export default App;
