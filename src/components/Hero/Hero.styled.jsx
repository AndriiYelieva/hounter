import styled from 'styled-components';
import mainLogo from '../../assets/images/header.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { devices } from '../../common-styles/MediaQueries';

export const HeroStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.desk} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LeftSide = styled.div`
  width: 320px;
  padding: 0 20px;

  @media ${devices.tab} {
    width: 450px;
  }

  @media ${devices.desk} {
    width: 496px;
    padding-left: 120px;
  }
`;

export const TitleWrapper = styled.div`
  margin-top: 80px;
  padding: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media ${devices.tab} {
    width: 100%;
    margin-top: 100px;
  }

  @media ${devices.desk} {
    padding: 0;
    align-items: start;
  }
`;

export const MainTitle = styled.h1`
  width: 100%;
  position: relative;
  font-family: Lexend500, sans-serif;
  font-size: 30px;
  line-height: 40px;
  text-transform: capitalize;
  color: var(--headline);

  @media ${devices.tab} {
    font-family: Lexend700, sans-serif;
    font-size: 34px;
    line-height: 45px;
  }

  @media ${devices.desk} {
    font-family: Lexend900, sans-serif;
    font-size: 40px;
    line-height: 50px;
  }
`;

export const SelectedText = styled.span`
  font-family: Lexend500, sans-serif;
  font-size: 29px;
  line-height: 40px;
  text-transform: capitalize;
  position: relative;
  display: inline-block;
  color: var(--white);
  text-shadow: -1px 0 var(--headline),
  0 1px var(--headline),
  1px 0 var(--headline),
    0 -1px var(--headline);
  opacity: 0.6;

  @media ${devices.tab} {
    font-family: Lexend600, sans-serif;
    font-size: 34px;
    line-height: 45px;
  }

  @media ${devices.desk} {
    font-family: Lexend700, sans-serif;
    font-size: 40px;
    line-height: 50px;
  }
`;

export const SubTitle = styled.p`
  width: 100%;
  font-family: Lexend300, sans-serif;
  font-size: 14px;
  line-height: 28px;
  color: var(--neutral);
  opacity: 0.75;
  margin-top: 24px;
  width: 100%;

  @media ${devices.tab} {
    font-family: Lexend300, sans-serif;
    font-size: 14px;
    line-height: 28px;
  }

  @media ${devices.desk} {
    font-family: Lexend300, sans-serif;
    font-size: 16px;
    line-height: 28px;
  }
`;

export const SearchWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  background: var(--white);
  border: 1px solid var(--borderLight);
  border-radius: 32px;
  width: 300px;

  @media ${devices.tab} {
    gap: 10px;
    width: 100%;
  }

  @media ${devices.desk} {
    padding: 4px 4px 4px 24px;
    gap: 16px;
    width: 474px;
    margin: 32px 0 0;
  }
`;

export const SearchIcon = styled.img`
  margin-left: 8px;
  width: 20px;
  height: 20px;

  @media ${devices.tab} {
    margin-left: 18px;

  }

  @media ${devices.desk} {
    margin-left: 0;
    width: 24px;
    height: 24px;
  }
`;

export const PartnershipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 320px;

  @media ${devices.tab} {
    margin-top: 32px;
  }
`;

export const PartnershipTitle = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: var(--grey);
  font-family: Lexend300, sans-serif;
  text-align: center;

  @media ${devices.tab} {
    text-align: start;
    font-size: 16px;
    line-height: 32px;
  }
`;

export const PartnershipList = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 0 40px;

  @media ${devices.tab} {
    gap: 0;
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

export const ListItem = styled.li`
  margin-right: 0;
  padding: 0 27px;

  @media ${devices.tab} {
    padding: 0;

    &:not(:last-child) {
      margin-right: 32px;
    }
  }
`;

export const RightSide = styled.div`
  display: none;

  @media ${devices.desk} {
    display: flex;
    justify-content: end;
    align-items: flex-end;
    width: 720px;
    height: 720px;
    background-size: cover;
    background-position: center;
    border-bottom-left-radius: 80px;
    overflow-x: hidden;
    background-image: linear-gradient(16.74deg, #0C1537 -6.09%, rgba(12, 21, 55, 0) 32.63%),
    ${`url(${mainLogo})`};
  }
`;

export const SwiperStyled = styled(Swiper)`
  display: none;

  @media ${devices.desk} {
    display: block;
    z-index: 0;
    margin-left: 48px;
    margin-bottom: 48px;
    border-bottom-left-radius: 32px;
    border-top-left-radius: 32px;
  }
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
  max-width: max-content;
    height: 104px;
`;

export const SliderItem = styled.div`
  max-width: max-content;
  background: var(--white);
  box-shadow: 0 11px 48px rgba(51, 51, 51, 0.06);
  border-radius: 32px;
  display: flex;
  align-items: center;
  padding: 24px;
  gap: 16px;
`;

export const SliderImgList = styled.div`
  position: relative;
  width: ${({ params }) => params ? '112px' : '56px'};
`;

export const SliderImg = styled.img`
  position: ${({ position }) => position ? 'absolute' : 'static'};
  top: 0;
  width: 56px;
  height: 56px;
  margin-left: ${({ position }) => position ? position : '0'};
  filter: drop-shadow(0 9px 32px rgba(89, 92, 219, 0.1));
  box-sizing: border-box;
  border: 3px solid var(--white);
  border-radius: ${({ type }) => type ? '24px' : '50%'}
}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SliderTitle = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-family: Lexend600, sans-serif;
  color: var(--headline);
`;

export const SliderSubTitle = styled.p`
  font-size: 12px;
  line-height: 20px;
  font-family: Lexend300, sans-serif;
  color: var(--fontExtra);
`;
