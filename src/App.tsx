import React from 'react';

import GlobalStyles from './styles/global';
import {ThemeProvider} from 'styled-components';
import ligth from './styles/themes/light';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
    <ThemeProvider theme={ligth}>
    <Routes/>
  
    <GlobalStyles />
    </ThemeProvider>

    </>
  );
}

export default App;
