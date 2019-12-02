import React, {FC} from 'react';
import {NavigationStackProp} from 'react-navigation-stack';
import Routes from '../../routes/routeTypes';
import {CardContainer, CardLogo} from './styles';

interface MovieCardProps {
  id?: number | string;
  posterPath?: string | null;
  loading?: boolean;
  navigation: NavigationStackProp<{}>;
  title?: string;
}

const MovieCard: FC<MovieCardProps> = ({
  id,
  posterPath,
  loading,
  navigation,
  title
}: MovieCardProps) => {
  return (
    <CardContainer
      key={id}
      onPress={() => {
        navigation.navigate(Routes.MOVIE_DETAILS, {
          movieID: id,
          movieTitle: title
        });
      }}
      centered
      elevation={3}
      disabled={loading}>
      <CardLogo
        resizeMode="contain"
        source={{uri: `https://image.tmdb.org/t/p/w200/${posterPath}`}}
      />
    </CardContainer>
  );
};

export default MovieCard;
