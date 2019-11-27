import {Formik} from 'formik';
import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {IconButton} from 'react-native-paper';
import {
  NavigationStackOptions,
  NavigationStackProp
} from 'react-navigation-stack';
import * as AuthAPI from '../../api/authentication';
import {ErrorMessage, ErrorTip, KeyboarDismiss} from '../../styles';
import theme from '../../styles/theme';
import {Error, RegisterForm} from '../../types';
import {GetErrorMessage, RegisterValidationSchema} from '../../utils/helpers';
import {
  EmailInput,
  InputsContainer,
  Logo,
  LogoContainer,
  PageContainer,
  PasswordInput,
  SubmitButton,
  Subtitle,
  Title,
  TitleContainer
} from './styles';

interface Props {
  navigation: NavigationStackProp<{}>;
}

interface State {
  initialValues: RegisterForm;
  loading: boolean;
  error: Error;
}

class Register extends Component<Props, State> {
  static navigationOptions = ({
    navigation
  }: {
    navigation: NavigationStackProp;
  }): NavigationStackOptions => ({
    headerLeft: (
      <IconButton
        icon="arrow-left"
        color={theme.colors.primary}
        size={25}
        onPress={() => {
          navigation.goBack();
        }}
      />
    ),
    headerTransparent: true
  });

  constructor(props: Props) {
    super(props);
    this.state = {
      initialValues: {
        email: 'vitorverasm@gmail.com',
        password: '123456',
        passwordConfirmation: '123456'
      },
      loading: false,
      error: {message: '', status: false}
    };
  }

  async submitForm(values: RegisterForm) {
    const {
      navigation: {goBack}
    } = this.props;
    this.setState({loading: true});
    try {
      await AuthAPI.signUp(values);
      this.setState({loading: true});
      goBack();
    } catch (e) {
      this.setState({
        error: {status: true, message: GetErrorMessage(e)},
        loading: false
      });
    }
  }

  render() {
    const {initialValues, loading, error} = this.state;
    return (
      <KeyboarDismiss>
        <PageContainer>
          <LogoContainer>
            <Logo source={require('../../assets/logo.png')} />
          </LogoContainer>
          <TitleContainer>
            <Title>Registre-se</Title>
            <Subtitle>
              Faça agora seu cadastro e tenha acesso a todas as informações de
              seus filmes favoritos!
            </Subtitle>
          </TitleContainer>
          <Formik
            initialValues={initialValues}
            onSubmit={values => this.submitForm(values)}
            validationSchema={RegisterValidationSchema}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched
            }) => (
              <ScrollView>
                <InputsContainer>
                  <EmailInput
                    label="E-mail"
                    value={values.email}
                    onBlur={handleBlur('email')}
                    onChangeText={handleChange('email')}
                    error={errors.email !== undefined && touched.email}
                  />
                  <ErrorTip
                    visible={errors.email !== undefined && touched.email}>
                    {errors.email !== undefined ? errors.email : ''}
                  </ErrorTip>
                  <PasswordInput
                    label="Senha"
                    value={values.password}
                    onBlur={handleBlur('password')}
                    onChangeText={handleChange('password')}
                    error={errors.password !== undefined && touched.password}
                  />
                  <ErrorTip
                    visible={errors.password !== undefined && touched.password}>
                    {errors.password !== undefined ? errors.password : ''}
                  </ErrorTip>
                  <PasswordInput
                    label="Confirmação de senha"
                    value={values.passwordConfirmation}
                    onBlur={handleBlur('passwordConfirmation')}
                    onChangeText={handleChange('passwordConfirmation')}
                    error={
                      errors.passwordConfirmation !== undefined &&
                      touched.passwordConfirmation
                    }
                  />
                  <ErrorTip
                    visible={
                      errors.passwordConfirmation !== undefined &&
                      touched.passwordConfirmation
                    }>
                    {errors.passwordConfirmation !== undefined
                      ? errors.passwordConfirmation
                      : ''}
                  </ErrorTip>
                  <SubmitButton
                    icon="check-outline"
                    dark
                    onPress={handleSubmit}
                    loading={loading}
                    disabled={loading}
                    outlined>
                    Finalizar cadastro
                  </SubmitButton>
                </InputsContainer>
              </ScrollView>
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

export default Register;
