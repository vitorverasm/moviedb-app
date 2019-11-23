import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';
import App from './src/App';

if (__DEV__) {
  import('./src/utils/reactotron').then(() =>
    console.log('Reactotron Configured')
  );
}

AppRegistry.registerComponent(appName, () => App);
