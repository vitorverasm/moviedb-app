import React, {Component} from 'react';
import {
  NavigationStackOptions,
  NavigationStackProp
} from 'react-navigation-stack';
import reactotron from 'reactotron-react-native';
import ENV from '../../../env.json';
import {logout} from '../../api/authentication';
import Routes from '../../routes/routeTypes';
import {Container, Text} from '../../styles';
import {Error} from '../../types';
import {HeaderLogo, HeaderTitle, Logo, LogoutIcon} from './styles';

interface Props {
  navigation: NavigationStackProp<{}>;
}

interface State {
  loading: boolean;
  error: Error;
}

class Home extends Component<Props, State> {
  static navigationOptions = ({
    navigation
  }: {
    navigation: NavigationStackProp<{}>;
  }): NavigationStackOptions => ({
    headerTransparent: true,
    headerLeft: (
      <HeaderLogo>
        <Logo source={require('../../assets/logo.png')} />
        <HeaderTitle>{ENV.APP_NAME}</HeaderTitle>
      </HeaderLogo>
    ),
    headerRight: (
      <LogoutIcon
        onPress={() => {
          const {navigate} = navigation;
          logout();
          navigate(Routes.LOGIN);
        }}
      />
    )
  });

  constructor(props: Props) {
    super(props);
    this.state = {
      loading: false,
      error: {message: '', status: false}
    };
  }

  render() {
    const {loading, error} = this.state;
    reactotron.log({loading, error});
    return (
      <Container centered>
        <Text>Popular</Text>
      </Container>
    );
  }
}

export default Home;
