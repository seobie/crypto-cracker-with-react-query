import { ReactQueryDevtools } from 'react-query/devtools';

import GlobalStyle from 'styles/globalStyles';

import Router from './Router';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen />
    </>
  );
}

export default App;
