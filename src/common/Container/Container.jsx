import React from 'react';
import { ContainerStyled } from './Container.styled';

export const Container = ({padding, children}) => {
  return (
    <ContainerStyled padding={padding}>
      {children}
    </ContainerStyled>
  );
};
