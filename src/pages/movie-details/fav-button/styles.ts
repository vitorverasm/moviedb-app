import styled from 'styled-components/native';
import {CustomButton} from '../../../styles';
import theme from '../../../styles/theme';

interface FavoriteBadgeProps {
  isFavorite: boolean;
}

export default styled(CustomButton).attrs((props: FavoriteBadgeProps) => ({
  color: props.isFavorite ? theme.colors.accent : theme.colors.black
}))<FavoriteBadgeProps>``;
