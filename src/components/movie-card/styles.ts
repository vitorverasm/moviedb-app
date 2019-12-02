import {ReactNode} from 'react';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const CardShape = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 1
}))`
  height: 150px;
  width: 90px;
  border-radius: 8px;
  margin: 8px;
  background-color: ${theme.colors.lightGray};
  overflow: hidden;
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
  flex-direction: row;
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
  justify-content: ${props => (props.centered ? 'center' : 'flex-start')};
  align-items: ${props => (props.centered ? 'center' : 'stretch')};
`;

export const CardLogo = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 8px;
`;
