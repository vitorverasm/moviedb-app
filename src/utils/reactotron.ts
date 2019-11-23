import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';

Reactotron.clear();
Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'Moviedb'
  })
  .useReactNative({
    asyncStorage: false,
    networking: {
      ignoreUrls: /symbolicate/
    },
    editor: false,
    errors: false,
    overlay: false
  })
  .connect();
