import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Loading from '../pages/loading';
import Login from '../pages/login';
import Popular from '../pages/home';
import Register from '../pages/register';
import Routes from './routeTypes';
import MovieDetails from '../pages/movie-details';

const AppStack = createStackNavigator({
  [Routes.HOME]: Popular,
  [Routes.MOVIE_DETAILS]: MovieDetails
});
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
