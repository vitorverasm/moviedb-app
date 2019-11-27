import {AuthenticationState, LoginAction, LogoutAction} from '../../types';
import {LOGIN, LOGOUT} from '../actions/actionTypes';

const initialState: AuthenticationState = {
  form: {
    email: '',
    password: ''
  }
};

export default function authenticationReducer(
  state = initialState,
  action: LoginAction | LogoutAction
): AuthenticationState {
  switch (action.type) {
    case LOGIN:
      return {
        form: action.payload
      };
    case LOGOUT:
      return {
        form: action.payload
      };
    default:
      return state;
  }
}
