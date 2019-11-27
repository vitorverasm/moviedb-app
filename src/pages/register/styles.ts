import {Headline, Subheading} from 'react-native-paper';
import styled from 'styled-components/native';
import {Container, Input, CustomButton} from '../../styles';
import theme from '../../styles/theme';

export const Logo = styled.Image`
  width: 75px;
  height: 75px;
  margin-bottom: 10px;
`;

export const LogoContainer = styled.View`
  margin-top: 50px;
`;

export const TitleContainer = styled.View`
  margin-left: 5px;
`;

export const Title = styled(Headline)`
  font-weight: bold;
  text-align-vertical: bottom;
  color: ${theme.colors.primary};
`;

export const InputsContainer = styled.KeyboardAvoidingView.attrs(() => ({
  behavior: 'position'
}))`
  margin-top: 20px;
`;

export const Subtitle = styled(Subheading)`
  text-align-vertical: bottom;
  font-size: 14px;
`;

export const PageContainer = styled(Container)`
  padding-horizontal: 25px;
`;

export const EmailInput = styled(Input)``;
export const PasswordInput = styled(Input).attrs(() => ({
  secureTextEntry: true
}))``;

export const SubmitButton = styled(CustomButton)`
  margin-top: 10px;
`;
