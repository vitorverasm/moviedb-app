import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Popular from '../pages/home';
import Loading from '../pages/loading';
import Login from '../pages/login';
import MovieDetails from '../pages/movie-details';
import MovieDetailsVideo from '../pages/movie-details/videos';
import Register from '../pages/register';
import Routes from './routeTypes';

const AppStack = createStackNavigator(
  {
    [Routes.HOME]: Popular,
    [Routes.MOVIE_DETAILS]: MovieDetails,
    [Routes.MOVIE_VIDEOS]: MovieDetailsVideo
  },
  {
    initialRouteName: Routes.HOME,
    defaultNavigationOptions: {
      headerBackTitle: 'Voltar'
    }
  }
);

const AuthStack = createStackNavigator(
  {
    [Routes.LOGIN]: Login,
    [Routes.REGISTER]: Register
  },
  {initialRouteName: Routes.LOGIN}
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: Loading,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading',
      initialRouteParams: {
        isLoggedIn: false
      }
    }
  )
);
