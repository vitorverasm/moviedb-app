import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
import styles from '../../styles';

const Home: FunctionComponent = () => {
  return (
    <View
      style={[
        styles.container,
        {justifyContent: 'center', alignItems: 'center'}
      ]}>
      <Text style={{color: '#333'}}>Home</Text>
    </View>
  );
};

export default Home;
