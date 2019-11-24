import {LoginAction, LoginForm, LogoutAction} from '../../types';
import {LOGIN, LOGOUT} from './actionTypes';

export function login(form: LoginForm): LoginAction {
  return {
    type: LOGIN,
    payload: form
  };
}

export function logout(): LogoutAction {
  return {
    type: LOGOUT
  };
}
