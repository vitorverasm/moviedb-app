import {IconButton, Subheading, Title} from 'react-native-paper';
import styled from 'styled-components/native';
import {Container, CustomButton} from '../../styles';
import theme from '../../styles/theme';

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
`;

export const HeaderLogo = styled(Container)`
  flex-direction: row;
  margin-left: 10px;
  margin-top: 25px;
`;

export const HeaderTitle = styled(Title)`
  margin-left: 10px;
  font-weight: bold;
  text-align-vertical: center;
  color: ${theme.colors.primary};
`;

export const LogoutIcon = styled(IconButton).attrs(() => ({
  icon: 'exit-to-app',
  size: 24,
  color: theme.colors.primary
}))`
  margin-right: 10px;
  margin-top: 25px;
`;

export const SectionListContainer = styled(Container)`
  margin-top: 70px;
  padding: 15px;
`;

export const SectionContainer = styled(Container)`
  flex: 4;
  margin-horizontal: 20px;
  padding-bottom: 5px;
`;

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
