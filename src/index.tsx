import { StrictMode } from 'react';

import ReactDOM from 'react-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ThemeProvider } from 'styled-components';

import { theme } from 'styles/theme';

import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById('root')
);
