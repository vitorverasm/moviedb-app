import styled from 'styled-components/native';
import {Container, CustomButton} from '../../../styles';

export const SectionPageContainer = styled(Container)``;

export const ListContainer = styled(Container)`
  flex: 5;
`;

export const ButtonsContainer = styled(Container)`
  max-height: 50px;
  padding: 10px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const NextButton = styled(CustomButton).attrs(() => ({
  outlined: true
}))``;

export const PreviousButton = styled(CustomButton).attrs(() => ({
  outlined: true
}))`
  margin-right: 10px;
`;
