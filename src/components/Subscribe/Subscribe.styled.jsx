import styled from 'styled-components';
import { devices } from '../../common-styles/MediaQueries';

export const SubscribeWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  height: 212px;
  border-radius: 32px;
  background: -webkit-linear-gradient(299deg, rgb(173, 198, 246) 11%, rgb(242, 253, 249) 55%, rgb(232, 234, 247) 90%);
  background: -o-linear-gradient(299deg, rgb(173, 198, 246) 11%, rgb(242, 253, 249) 55%, rgb(232, 234, 247) 90%);
  background: -ms-linear-gradient(299deg, rgb(173, 198, 246) 11%, rgb(242, 253, 249) 55%, rgb(232, 234, 247) 90%);
  background: -moz-linear-gradient(299deg, rgb(173, 198, 246) 11%, rgb(242, 253, 249) 55%, rgb(232, 234, 247) 90%);
  background: linear-gradient(151deg, rgb(173, 198, 246) 11%, rgb(242, 253, 249) 55%, rgb(232, 234, 247) 90%);

  @media ${devices.tab} {
    max-width: 1200px;
    height: 312px;
  }
`;

export const SubscribeLeftContent = styled.div`
  display: none;

  @media ${devices.desk} {
    display: block;
    position: relative;
    width: 253px;
  }

  @media (max-width: 1300px) {
    display: none;
  }
`;

export const SubscribeImage1 = styled.img`
  border: 2px solid var(--white);
  border-radius: 24px;
  position: absolute;
  width: 81px;
  height: 81px;
  left: 44px;
  top: 38px;
`;

export const SubscribeImage2 = styled.img`
  position: absolute;
  width: 36px;
  height: 36px;
  left: 67px;
  top: 173px;
  border: 2px solid var(--white);
  filter: drop-shadow(0 9px 32px rgba(89, 92, 219, 0.1));
  border-radius: 50%;
`;

export const SubscribeImage3 = styled.img`
  position: absolute;
  width: 36px;
  height: 36px;
  left: 204px;
  top: 71px;
  border: 2px solid var(--white);
  filter: drop-shadow(0 9px 32px rgba(89, 92, 219, 0.1));
  border-radius: 50%;
`;

export const SubscribeImage4 = styled.img`
  position: absolute;
  width: 54px;
  height: 54px;
  left: 195px;
  top: 178px;
  border: 2px solid var(--white);
  border-radius: 24px;
`;

export const Feedback = styled.div`
  width: 280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media ${devices.desk} {
    width: max-content;
  }
`;

export const FeedbackTitle = styled.h2`
  margin: 0 0 20px 10px;
  
  @media ${devices.desk} {
    margin-left: 0;
    font-family: Lexen300, sans-serif;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    text-transform: capitalize;
    color: var(--headline);
    margin-bottom: 32px;
  }
`;

export const FeedbackWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  background: var(--white);
  gap: 5px;
  width: 280px;
  box-shadow: 0 9px 32px rgba(89, 92, 219, 0.05);
  border-radius: 32px;

  @media ${devices.tab} {
    padding: 0 0 0 24px;
    gap: 10px;
    width: 480px;
  }
  
  @media ${devices.desk} {
    padding: 4px 4px 4px 24px;
    gap: 16px;
    width: 496px;
  }
`;

export const EmailIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 4px;
  
  @media ${devices.desk} {
    margin-left: 0;
    width: 24px;
    height: 24px;
  }
`;

export const SubscribeRightContent = styled.div`
  display: none;

  @media ${devices.desk} {
    display: block;
    position: relative;
    width: 270px;
  }

  @media (max-width: 1300px) {
    display: none;
  }
`;

export const SubscribeImage5 = styled.img`
  position: absolute;
  width: 70px;
  height: 70px;
  left: 0;
  top: 44px;
  border: 2px solid var(--white);
  border-radius: 24px;
`;

export const SubscribeImage6 = styled.img`
  position: absolute;
  width: 36px;
  height: 36px;
  left: 34px;
  top: 143px;
  border: 2px solid var(--white);
  filter: drop-shadow(0px 9px 32px rgba(89, 92, 219, 0.1));
  border-radius: 50%;
`;

export const SubscribeImage7 = styled.img`
  position: absolute;
  width: 36px;
  height: 36px;
  left: 148px;
  top: 107px;
  border: 2px solid var(--white);
  filter: drop-shadow(0px 9px 32px rgba(89, 92, 219, 0.1));
  border-radius: 50%;
`;

export const SubscribeImage8 = styled.img`
  position: absolute;
  width: 55px;
  height: 55px;
  left: 142px;
  top: 197px;
  border: 2px solid var(--white);
  border-radius: 24px;
`;
