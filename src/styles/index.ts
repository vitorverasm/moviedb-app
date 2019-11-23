import styled from 'styled-components/native';

interface ContainerProps {
  centered?: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  justify-content: ${props => (props.centered ? 'center' : 'flex-start')};
  align-items: ${props => (props.centered ? 'center' : 'stretch')};
`;

export const SafeAreaContainer = styled.SafeAreaView<ContainerProps>`
  flex: 1;
  justify-content: ${props => (props.centered ? 'center' : 'flex-start')};
  align-items: ${props => (props.centered ? 'center' : 'stretch')};
`;

export const Text = styled.Text``;
