import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import {
  NavigationStackOptions,
  NavigationStackProp
} from 'react-navigation-stack';
import reactotron from 'reactotron-react-native';
import {useMovieVideosByMovieIdGET} from '../../../api';
import theme from '../../../styles/theme';
import {LogoContainer, LogoShimmer, PageContainer, PageTitle} from '../styles';

interface Navigation
  extends NavigationScreenProp<
    NavigationState,
    {movieID?: string; movieTitle?: string}
  > {}

interface MovieDetailsVideoProps {
  navigation: NavigationStackProp<{movieID?: string; movieTitle?: string}>;
}

interface MovieDetailsVideoInterface extends FC<MovieDetailsVideoProps> {
  navigationOptions?: ({
    navigation
  }: {
    navigation: Navigation;
  }) => NavigationStackOptions;
}

const MovieDetailsVideo: MovieDetailsVideoInterface = ({
  navigation
}: MovieDetailsVideoProps) => {
  const {data, loading} = useMovieVideosByMovieIdGET({
    movie_id: navigation.getParam('movieID', null),
    queryParams: {
      language: 'pt-BR'
    }
  });

  reactotron.log({data, loading});

  if (loading) {
    return (
      <PageContainer>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.white}
        />
        <LogoContainer>
          <LogoShimmer />
          <LogoShimmer />
          <LogoShimmer />
        </LogoContainer>
      </PageContainer>
    );
  }

  if (data) {
    return (
      <PageContainer>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.white}
        />
      </PageContainer>
    );
  }
  return (
    <PageContainer centered>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.black}
      />
      <PageTitle>Falha ao carregar informações</PageTitle>
    </PageContainer>
  );
};

MovieDetailsVideo.navigationOptions = ({
  navigation
}: {
  navigation: Navigation;
}): NavigationStackOptions => ({
  title: navigation.getParam('movieTitle', 'Vídeos'),
  headerTintColor: theme.colors.black,
  headerTitleStyle: {
    fontWeight: 'bold'
  },
  headerStyle: {
    backgroundColor: theme.colors.white
  }
});

export default MovieDetailsVideo;
