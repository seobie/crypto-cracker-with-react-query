import { StrictMode } from 'react';

import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from 'styles/theme';

import App from './App';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
