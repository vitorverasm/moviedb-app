import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {RestfulProvider} from 'restful-react';
import ENV from '../env.json';
import ErrorBoundary from './components/error-boundary';
import Router from './routes';
import theme from './styles/theme';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <PaperProvider theme={theme}>
        <ErrorBoundary>
          <RestfulProvider
            queryParams={{api_key: ENV.MOVIEDB_API_KEY}}
            base={ENV.MOVIEDB_API_BASE_URL}>
            <Router />
          </RestfulProvider>
        </ErrorBoundary>
      </PaperProvider>
    </>
  );
};

export default App;
