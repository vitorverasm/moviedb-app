import React, {FC} from 'react';
import {Section} from '../../types';
import {CardContainer, CardTitle} from './styles';

interface CardProps extends Section {
  disabled?: boolean;
  selected?: boolean;
}

const Card: FC<CardProps> = ({
  id,
  label,
  onPress,
  selected,
  disabled
}: CardProps) => {
  return (
    <CardContainer
      key={id}
      onPress={onPress}
      centered
      selected={selected}
      elevation={3}
      disabled={disabled}>
      <CardTitle selected={selected}>{label}</CardTitle>
    </CardContainer>
  );
};

export default Card;
