import React, {FC} from 'react';
import {NavigationStackProp} from 'react-navigation-stack';
import {PageContainer, PageTitle} from './styles';

interface MovieDetailsProps {
  navigation: NavigationStackProp<{movieID?: string}>;
}

const MovieDetails: FC<MovieDetailsProps> = ({
  navigation
}: MovieDetailsProps) => {
  return (
    <PageContainer centered>
      <PageTitle>{navigation.getParam('movieID', 'Vazio')}</PageTitle>
    </PageContainer>
  );
};

export default MovieDetails;
