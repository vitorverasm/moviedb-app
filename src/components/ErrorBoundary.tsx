import React, {Component} from 'react';
import {Container, Text} from '../styles';

interface Props {
  children: any;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(): State {
    return {
      hasError: true
    };
  }

  render() {
    const {hasError} = this.state;
    const {children} = this.props;
    if (hasError) {
      return (
        <Container centered>
          <Text>Oops! Algo deu errado!</Text>
        </Container>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
