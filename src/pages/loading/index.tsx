import React, {Component} from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import {checkUserAuth} from '../../api/authentication';
import Routes from '../../routes/routeTypes';

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
      navigation: {navigate}
    } = this.props;
    checkUserAuth(user => {
      navigate(user ? Routes.HOME : Routes.LOGIN);
    });
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
