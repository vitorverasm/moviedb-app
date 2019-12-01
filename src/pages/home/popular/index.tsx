import React, {FC, useState} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import reactotron from 'reactotron-react-native';
import {useMoviePopularGET, MovieListResponseObject} from '../../../api';
import {Text} from '../../../styles';
import {
  ButtonsContainer,
  ListContainer,
  NextButton,
  PreviousButton,
  SectionPageContainer,
  LoadingText
} from './styles';
import MovieCard from '../../../components/movie-card';
import theme from '../../../styles/theme';

const Popular: FC = () => {
  const [page, setPage] = useState(1);

  const {data, error, loading} = useMoviePopularGET({
    queryParams: {
      page
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

export default Popular;
