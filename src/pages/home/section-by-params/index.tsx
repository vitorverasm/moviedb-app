import React, {FC, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import {MovieListResponseObject, useDiscoverMovieGET} from '../../../api';
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

interface SectionByGenreProps {
  genreID?: string;
  keywords?: string;
  excludeKeywords?: string;
  navigation: NavigationStackProp<{}>;
}

const SectionByParams: FC<SectionByGenreProps> = ({
  genreID,
  keywords,
  excludeKeywords,
  navigation
}: SectionByGenreProps) => {
  const [page, setPage] = useState(1);

  const {data, loading} = useDiscoverMovieGET({
    queryParams: {
      page,
      language: 'pt-BR',
      with_genres: genreID,
      with_keywords: keywords,
      without_keywords: excludeKeywords
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
          <PreviousPageFab
            onPress={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }}>
            Anterior
          </PreviousPageFab>
          <NextPageFab onPress={() => setPage(page + 1)}>Próxima</NextPageFab>
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

export default SectionByParams;
