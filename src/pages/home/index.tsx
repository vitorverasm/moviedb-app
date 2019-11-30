import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {
  NavigationStackOptions,
  NavigationStackProp
} from 'react-navigation-stack';
import reactotron from 'reactotron-react-native';
import ENV from '../../../env.json';
import {logout} from '../../api/authentication';
import Card from '../../components/card';
import Routes from '../../routes/routeTypes';
import {Container} from '../../styles';
import {Error, Section} from '../../types';
import Sections from '../../utils/sections';
import {
  HeaderLogo,
  HeaderTitle,
  Logo,
  LogoutIcon,
  SectionListContainer
} from './styles';

interface Props {
  navigation: NavigationStackProp<{}>;
}

interface State {
  itemPressed: string;
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
      itemPressed: '1',
      loading: false,
      error: {message: '', status: false}
    };
  }

  onPressItem(item: Section): void {
    const {itemPressed} = this.state;
    if (item.id !== itemPressed) {
      item.onPress();
      this.setState({itemPressed: item.id});
    }
  }

  render() {
    const {loading, error, itemPressed} = this.state;
    reactotron.log({loading, error});
    return (
      <Container centered>
        <SectionListContainer>
          <FlatList
            data={Sections}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <Card
                id={item.id}
                label={item.label}
                onPress={() => this.onPressItem(item)}
                selected={item.id === itemPressed}
                disabled={loading}
              />
            )}
          />
        </SectionListContainer>
      </Container>
    );
  }
}

export default Home;
