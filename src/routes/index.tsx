import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../pages/home';
import Routes from './routeTypes';
import Login from '../pages/login';
import Register from '../pages/register';
import Loading from '../pages/loading';

const AppStack = createStackNavigator({[Routes.HOME]: Home});
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
