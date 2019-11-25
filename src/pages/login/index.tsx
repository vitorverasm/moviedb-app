import {Formik} from 'formik';
import React, {Component} from 'react';
import {
  NavigationStackOptions,
  NavigationStackProp
} from 'react-navigation-stack';
import * as AuthAPI from '../../api/authentication';
import Routes from '../../routes/routeTypes';
import {ErrorMessage, ErrorTip, KeyboarDismiss} from '../../styles';
import {Error, LoginForm} from '../../types';
import {GetErrorMessage, LoginValidationSchema} from '../../utils/helpers';
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
      initialValues: {email: 'vitorverasm@gmail.com', password: '123456'},
      loading: false,
      error: {message: '', status: false}
    };
  }

  static navigationOptions: NavigationStackOptions = {
    header: null
  };

  async submitForm(values: LoginForm) {
    const {
      navigation: {navigate}
    } = this.props;
    this.setState({loading: true});
    try {
      await AuthAPI.login(values);
      this.setState({loading: false});
      navigate(Routes.HOME);
    } catch (e) {
      this.setState({
        error: {status: true, message: GetErrorMessage(e)},
        loading: false
      });
    }
  }

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
            onSubmit={values => this.submitForm(values)}
            validationSchema={LoginValidationSchema}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched
            }) => (
              <InputsContainer>
                <UsernameInput
                  label="Email"
                  value={values.email}
                  onBlur={handleBlur('email')}
                  onChangeText={handleChange('email')}
                  error={errors.email !== undefined && touched.email}
                />
                <ErrorTip visible={errors.email !== undefined && touched.email}>
                  {errors.email !== undefined ? errors.email : ''}
                </ErrorTip>
                <PasswordInput
                  label="Password"
                  value={values.password}
                  onBlur={handleBlur('password')}
                  onChangeText={handleChange('password')}
                  error={errors.password !== undefined && touched.password}
                />
                <ErrorTip
                  visible={errors.password !== undefined && touched.password}>
                  {errors.password !== undefined ? errors.password : ''}
                </ErrorTip>
                <LoginButton dark onPress={handleSubmit} loading={loading}>
                  Login
                </LoginButton>
                <RegisterButton onPress={() => navigate(Routes.REGISTER)}>
                  Create an account
                </RegisterButton>
              </InputsContainer>
            )}
          </Formik>
          <ErrorMessage
            visible={error.status}
            onDismiss={() =>
              this.setState({error: {status: false, message: ''}})
            }
            action={{
              label: 'Ok',
              onPress: () => {}
            }}>
            {error.message}
          </ErrorMessage>
        </PageContainer>
      </KeyboarDismiss>
    );
  }
}

export default Login;
