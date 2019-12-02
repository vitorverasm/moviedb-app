import React, {FC} from 'react';
import {StatusBar} from 'react-native';
// @ts-ignore
import YouTube from 'react-native-youtube';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import {
  NavigationStackOptions,
  NavigationStackProp
} from 'react-navigation-stack';
import ENV from '../../../../env.json';
import {useMovieVideosByMovieIdGET} from '../../../api';
import theme from '../../../styles/theme';
import {LogoShimmer, PageContainer, PageTitle, VideoContainer} from '../styles';

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

  if (loading) {
    return (
      <PageContainer>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.white}
        />
        <PageContainer />
        <VideoContainer centered>
          <LogoShimmer />
        </VideoContainer>
        <PageContainer />
      </PageContainer>
    );
  }

  if (data && data.results && data.results.length > 0) {
    return (
      <PageContainer>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.white}
        />
        <PageContainer />
        <VideoContainer>
          <YouTube
            apiKey={ENV.YOUTUBE_API_KEY}
            style={{flex: 1}}
            videoIds={data.results.map(item => item.key)}
          />
        </VideoContainer>
        <PageContainer />
      </PageContainer>
    );
  }
  return (
    <PageContainer centered>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.black}
      />
      <PageTitle>Sem vídeos promocionais</PageTitle>
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
