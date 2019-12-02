import {Keyboard} from 'react-native';
import {Button, HelperText, Snackbar, TextInput} from 'react-native-paper';
import styled from 'styled-components/native';
import theme from './theme';

interface ContainerProps {
  centered?: boolean;
}

interface ButtonProps {
  outlined?: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  justify-content: ${props => (props.centered ? 'center' : 'flex-start')};
  align-items: ${props => (props.centered ? 'center' : 'stretch')};
`;

export const KeyboarDismiss = styled.TouchableWithoutFeedback.attrs(() => ({
  onPress: Keyboard.dismiss,
  accessible: false
}))``;

export const SafeAreaContainer = styled.SafeAreaView<ContainerProps>`
  flex: 1;
  justify-content: ${props => (props.centered ? 'center' : 'flex-start')};
  align-items: ${props => (props.centered ? 'center' : 'stretch')};
`;

export const Text = styled.Text``;

export const Row = styled.View`
  flex-direction: row;
`;

export const Input = styled(TextInput).attrs(() => ({
  mode: 'outlined',
  dense: true
}))``;

export const CustomButton = styled(Button).attrs(() => ({
  mode: 'outlined',
  uppercase: false
}))<ButtonProps>`
  border-color: ${props =>
    props.disabled ? theme.colors.lightGray : theme.colors.primary};
  border-width: ${props => (props.outlined ? '2px' : '0px')};
`;

export const ErrorMessage = styled(Snackbar)``;

export const ErrorTip = styled(HelperText).attrs(() => ({
  type: 'error'
}))``;
