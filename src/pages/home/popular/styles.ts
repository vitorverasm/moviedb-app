import {Subheading} from 'react-native-paper';
import styled from 'styled-components/native';
import {Container, CustomButton} from '../../../styles';
import theme from '../../../styles/theme';

export const SectionPageContainer = styled(Container)``;

export const ListContainer = styled(Container)`
  flex: 5;
`;

export const ButtonsContainer = styled(Container)`
  max-height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const NextButton = styled(CustomButton).attrs(() => ({
  outlined: true
}))`
  flex: 1;
  margin: 5px;
  background-color: ${theme.colors.white};
`;

export const PreviousButton = styled(CustomButton).attrs(() => ({
  outlined: true
}))`
  flex: 1;
  margin: 5px;
  background-color: ${theme.colors.white};
`;

export const LoadingText = styled(Subheading)`
  font-weight: bold;
  color: ${theme.colors.primary};
`;
