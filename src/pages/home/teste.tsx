import React from 'react';
import {Text, View} from 'react-native';
import reactotron from 'reactotron-react-native';
import {useTrendingByMediaTypeAndTimeWindowGET} from '../../api/api';

interface Data {
  page: number;
  total_pages: number;
}

const Teste = () => {
  const {data, error, loading} = useTrendingByMediaTypeAndTimeWindowGET({
    media_type: 'movie',
    time_window: 'week'
  });
  reactotron.log(data);
  if (error) {
    return <Text>erro</Text>;
  }
  if (loading) {
    return <Text>loading</Text>;
  }
  return (
    <View>
      <Text>legal</Text>
    </View>
  );
};

export default Teste;
