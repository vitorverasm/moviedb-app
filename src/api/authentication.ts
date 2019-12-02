import firebase, {RNFirebase} from 'react-native-firebase';
import {LoginForm, RegisterForm} from '../types';

export function login(form: LoginForm): Promise<RNFirebase.UserCredential> {
  return firebase.auth().signInWithEmailAndPassword(form.email, form.password);
}

export function logout(): Promise<void> {
  return firebase.auth().signOut();
}

export function signUp(form: RegisterForm): Promise<RNFirebase.UserCredential> {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(form.email, form.password);
}
