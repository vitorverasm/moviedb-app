import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './pages/home';
import styles from './styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    </>
  );
};

export default App;
