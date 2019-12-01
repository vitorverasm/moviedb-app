import React, {FC} from 'react';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import {
  NavigationStackOptions,
  NavigationStackProp
} from 'react-navigation-stack';
import {PageContainer, PageTitle} from './styles';
import theme from '../../styles/theme';

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
