import React from 'react';
import {InputStyled} from "./Input.styled";

export const Input = ({
  type,
  placeholder,
}) => (
  <InputStyled
    type={type}
    placeholder={placeholder}
  />
);
