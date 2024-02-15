import React from 'react';
import { WrapperStyled } from './CardWrapper.styled';

import { RecommendationSlider } from '../RecommendationSlider';

export const CardWrapper = ({
  handleReachEnd,
  handleReachStart,
  handleSlidesChange,
  visibleCategory
}) => (
  <WrapperStyled>
    <RecommendationSlider
      handleReachEnd={handleReachEnd}
      handleReachStart={handleReachStart}
      handleSlidesChange={handleSlidesChange}
      visibleCategory={visibleCategory}
    />
  </WrapperStyled>
);
