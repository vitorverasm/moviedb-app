import {Title} from 'react-native-paper';
import styled from 'styled-components/native';
import {Container, CustomButton} from '../../styles';
import theme from '../../styles/theme';

export const PageContainer = styled(Container)``;

export const PageTitle = styled(Title)``;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
`;

export const HeaderLogo = styled(Container)`
  flex-direction: row;
  margin-left: 10px;
  margin-top: 25px;
`;

export const NextButton = styled(CustomButton).attrs(() => ({
  outlined: true
}))`
  flex: 1;
  margin: 5px;
  background-color: ${theme.colors.white};
`;
