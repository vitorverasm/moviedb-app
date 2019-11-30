import React, {Component, ReactNode} from 'react';
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
import Favorites from './favorites';
import Popular from './popular';
import {
  HeaderLogo,
  HeaderTitle,
  Logo,
  LogoutIcon,
  SectionContainer,
  SectionListContainer
} from './styles';

interface Props {
  navigation: NavigationStackProp<{}>;
}

interface State {
  currentSectionID: string;
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
      currentSectionID: '1',
      loading: false,
      error: {message: '', status: false}
    };
  }

  onPressItem(item: Section): void {
    const {currentSectionID} = this.state;
    if (item.id !== currentSectionID) {
      item.onPress();
      this.setState({currentSectionID: item.id});
    }
  }

  renderSection(): ReactNode {
    const {currentSectionID} = this.state;
    switch (currentSectionID) {
      case '1':
        return <Popular />;

      default:
        return <Favorites />;
    }
  }

  render() {
    const {loading, error, currentSectionID} = this.state;
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
                backgroundImageDark={item.backgroundImageDark}
                backgroundImageLight={item.backgroundImageLight}
                onPress={() => this.onPressItem(item)}
                selected={item.id === currentSectionID}
                disabled={loading}
              />
            )}
          />
        </SectionListContainer>
        <SectionContainer>{this.renderSection()}</SectionContainer>
      </Container>
    );
  }
}

export default Home;
