import {ImageSourcePropType} from 'react-native';

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

export interface AuthenticationState {
  form?: LoginForm;
}

export interface Section {
  id: string;
  label: string;
  icon?: string;
  genreID?: string;
  keywords?: string;
  excludeKeywords?: string;
  backgroundImageDark: ImageSourcePropType;
  backgroundImageLight: ImageSourcePropType;
}

export interface SectionProps<TResponse> {
  data?: TResponse;
  loading?: boolean;
  error?: Error;
}
