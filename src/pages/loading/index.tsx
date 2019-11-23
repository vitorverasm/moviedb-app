import React, {Component} from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';

interface Props {
  navigation: NavigationStackProp<{
    isLoggedIn: boolean;
  }>;
}

class Loading extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.isLoggedIn();
  }

  isLoggedIn(): void {
    const {
      navigation: {navigate, getParam}
    } = this.props;
    // TODO: ADD later
    // const userToken = await AsyncStorage.getItem('userToken');
    const userToken: boolean = getParam('isLoggedIn', false);
    navigate(userToken ? 'App' : 'Auth');
  }

  render() {
    return (
      <View>
        <StatusBar barStyle="default" />
        <ActivityIndicator />
      </View>
    );
  }
}

export default Loading;
