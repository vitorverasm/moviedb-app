import React, {FC} from 'react';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import {
  NavigationStackOptions,
  NavigationStackProp
} from 'react-navigation-stack';
import reactotron from 'reactotron-react-native';
import {useMovieByMovieIdGET} from '../../api';
import theme from '../../styles/theme';
import {PageContainer, PageTitle} from './styles';

interface Navigation
  extends NavigationScreenProp<
    NavigationState,
    {movieID?: string; movieTitle?: string}
  > {}

interface MovieDetailsProps {
  navigation: NavigationStackProp<{movieID?: string; movieTitle?: string}>;
}

interface MovieDetailsInterface extends FC<MovieDetailsProps> {
  navigationOptions?: ({
    navigation
  }: {
    navigation: Navigation;
  }) => NavigationStackOptions;
}

const MovieDetails: MovieDetailsInterface = ({
  navigation
}: MovieDetailsProps) => {
  const {data, error, loading} = useMovieByMovieIdGET({
    movie_id: navigation.getParam('movieID', null),
    queryParams: {
      language: 'pt-BR'
    }
  });
  reactotron.log({data, error, loading});
  return (
    <PageContainer centered>
      <PageTitle>{navigation.getParam('movieID', 'Vazio')}</PageTitle>
    </PageContainer>
  );
};

MovieDetails.navigationOptions = ({
  navigation
}: {
  navigation: Navigation;
}): NavigationStackOptions => ({
  title: navigation.getParam('movieTitle', ''),
  headerTintColor: theme.colors.primary,
  headerTitleStyle: {
    fontWeight: 'bold'
  }
});

export default MovieDetails;
