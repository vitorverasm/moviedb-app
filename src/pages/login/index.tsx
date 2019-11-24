import {Formik} from 'formik';
import React, {Component} from 'react';
import {
  NavigationStackOptions,
  NavigationStackProp
} from 'react-navigation-stack';
import reactotron from 'reactotron-react-native';
import Routes from '../../routes/routeTypes';
import {KeyboarDismiss} from '../../styles';
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

interface FormValues {
  email: string;
  password: string;
}

interface State {
  initialValues: FormValues;
}

class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      initialValues: {email: '', password: ''}
    };
  }

  static navigationOptions: NavigationStackOptions = {
    header: null
  };

  render() {
    const {initialValues} = this.state;
    const {
      navigation: {navigate}
    } = this.props;
    return (
      <KeyboarDismiss>
        <PageContainer>
          <LogoContainer>
            <Logo source={require('../../assets/movie-night.png')} />
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
                <LoginButton dark onPress={handleSubmit}>
                  Login
                </LoginButton>
                <RegisterButton onPress={() => navigate(Routes.REGISTER)}>
                  Create an account
                </RegisterButton>
              </InputsContainer>
            )}
          </Formik>
        </PageContainer>
      </KeyboarDismiss>
    );
  }
}

export default Login;
