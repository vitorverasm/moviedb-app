import {Platform} from 'react-native';
import {FAB, IconButton, Subheading, Title} from 'react-native-paper';
import styled from 'styled-components/native';
import {Container} from '../../styles';
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
  margin-top: ${Platform.OS === 'android' ? '70px' : '100px'};
  padding: 15px;
`;

export const SectionContainer = styled(Container)`
  flex: 5;
  margin-horizontal: 20px;
  padding-bottom: 5px;
`;

export const SectionPageContainer = styled(Container)``;

export const ListContainer = styled(Container)`
  align-items: center;
  flex: 5;
`;

export const ButtonsContainer = styled(Container)`
  max-height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const LoadingText = styled(Subheading)`
  font-weight: bold;
  color: ${theme.colors.primary};
`;

export const NextPageFab = styled(FAB).attrs(() => ({
  icon: 'chevron-right'
}))`
  position: absolute;
  bottom: 20px;
  right: 10px;
`;

export const PreviousPageFab = styled(FAB).attrs(() => ({
  icon: 'chevron-left'
}))`
  position: absolute;
  bottom: 20px;
  left: 10px;
`;
