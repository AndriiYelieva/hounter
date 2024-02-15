import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.div`
  border-radius: 24px;
  width: 340px;
  height: 382px;
  background-image: ${({cover}) => cover && `${`url(${cover})`}`};
  background-size: cover;
  background-position: center;
  position: relative;
  margin-bottom: 24px;
`;

export const CardTitle = styled.span`
  font-size: 24px;
  line-height: 32px;
  font-family: Lexend500, sans-serif;
  color: var(--headline);
  margin-bottom: 8px;
`;

export const CardSubTitle = styled.span`
  font-size: 20px;
  line-height: 32px;
  font-family: Lexend400, sans-serif;
  color: var(--font);
  margin-bottom: 24px;
`;

export const PersonalInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  gap: 16px;
`;

export const PersonalImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const PersonalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PersonalName = styled.span`
  font-size: 18px;
  line-height: 24px;
  font-family: Lexend400, sans-serif;
  color: var(--headlineDark);
`;

export const PersonalAddress = styled.span`
  font-size: 14px;
  line-height: 22px;
  font-family: Lexend400, sans-serif;
  align-self: stretch;
  color: var(--grey);
`;
