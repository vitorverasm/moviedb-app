import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {RestfulProvider} from 'restful-react';
import ErrorBoundary from './components/ErrorBoundary';
import Router from './routes';
import theme from './styles/theme';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <PaperProvider theme={theme}>
        <ErrorBoundary>
          <RestfulProvider
            queryParams={{api_key: '276d77b1df9d3d083b6b6847042a4fec'}}
            base="https://api.themoviedb.org/3">
            <Router />
          </RestfulProvider>
        </ErrorBoundary>
      </PaperProvider>
    </>
  );
};

export default App;
