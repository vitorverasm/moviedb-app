import React, {FC} from 'react';
import {CardContainer, CardLogo} from './styles';

interface MovieCardProps {
  id?: number;
  posterPath?: string | null;
  onPress?: () => void;
  loading?: boolean;
}

const MovieCard: FC<MovieCardProps> = ({
  id,
  posterPath,
  loading,
  onPress
}: MovieCardProps) => {
  return (
    <CardContainer
      key={id}
      onPress={onPress}
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
