import React, {FC, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {auth} from 'react-native-firebase';
import {NavigationStackProp} from 'react-navigation-stack';
import MoviesCollection, {MovieRef} from '../../../api/favorites';
import MovieCard from '../../../components/movie-card';
import {Text} from '../../../styles';
import theme from '../../../styles/theme';
import {ListContainer, LoadingText, SectionPageContainer} from '../styles';

interface FavoritesProps {
  navigation: NavigationStackProp<{}>;
}

const Favorites: FC<FavoritesProps> = ({navigation}: FavoritesProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [favorites, setFavorites] = useState<MovieRef[]>([]);

  useEffect(() => {
    const user = auth().currentUser;
    let unsubscribe = () => {};
    if (user) {
      unsubscribe = MoviesCollection.where('user_id', '=', user.uid).onSnapshot(
        querySnapshot => {
          const list: MovieRef[] = [];
          querySnapshot.forEach(document => {
            const {
              movie_id,
              poster_path,
              title,
              user_id
            } = document.data() as MovieRef;
            list.push({
              movie_id,
              poster_path,
              title,
              user_id
            });
          });

          setFavorites(list);

          if (loading) {
            setLoading(false);
          }
        }
      );
    }
    return () => unsubscribe();
  }, [loading]);

  if (loading) {
    return (
      <SectionPageContainer centered>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <LoadingText>Loading</LoadingText>
      </SectionPageContainer>
    );
  }

  if (favorites.length > 0) {
    return (
      <SectionPageContainer>
        <ListContainer>
          <FlatList
            data={favorites}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            keyExtractor={item => item.movie_id}
            renderItem={({item}: {item: MovieRef}) => (
              <MovieCard
                id={item.movie_id}
                navigation={navigation}
                posterPath={item.poster_path}
                loading={loading}
                title={item.title}
              />
            )}
          />
        </ListContainer>
      </SectionPageContainer>
    );
  }

  return (
    <SectionPageContainer centered>
      <Text>Você ainda não possui favoritos.</Text>
    </SectionPageContainer>
  );
};

export default Favorites;
