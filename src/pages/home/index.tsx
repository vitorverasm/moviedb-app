import React, {Component} from 'react';
import {IconButton} from 'react-native-paper';
import {
  NavigationStackOptions,
  NavigationStackProp
} from 'react-navigation-stack';
import reactotron from 'reactotron-react-native';
import {Container, Text} from '../../styles';
import {Error} from '../../types';
import {logout} from '../../api/authentication';
import Routes from '../../routes/routeTypes';

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
    headerRight: (
      <IconButton
        icon="exit-to-app"
        size={24}
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
        <Text>Home</Text>
      </Container>
    );
  }
}

export default Home;
