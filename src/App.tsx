import React from 'react';
import {StatusBar} from 'react-native';
import Home from './pages/home';
import {SafeAreaContainer} from './styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaContainer>
        <Home />
      </SafeAreaContainer>
    </>
  );
};

export default App;
