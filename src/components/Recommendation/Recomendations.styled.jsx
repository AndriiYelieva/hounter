import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import { devices } from '../../common-styles/MediaQueries';

export const RecommendationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  @media ${devices.tab} {
    padding: 0 40px;
  }
  
  @media ${devices.desk} {
    padding: 0 0 0 160px;
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px 20px;
  margin-bottom: 10px;

  @media ${devices.tab} {
    gap: 10px 40px;
    margin-bottom: 20px;
    align-items: start;
  }

  @media ${devices.desk} {
    gap: 30px;
    flex-direction: row;
    margin-bottom: 40px;
    align-items: end;
  }
  
  @media (min-width: 1200px) {
    gap: 140px;
  }
`;

export const ItemStyled = styled.li`
  box-sizing: border-box;
  display: flex;
  border-radius: 32px;
  align-items: center;
  border: ${({ sort }) => sort ? '1px solid white' : '1px solid #E0E3EB'};
  padding: 12px 24px;
  gap: 8px;
  font-size: 18px;
  line-height: 28px;
  font-family: Lexend400, sans-serif;
  color: ${({ sort }) => sort ? '#10B981' : '#888B97'};
  cursor: pointer;
  background-color: ${({ sort }) => sort ? '#D1FAE5' : 'white'}
`;

export const ItemIcon = styled.img`
  height: 18px;
  width: 18px;
  filter: ${({ sort }) => sort
          && `brightness(0) saturate(50%) invert(62%) sepia(18%) saturate(6141%)
          hue-rotate(118deg) brightness(100%) contrast(40%);`};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;

`;

export const RecommendationButton = styled.button`
  &.next, &.prev {
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
  }

  &.prev-disabled {
    background-color: ${({ isStart }) => isStart && '#E0E3EB'};
  }
  
  &.next-disabled {
    background-color: ${({ isEnd }) => isEnd && '#E0E3EB'};
  }
`;

export const RecommendationIcon = styled.img`
  width: 28px;
  height: 28px;
`;

export const RecommendationCategories = styled.menu`
  display: flex;
  flex-direction: column;
  width: max-content;
  gap: 5px 32px;

  @media ${devices.tab} {
    margin: 0;
    gap: 0 32px;
    flex-direction: row;
  }
`;

export const Slide = styled(SwiperSlide)`
  max-width: max-content;
  gap: 20px;
`;
