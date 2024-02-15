import React, { useEffect, useRef } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Slide } from '../../components/Recommendation/Recomendations.styled';
import { Card } from '../Card';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper } from 'swiper/react';

SwiperCore.use([Navigation]);

export const RecommendationSlider = ({
  handleReachEnd,
  handleReachStart,
  handleSlidesChange,
  visibleCategory,
}) => {

  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update();
    }
  }, [visibleCategory]);

  return (
    <Swiper
      style={{ zIndex: 0 }}
      ref={swiperRef}
      slidesPerView="auto"
      spaceBetween={40}
      onReachEnd={() => handleReachEnd()}
      onReachBeginning={() => handleReachStart()}
      onSlideChange={() => handleSlidesChange()}

      navigation={{
        nextEl: '.next',
        prevEl: '.prev',
      }}
    >
      {visibleCategory.map(cardData => {
        const { id } = cardData;

        return (
          <Slide key={id}>
            <Card cardData={cardData}/>
          </Slide>
        );
      })}
    </Swiper>
  );
};
