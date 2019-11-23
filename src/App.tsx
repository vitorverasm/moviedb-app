import React from 'react';
import {StatusBar} from 'react-native';
import Router from './routes';
import {SafeAreaContainer} from './styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaContainer>
        <Router />
      </SafeAreaContainer>
    </>
  );
};

export default App;
