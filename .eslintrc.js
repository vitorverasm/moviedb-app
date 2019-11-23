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
    'react-native/no-inline-styles': 'off'
  },
  globals: {
    HermesInternal: true
  }
};
