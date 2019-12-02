import React, {FC, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import {MovieListResponseObject, useMoviePopularGET} from '../../../api';
import MovieCard from '../../../components/movie-card';
import {Text} from '../../../styles';
import theme from '../../../styles/theme';
import {
  ButtonsContainer,
  ListContainer,
  LoadingText,
  NextPageFab,
  PreviousPageFab,
  SectionPageContainer
} from '../styles';

interface PopularProps {
  navigation: NavigationStackProp<{}>;
}

const Popular: FC<PopularProps> = ({navigation}: PopularProps) => {
  const [page, setPage] = useState(1);

  const {data, loading} = useMoviePopularGET({
    queryParams: {
      page,
      language: 'pt-BR'
    }
  });

  if (loading) {
    return (
      <SectionPageContainer centered>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <LoadingText>Loading</LoadingText>
      </SectionPageContainer>
    );
  }

  if (data) {
    return (
      <SectionPageContainer>
        <ListContainer>
          <FlatList
            data={data.results}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            renderItem={({item}: {item: MovieListResponseObject}) => (
              <MovieCard
                id={item.id}
                navigation={navigation}
                posterPath={item.poster_path}
                loading={loading}
                title={item.title}
              />
            )}
          />
        </ListContainer>
        <ButtonsContainer>
          <NextPageFab onPress={() => setPage(page + 1)} />
          <PreviousPageFab
            onPress={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }}
          />
        </ButtonsContainer>
      </SectionPageContainer>
    );
  }

  return (
    <SectionPageContainer centered>
      <Text>Falha ao carregar resultados</Text>
    </SectionPageContainer>
  );
};

export default Popular;
