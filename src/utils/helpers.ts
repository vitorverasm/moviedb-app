import * as Yup from 'yup';

export function GetErrorMessage(error: {
  message: string;
  code: string;
}): string {
  switch (error.code) {
    case 'auth/user-not-found':
      return 'Usuário não encontrado.';
    case 'auth/user-disabled':
      return 'Este usuário foi desabilitado.';
    case 'auth/invalid-email':
      return 'E-mail inválido.';
    case 'auth/wrong-password':
      return 'Senha incorreta.';
    case 'auth/email-already-in-use':
      return 'Já existe uma conta para este E-mail.';
    case 'auth/operation-not-allowed':
      return 'Falha na criação de usuário. Por favor, entre em contato conosco (code: firebase auth/operation-not-allowed).';
    case 'auth/weak-password':
      return 'Senha bastante vulnerável. Por favor, escolha outra senha.';
    default:
      return 'Um erro inesperado aconteceu. Por favor, cheque sua conexão com a internet.';
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
    .email('E-mail inválido')
    .required('Preencha este campo'),
  password: Yup.string()
    .min(6, 'Sua senha precisa ter mais de 6 caracteres')
    .required('Preencha este campo')
});

export const RegisterValidationSchema: Yup.ObjectSchema<Yup.Shape<
  object,
  {
    email: string;
    password: string;
    passwordConfirmation: string;
  }
>> = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('Preencha este campo'),
  password: Yup.string()
    .min(6, 'Sua senha precisa ter mais de 6 caracteres')
    .required('Preencha este campo'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
    .required('Preencha este campo')
});
