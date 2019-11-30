import {ReactNode} from 'react';
import {Subheading} from 'react-native-paper';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const CardShape = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 1
}))`
  width: 100px;
  height: 100px;
  border-radius: 6px;
  margin: 5px;
`;

export const CardContainer = styled(CardShape).attrs(
  (props: {children: ReactNode; disabled: boolean}) => ({
    activeOpacity: 0.7,
    children: props.disabled ? null : props.children
  })
)<{
  disabled?: boolean;
  centered?: boolean;
  selected?: boolean;
  elevation?: number;
}>`
  elevation: ${props => {
    if (props.disabled) {
      return 0;
    }
    return props.elevation ? props.elevation : 2;
  }};
  shadow-color: ${props =>
    props.disabled ? 'transparent' : theme.colors.black};
  shadow-offset: ${props => {
    if (props.disabled) {
      return '0px 0px';
    }
    return `0px ${props.elevation ? 0.5 * props.elevation : 0.5}px`;
  }};
  shadow-opacity: ${props => (props.disabled ? '0px' : '0.3px')};
  shadow-radius: ${props => {
    if (props.disabled) {
      return '0px';
    }
    return `${props.elevation ? 0.8 * props.elevation : 0.8}px`;
  }};
  background-color: ${props => {
    if (props.disabled) {
      return theme.colors.lightGray;
    }
    return props.selected ? theme.colors.primary : '#fff';
  }};
  border-width: ${props => (props.disabled ? '0px' : '0.3px')};
  border-color: ${props =>
    props.disabled ? 'transparent' : theme.colors.primary};
  justify-content: ${props => (props.centered ? 'center' : 'flex-start')};
  align-items: ${props => (props.centered ? 'center' : 'stretch')};
`;

export const CardTitle = styled(Subheading)<{selected?: boolean}>`
  font-weight: bold;
  font-size: 12px;
  color: ${props => (props.selected ? '#FFF' : theme.colors.primary)};
`;

export const CardLogo = styled.Image`
  width: 60px;
  height: 60px;
`;
