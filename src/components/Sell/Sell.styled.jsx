import styled from 'styled-components';
import { devices } from '../../common-styles/MediaQueries';

export const SellWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  @media ${devices.desk} {
    padding: 0 120px 0 160px;
    justify-content: space-between;
  }
  
  @media (min-width: 1295px) {
    flex-direction: row;
  }
`;

export const SellContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HouseDetail = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 440px;
  border-bottom: 2px solid #F0F3FD;
  margin: 16px 0 36px;
`;

export const HouseDetailDesc = styled.p`
  font-family: Lexend300, sans-serif;
  font-size: 16px;
  line-height: 28px;
  color: var(--neutral);
  opacity: 0.75;
  margin-bottom: 16px;
`;

export const HouseDetailSpan = styled.span`
  font-family: Lexend500, sans-serif;
  font-size: 16px;
  line-height: 28px;
  color: var(--headline);
  opacity: 0.75;
  margin-bottom: 16px;
`;

export const HouseDetailList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
  column-gap: 53px;
`;

export const HouseDetailItem = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 193.5px;
  height: 32px;
  align-items: center;
  margin-bottom: 16px;
  font-family: Lexend400, sans-serif;
  font-size: 16px;
  line-height: 20px;
  text-transform: capitalize;
  color: var(--font);
`;

export const HouseDetailsIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

export const SellInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  gap: 24px;
`;

export const ContactNowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  

  @media ${devices.desk} {
    flex-direction: row;
    justify-content: space-between;
    max-width: 440px;
  }
`;

export const SellImage = styled.img`
  filter: drop-shadow(0 9px 32px rgba(89, 92, 219, 0.1));
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-bottom: 20px;
  
  @media ${devices.desk} {
    margin-bottom: 0;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SellName = styled.span`
  font-family: Lexend400, sans-serif;
  align-self: stretch;
  font-size: 18px;
  line-height: 24px;
  color: var(--headlineDark);
`;

export const SellPosition = styled.span`
  font-family: Lexend400, sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: var(--grey);
  align-self: stretch;
`;

export const SellGallery = styled.div`
  margin-top: 30px;
  position: relative;
  
  @media ${devices.desk} {
    width: 528px;
    height: 459px;
  }
`;

export const BiggestSlierBackground = styled.div`
  display: none;
  
  @media ${devices.desk} {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const GalleryButton = styled.button`
  display: none;
  
  @media ${devices.desk} {
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(2.5px);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: linear 1s ease-in-out;
    z-index: 10;

    &:hover {
      background-color: rgba(128, 128, 128, 0.62);
    }

    &:active {
      background-color: rgba(128, 128, 128, 0.87);
    }
  }
`;

export const GalleryButtonImg = styled.img`
  display: none;

  @media ${devices.desk} {
    display: block;
    width: 15px;
    height: 21px;
  }
`;

export const BiggestSlierWrapper = styled.div`
  width: 240px;
  height: 240px;

  @media ${devices.tab} {
    width: 450px;
  }
  
  @media ${devices.desk} {
    position: absolute;
    width: 488px;
    height: 416px;
    right: 0;
    top: 0;
  }
`;

export const BiggestSlierImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 4px;

  @media ${devices.tab} {
    width: 450px;
    height: 300px;
  }
  
  @media ${devices.desk} {
    width: 100%;
    height: 416px;
  }
`;

export const SliderGroupWrapper = styled.div`
  display: none;
  
  @media ${devices.desk} {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 168px;
    width: 100%;
  }
`;

export const MiddleSliderWrapper = styled.div`
  height: 100%;
  width: 296px;
  margin-right: 12px;
`;

export const MiddleSlierImage = styled.img`
  width: 100%;
  height: 168px;
  object-fit: cover;
  border-radius: 4px;
`;

export const SmallSliderWrapper = styled.div`
  height: 80px;
  width: 96px;
  :not(:last-child) {
    margin-right: 8px;
  }
`;

export const SmallSlierImage = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
`;
