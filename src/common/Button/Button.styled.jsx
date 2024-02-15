import styled from "styled-components";

export const ButtonStyled = styled.button`
  border-radius: 32px;
  padding: 12px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--green);
  border: none;
  color: var(--white);
  font-family: Lexend600, sans-serif;
  font-size: 14px;
  line-height: 22px;
  gap: ${({ gap }) => gap ? '4px' : '16px'};
  cursor: pointer;
  
  &:hover {
    transform: scale(0.99);
    transition: 0.3s;
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
