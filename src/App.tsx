import React from 'react';
import {StatusBar} from 'react-native';
import Login from './pages/login';
import {SafeAreaContainer} from './styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaContainer>
        <Login />
      </SafeAreaContainer>
    </>
  );
};

export default App;
