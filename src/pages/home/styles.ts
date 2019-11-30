import {IconButton, Title} from 'react-native-paper';
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
  margin-top: 100px;
  padding: 15px;
`;

export const SectionContainer = styled(Container)`
  flex: 3;
`;
