import styled from 'styled-components';
import { devices } from '../../common-styles/MediaQueries';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardImage = styled.div`
  background-image: ${({ image }) => image && `url()`};
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  width: 240px;
  height: 240px;
  position: relative;
  opacity: 0.7;
  
  @media ${devices.desk} {
    background-image: ${({ image }) => image && `url(${image})`};
    width: 740px;
    height: 400px;
  }
`;

export const ReviewCardWrapper = styled.div`
  position: absolute;
  bottom: 0;
  background: var(--white);
  box-shadow: 0 9px 32px rgba(89, 92, 219, 0.05);
  border-radius: 16px;
  width: 240px;
  padding: 0 10px;

  @media ${devices.tab} {
    width: 480px;
    padding: 0 24px;
  }

  @media ${devices.desk} {
    width: max-content;
    bottom: -105px;
    padding: 32px;
  }
`;

export const ReviewTitle = styled.h2`
  font-family: Lexend600, sans-serif;
  font-size: 20px;
  line-height: 25px;
  text-transform: capitalize;
  color: var(--headline);
  margin-bottom: 16px;
  text-align: center;

  @media ${devices.tab} {
    text-align: start;
  }
`;

export const ReviewDesc = styled.p`
  font-family: Lexend300, sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: var(--neutral);
  opacity: 0.75;
  margin-bottom: 24px;
  width: 240px;
  text-align: center;

  @media ${devices.tab} {
    text-align: start;
    width: 480px;
  }
  
  @media ${devices.desk} {
    width: 548px;
  }
`;

export const RatingStyled = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  gap: 5px;

  @media ${devices.tab} {
    flex-direction: row;
    padding: 0;
    gap: 24px;
  }
`;

export const ReviewImage = styled.img`
  filter: drop-shadow(0 9px 32px rgba(89, 92, 219, 0.1));
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewName = styled.span`
  font-family: Lexend400, sans-serif;
  align-self: stretch;
  font-size: 14px;
  line-height: 22px;
  color: var(--headlineDark);
`;

export const ReviewPosition = styled.span`
  font-family: Lexend400, sans-serif;
  font-size: 14px;
  line-height: 22px;
  color: var(--grey);
  align-self: stretch;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px;

  @media ${devices.desk} {
    gap: 16px;
    padding: 0;
  }
`;

export const RatingIcon = styled.img`
  width: 28px;
  height: 28px;
`;

export const Rate = styled.p`
  font-family: Lexend600, sans-serif;
  font-size: 20px;
  line-height: 28px;
  color: var(--font);
`;
