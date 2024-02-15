import styled from 'styled-components';

export const SectionSubtitle = styled.h2`
  font-family: Lexend600,sans-serif;
  font-size: 32px;
  line-height: 40px;
  text-transform: capitalize;
  color: var(--headline);
  margin-top: ${({marginTop}) => marginTop && '12px'};
`;
