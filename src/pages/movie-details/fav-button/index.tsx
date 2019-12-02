import React, {FC, useEffect, useState} from 'react';
import {auth} from 'react-native-firebase';
import {ResponseDetailsSchema} from '../../../api';
import moviesCollection, {
  addFavorite,
  MovieRef,
  removeFavorite
} from '../../../api/favorites';
import FavoriteBadge from './styles';

interface FavoriteButtonProps {
  movie: ResponseDetailsSchema;
}

const FavoriteButton: FC<FavoriteButtonProps> = ({
  movie
}: FavoriteButtonProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  useEffect(() => {
    const user = auth().currentUser;
    if (user) {
      moviesCollection
        .where('user_id', '=', user.uid)
        .where('movie_id', '=', `${movie.id}`)
        .onSnapshot(snapshot => {
          snapshot.forEach(document => {
            const data = document.data() as MovieRef;
            if (movie.id) {
              if (data.movie_id === movie.id.toString()) {
                setIsFavorite(true);
              } else {
                setIsFavorite(false);
              }
            }
          });
          if (loading) {
            setLoading(false);
          }
        });
    }
  }, [movie, loading]);

  return (
    <FavoriteBadge
      icon={isFavorite ? 'heart' : 'heart-outline'}
      isFavorite={isFavorite}
      onPress={async () => {
        if (isFavorite) {
          await removeFavorite(movie);
        } else {
          await addFavorite(movie);
        }
      }}>
      {isFavorite ? 'Remover' : 'Favoritar'}
    </FavoriteBadge>
  );
};

export default FavoriteButton;
