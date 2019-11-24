import {Keyboard} from 'react-native';
import {Button, HelperText, Snackbar, TextInput} from 'react-native-paper';
import styled from 'styled-components/native';

interface ContainerProps {
  centered?: boolean;
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

export const CustomButton = styled(Button)``;

export const ErrorMessage = styled(Snackbar)``;

export const ErrorTip = styled(HelperText).attrs(() => ({
  type: 'error'
}))``;
