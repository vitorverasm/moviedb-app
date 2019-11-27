import {Colors, DefaultTheme, Theme} from 'react-native-paper';

interface CustomTheme extends Theme {
  colors: {
    primary: string;
    background: string;
    surface: string;
    accent: string;
    error: string;
    text: string;
    onSurface: string;
    onBackground: string;
    disabled: string;
    placeholder: string;
    backdrop: string;
    notification: string;
    lightGray: string;
  };
}

const theme: CustomTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6C63FF',
    accent: '#FE9B95',
    text: Colors.grey800,
    background: '#F5F6F7',
    lightGray: '#e5e5e5'
  }
};

export default theme;
