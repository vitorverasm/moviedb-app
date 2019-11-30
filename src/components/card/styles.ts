import {Subheading} from 'react-native-paper';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const CardContainer = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.7
}))<{
  centered?: boolean;
  selected?: boolean;
  elevation?: number;
}>`
  width: 100px;
  height: 100px;
  border-radius: 6px;
  elevation: ${props => (props.elevation ? props.elevation : 2)};
  shadow-color: #424242;
  shadow-offset: 0px
    ${props => (props.elevation ? 0.5 * props.elevation : 0.5)}px;
  shadow-opacity: 0.3px;
  shadow-radius: ${props => (props.elevation ? 0.8 * props.elevation : 0.8)}px;
  background-color: ${props =>
    props.selected ? theme.colors.primary : '#fff'};
  margin: 5px;
  border-width: 0.3px;
  border-color: ${theme.colors.primary};
  justify-content: ${props => (props.centered ? 'center' : 'flex-start')};
  align-items: ${props => (props.centered ? 'center' : 'stretch')};
`;

export const CardTitle = styled(Subheading)<{selected?: boolean}>`
  font-weight: bold;
  font-size: 12px;
  color: ${props => (props.selected ? '#FFF' : theme.colors.primary)};
`;
