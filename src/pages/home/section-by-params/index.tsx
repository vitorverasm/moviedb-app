import React, {FC, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import reactotron from 'reactotron-react-native';
import {MovieListResponseObject, useDiscoverMovieGET} from '../../../api';
import MovieCard from '../../../components/movie-card';
import {Text} from '../../../styles';
import theme from '../../../styles/theme';
import {
  ButtonsContainer,
  ListContainer,
  LoadingText,
  NextButton,
  PreviousButton,
  SectionPageContainer
} from '../popular/styles';

interface SectionByGenreProps {
  genreID?: string;
  keywords?: string;
  excludeKeywords?: string;
}

const SectionByParams: FC<SectionByGenreProps> = ({
  genreID,
  keywords,
  excludeKeywords
}: SectionByGenreProps) => {
  const [page, setPage] = useState(1);

  const {data, error, loading} = useDiscoverMovieGET({
    queryParams: {
      page,
      with_genres: genreID,
      with_keywords: keywords,
      without_keywords: excludeKeywords
    }
  });

  reactotron.log({data, error, loading});

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
                posterPath={item.poster_path}
                loading={loading}
              />
            )}
          />
        </ListContainer>
        <ButtonsContainer>
          <PreviousButton onPress={() => setPage(page - 1)}>
            Anterior
          </PreviousButton>
          <NextButton onPress={() => setPage(page + 1)}>Próximo</NextButton>
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
