import React from 'react';
import { ButtonStyled, Icon } from './Button.styled';

export const Button = ({
  iconPosition,
  gap,
  title,
  icon,
}) => {
  const isBefore = iconPosition === 'before';
  const isAfter = iconPosition === 'after';

  return (
    <ButtonStyled gap={gap}>
      {isBefore && icon && <Icon src={icon} alt="Button icon"/>}
      {title}
      {isAfter && icon && <Icon src={icon} alt="Button icon"/>}
    </ButtonStyled>
  );
};
