import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Router from './routes';
import theme from './styles/theme';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <PaperProvider theme={theme}>
        <Router />
      </PaperProvider>
    </>
  );
};

export default App;
