import React from 'react';
import Home from './Pages/Home';
import { ThemeProvider } from 'styled-components';

import GlocalStyles from './Styles/global';
import { useTheme } from './hooks/Theme';

const App: React.FC = () => {
  const {theme} = useTheme();
  
  return(
      <ThemeProvider theme={theme}>
      <GlocalStyles/>
          <Home/>
      </ThemeProvider>
  );
}

export default App;
