import {AxiosInstance} from 'axios';
import {ImageSourcePropType} from 'react-native';
import {LOGIN, LOGOUT} from '../redux/actions/actionTypes';

export interface Action {
  type: string;
  payload?: any;
}

export interface Error {
  message: string;
  status: boolean;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm extends LoginForm {
  passwordConfirmation: string;
}

export interface LoginAction extends Action {
  type: typeof LOGIN;
  payload: LoginForm;
}

export interface LogoutAction extends Action {
  type: typeof LOGOUT;
}

export interface AuthenticationState {
  form?: LoginForm;
}

export interface RequestService {
  moviedbAPI: AxiosInstance;
}

export interface Section {
  id: string;
  label: string;
  icon?: string;
  backgroundImageDark: ImageSourcePropType;
  backgroundImageLight: ImageSourcePropType;
  onPress: () => void;
}

export interface SectionProps<TResponse> {
  data?: TResponse;
  loading?: boolean;
  error?: Error;
}
