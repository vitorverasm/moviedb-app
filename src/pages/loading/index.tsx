import React, {Component} from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import firebase from 'react-native-firebase';
import {NavigationStackProp} from 'react-navigation-stack';
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

  componentWillUnmount() {
    if (this.listener) {
      this.listener();
    }
  }

  listener: () => void = () => {};

  isLoggedIn(): void {
    const {
      navigation: {navigate}
    } = this.props;
    this.listener = firebase.auth().onAuthStateChanged(user => {
      navigate(user ? Routes.MOVIE_DETAILS : Routes.LOGIN);
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
