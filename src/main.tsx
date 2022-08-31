import React from 'react';

import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App';

import { theme, GlobalStyles } from 'styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
