import firebase, {RNFirebase} from 'react-native-firebase';
import {LoginForm} from '../types';

export function login(form: LoginForm): Promise<RNFirebase.UserCredential> {
  return firebase.auth().signInWithEmailAndPassword(form.email, form.password);
}

export function logout(): Promise<void> {
  return firebase.auth().signOut();
}

export function checkUserAuth(
  handler: (user: RNFirebase.User | null) => void
): void {
  firebase.auth().onAuthStateChanged(user => {
    handler(user);
  });
}
