import {combineReducers} from 'redux';
import AuthenticationReducer from './authentication';

export default combineReducers({
  authentication: AuthenticationReducer
});
