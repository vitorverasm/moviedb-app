import * as Yup from 'yup';

export function GetErrorMessage(error: {
  message: string;
  code: string;
}): string {
  switch (error.code) {
    case 'auth/user-not-found':
      return 'User not found.';
    case 'auth/wrong-password':
      return 'Wrong password.';

    default:
      return 'Unexpected error occurred. Please check your network connection.';
  }
}

export const LoginValidationSchema: Yup.ObjectSchema<Yup.Shape<
  object,
  {
    email: string;
    password: string;
  }
>> = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Your password must have at least 6 characters')
    .required('Required')
});
