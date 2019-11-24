import {Headline} from 'react-native-paper';
import styled from 'styled-components/native';
import {Container, Input, CustomButton} from '../../styles';
import theme from '../../styles/theme';

export const Touchable = styled.TouchableOpacity`
  flex: 1;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 75px;
  height: 75px;
  margin-bottom: 10px;
`;

export const LogoContainer = styled.View`
  margin-top: 50px;
`;

export const LogoTitle = styled(Headline)`
  font-weight: bold;
  text-align-vertical: bottom;
  color: ${theme.colors.primary};
`;

export const PageContainer = styled(Container)`
  padding-horizontal: 25px;
`;

export const InputsContainer = styled.View`
  margin-top: 20px;
`;

export const UsernameInput = styled(Input)``;
export const PasswordInput = styled(Input).attrs(() => ({
  secureTextEntry: true
}))`
  margin-top: 10px;
`;

export const LoginButton = styled(CustomButton).attrs(() => ({
  mode: 'outlined',
  uppercase: false
}))`
  border-color: ${theme.colors.primary};
  border-width: 2px;
  margin-top: 20px;
`;

export const RegisterButton = styled(CustomButton).attrs(() => ({
  mode: 'text',
  uppercase: false,
  icon: 'account-plus-outline'
}))`
  margin-top: 15px;
`;
