import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import {
  FlatList,
  NavigationScreenProp,
  NavigationState
} from 'react-navigation';
import {
  NavigationStackOptions,
  NavigationStackProp
} from 'react-navigation-stack';
import {Genre, useMovieByMovieIdGET} from '../../api';
import Routes from '../../routes/routeTypes';
import theme from '../../styles/theme';
import FavoriteButton from './fav-button';
import {
  Badges,
  BadgesRow,
  BadgesShimmer,
  Content,
  ContentBody,
  ContentLabel,
  ContentText,
  DetailsButton,
  InfoContainer,
  Logo,
  LogoContainer,
  LogoShimmer,
  PageContainer,
  PageTitle,
  TextShimmer
} from './styles';

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
  const {data, loading} = useMovieByMovieIdGET({
    movie_id: navigation.getParam('movieID', null),
    queryParams: {
      language: 'pt-BR'
    }
  });

  if (loading) {
    return (
      <PageContainer>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.white}
        />
        <LogoContainer>
          <LogoShimmer />
        </LogoContainer>
        <InfoContainer>
          <BadgesRow>
            <BadgesShimmer />
            <BadgesShimmer />
            <BadgesShimmer />
          </BadgesRow>
          <Content loading>
            <ContentBody>
              <TextShimmer widthPercentage="90" />
              <TextShimmer widthPercentage="50" />
              <TextShimmer widthPercentage="75" />
            </ContentBody>
          </Content>
        </InfoContainer>
      </PageContainer>
    );
  }

  if (data) {
    return (
      <PageContainer>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.white}
        />
        <LogoContainer>
          <Logo
            source={{
              uri: `https://image.tmdb.org/t/p/original/${data.backdrop_path}`
            }}
          />
        </LogoContainer>
        <InfoContainer>
          <BadgesRow>
            <Badges icon="star-outline" disabled>
              {data.vote_average}
            </Badges>
            <Badges icon="timelapse" disabled>{`${data.runtime} min`}</Badges>
            <FavoriteButton movie={data} />
          </BadgesRow>
          <Content>
            <ContentBody>
              <DetailsButton
                icon="play-circle-outline"
                onPress={() =>
                  navigation.navigate(Routes.MOVIE_VIDEOS, {
                    movieID: navigation.getParam('movieID', null),
                    movieTitle: navigation.getParam('movieTitle', null)
                  })
                }>
                Ver vídeos
              </DetailsButton>
            </ContentBody>
            <ContentBody>
              <ContentLabel>Gêneros:</ContentLabel>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data.genres}
                keyExtractor={item => item!.id!.toString()}
                renderItem={({item}: {item: Genre}) => (
                  <DetailsButton disabled>{item.name}</DetailsButton>
                )}
              />
            </ContentBody>
            <ContentBody>
              <ContentLabel>Visão geral:</ContentLabel>
              <ContentText>{data.overview}</ContentText>
            </ContentBody>
            <ContentBody>
              <ContentLabel>Data de lançamento:</ContentLabel>
              <ContentText>{data.release_date}</ContentText>
            </ContentBody>
          </Content>
        </InfoContainer>
      </PageContainer>
    );
  }
  return (
    <PageContainer centered>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.black}
      />
      <PageTitle>Falha ao carregar informações</PageTitle>
    </PageContainer>
  );
};

MovieDetails.navigationOptions = ({
  navigation
}: {
  navigation: Navigation;
}): NavigationStackOptions => ({
  title: navigation.getParam('movieTitle', 'Título'),
  headerTintColor: theme.colors.black,
  headerTitleStyle: {
    fontWeight: 'bold'
  },
  headerStyle: {
    backgroundColor: theme.colors.white
  }
});

export default MovieDetails;
