import styled from "styled-components";

export const InputStyled = styled.input`
  width: 303px;
  height: 22px;
  outline: none;
  border: 1px solid transparent;
  color: var(--grey);
  font-size: 14px;
  line-height: 22px;
  
  &::placeholder {
    color: var(--grey);
    font-family: Lexend400, sans-serif;
    font-size: 14px;
    line-height: 22px;
  }
`;
