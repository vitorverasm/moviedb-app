import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Favorites from '../pages/favorites';
import Loading from '../pages/loading';
import Login from '../pages/login';
import Popular from '../pages/home';
import Register from '../pages/register';
import Routes from './routeTypes';

const AppStack = createStackNavigator({
  [Routes.HOME]: Popular,
  [Routes.FAVORITES]: Favorites
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
