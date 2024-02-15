import styled from 'styled-components';

export const TagStyled = styled.div`
  gap: 10px;
  display: inline-flex;
  background: ${({type}) => type };
  border-radius: 32px;
  padding: 8px 16px;
  position: absolute;
  left: 16px;
  top: 332px;
`;

export const TagTitle = styled.span`
  font-size: 14px;
  line-height: 18px;
  text-transform: capitalize;
  color: ${({titleColor}) => titleColor};
  font-family: Lexend400, sans-serif;
`;

export const TagIcon = styled.img`
  width: 16px;
  height: 16px;
`;
