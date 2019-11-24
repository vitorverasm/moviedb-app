import React, {Component} from 'react';
import {IconButton} from 'react-native-paper';
import {
  NavigationStackOptions,
  NavigationStackProp
} from 'react-navigation-stack';
import reactotron from 'reactotron-react-native';
import {Container, Text} from '../../styles';
import {Error} from '../../types';

interface Props {
  navigation: NavigationStackProp<{}>;
}

interface State {
  loading: boolean;
  error: Error;
}

class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: false,
      error: {message: '', status: false}
    };
  }

  static navigationOptions: NavigationStackOptions = {
    headerRight: (
      <IconButton
        icon="exit-to-app"
        size={20}
        onPress={() => console.log('Pressed')}
      />
    )
  };

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
