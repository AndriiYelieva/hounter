import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { devices } from '../../common-styles/MediaQueries';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;

  @media ${devices.tab} {
    padding: 20px 40px;
  }

  @media ${devices.desk} {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0;
  }
`;

export const ReviewContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 40px;
`;

export const StyledReviewSwaper = styled(Swiper)`
  width: 240px;
  height: 400px;

  .swiper-pagination {
    display: none;
  }
  
  @media ${devices.tab} {
    height: auto;
    width: 480px;
  }

  @media ${devices.desk} {
    width: max-content;
    user-select: none;
    padding-bottom: 150px;

    .swiper-pagination {
      display: block;
      bottom: 0;
    }

    .swiper-pagination-bullet {
      background: #282828;
      width: 8px;
      height: 8px;

      :not(:last-child) {
        margin-right: 10px;
      }
    }

    .swiper-pagination-bullet-active {
      background: var(--font);
      width: 8px;
      height: 8px;

      :not(:last-child) {
        margin-right: 10px;
      }
    }
  }
`;

export const SlideItem = styled(SwiperSlide)`
  max-width: 240px;

  @media ${devices.tab} {
    max-width: 600px;
  }

  @media ${devices.desk} {
    max-width: max-content;
  }
`;
