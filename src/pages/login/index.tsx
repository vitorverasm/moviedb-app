import {Formik} from 'formik';
import React, {Component} from 'react';
import {Snackbar} from 'react-native-paper';
import {
  NavigationStackOptions,
  NavigationStackProp
} from 'react-navigation-stack';
import reactotron from 'reactotron-react-native';
import Routes from '../../routes/routeTypes';
import {KeyboarDismiss} from '../../styles';
import {Error, LoginForm} from '../../types';
import {
  InputsContainer,
  LoginButton,
  Logo,
  LogoContainer,
  LogoTitle,
  PageContainer,
  PasswordInput,
  RegisterButton,
  UsernameInput
} from './styles';

interface Props {
  navigation: NavigationStackProp<{}>;
}

interface State {
  initialValues: LoginForm;
  loading: boolean;
  error: Error;
}

class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      initialValues: {email: '', password: ''},
      loading: false,
      error: {message: '', status: false}
    };
  }

  static navigationOptions: NavigationStackOptions = {
    header: null
  };

  render() {
    const {initialValues, loading, error} = this.state;
    const {
      navigation: {navigate}
    } = this.props;
    return (
      <KeyboarDismiss>
        <PageContainer>
          <LogoContainer>
            <Logo source={require('../../assets/logo.png')} />
            <LogoTitle>Movies App</LogoTitle>
          </LogoContainer>
          <Formik
            initialValues={initialValues}
            onSubmit={values => reactotron.log(values)}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <InputsContainer>
                <UsernameInput
                  label="Email"
                  value={values.email}
                  onBlur={handleBlur('email')}
                  onChangeText={handleChange('email')}
                />
                <PasswordInput
                  label="Password"
                  value={values.password}
                  onBlur={handleBlur('password')}
                  onChangeText={handleChange('password')}
                />
                <LoginButton dark onPress={handleSubmit} loading={loading}>
                  Login
                </LoginButton>
                <RegisterButton onPress={() => navigate(Routes.REGISTER)}>
                  Create an account
                </RegisterButton>
              </InputsContainer>
            )}
          </Formik>
          <Snackbar
            visible={error.status}
            onDismiss={() =>
              this.setState({error: {status: false, message: ''}})
            }
            action={{
              label: 'Ok',
              onPress: () => {}
            }}>
            {error.message}
          </Snackbar>
        </PageContainer>
      </KeyboarDismiss>
    );
  }
}

export default Login;
