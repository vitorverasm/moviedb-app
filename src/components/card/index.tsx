import React, {FC} from 'react';
import {Section} from '../../types';
import {CardContainer, CardTitle} from './styles';

interface CardProps extends Section {
  selected?: boolean;
}

const Card: FC<CardProps> = ({id, label, onPress, selected}: CardProps) => {
  return (
    <CardContainer
      key={id}
      onPress={onPress}
      centered
      selected={selected}
      elevation={3}>
      <CardTitle selected={selected}>{label}</CardTitle>
    </CardContainer>
  );
};

export default Card;
