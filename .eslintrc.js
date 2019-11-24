module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  rules: {
    'react-native/no-inline-styles': 'off',
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
    'no-console': 'off',
    'global-require': 'off'
  },
  globals: {
    HermesInternal: true
  }
};
