import React, {FC, useState} from 'react';
import {FlatList} from 'react-native';
import reactotron from 'reactotron-react-native';
import {useTrendingByMediaTypeAndTimeWindowGET} from '../../../api';
import {
  NextButton,
  PreviousButton,
  SectionPageContainer,
  ButtonsContainer,
  ListContainer
} from './styles';
import {Text} from '../../../styles';

const Popular: FC = () => {
  const [page, setPage] = useState(1);

  const {data, error, loading} = useTrendingByMediaTypeAndTimeWindowGET({
    media_type: 'movie',
    time_window: 'week',
    queryParams: {
      language: 'pt-BR',
      page
    }
  });

  reactotron.log({data, error, loading});

  if (loading) {
    return (
      <SectionPageContainer centered>
        <Text>Loading</Text>
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
            renderItem={({item}) => <Text>{item.title}</Text>}
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
