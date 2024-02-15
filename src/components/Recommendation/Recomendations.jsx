import React, { useEffect, useState } from 'react';
import {
  ButtonWrapper,
  ItemIcon,
  ItemStyled,
  NavigationWrapper,
  RecommendationButton,
  RecommendationCategories,
  RecommendationIcon,
  RecommendationWrapper,
} from './Recomendations.styled';
import house from '../../assets/icons/house.svg';
import villa from '../../assets/icons/villa.svg';
import apartments from '../../assets/icons/apartment.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import { CardWrapper, Container, Subtitle, Title } from '../../common';
import { sortedByType } from '../../utils/helpers';
import { APARTMENT, HOUSE, VILLA } from '../../utils/constants';
import arrowLeft from '../../assets/icons/arrow_left.svg';
import arrowLeftDark from '../../assets/icons/arrow_left_dark.svg';
import arrowRight from '../../assets/icons/arrow_right.svg';
import arrowRightDark from '../../assets/icons/arrow_right_dark.svg';

export const Recommendation = () => {
  const [sort, setSort] = useState(HOUSE);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    handleSort(sort);
  }, [sort]);

  const visibleCategory = sortedByType(sort);
  const isHouse = sort === HOUSE;
  const isVilla = sort === VILLA;
  const isApartment = sort === APARTMENT;

  const handleSort = (type) => {
    setSort(type);
  };

  const handleReachEnd = () => {
    setIsEnd(true);
  };

  const handleReachStart = () => {
    setIsStart(true);
  };

  const handleSlidesChange = () => {
    if (isStart) {
      setIsStart(false);
    }

    if (isEnd) {
      setIsEnd(false);
    }
  };

  const isCorrectArrowLeft = isStart ? arrowLeftDark : arrowLeft;
  const isCorrectArrowRight = isEnd ? arrowRightDark : arrowRight;

  return (
    <Container>
      <RecommendationWrapper>
        <Title title="Our Recommendation"/>

        <NavigationWrapper>
          <Subtitle subtitle="Featured House"/>

          <RecommendationCategories>
            <ItemStyled
              sort={isHouse}
              onClick={() => setSort(HOUSE)}
            >
              <ItemIcon
                sort={isHouse}
                src={house}
                alt={`Category: ${house}`}
              />
              House
            </ItemStyled>

            <ItemStyled
              sort={isVilla}
              onClick={() => setSort(VILLA)}
            >
              <ItemIcon
                sort={isVilla}
                src={villa}
                alt={`Category: ${villa}`}
              />
              Villa
            </ItemStyled>

            <ItemStyled
              sort={isApartment}
              onClick={() => setSort(APARTMENT)}
            >
              <ItemIcon
                sort={isApartment}
                src={apartments}
                alt={`Category: ${apartments}`}
              />
              Apartment
            </ItemStyled>
          </RecommendationCategories>
          <ButtonWrapper>
            <RecommendationButton isStart={isStart}
                                  className="prev prev-disabled">
              <RecommendationIcon
                src={isCorrectArrowLeft}
                alt="Arrow left"
                aria-disabled={isStart}
              />
            </RecommendationButton>

            <RecommendationButton isEnd={isEnd} className="next next-disabled">
              <RecommendationIcon
                src={isCorrectArrowRight}
                alt="Arrow right"
                aria-disabled={isEnd}
              />
            </RecommendationButton>
          </ButtonWrapper>
        </NavigationWrapper>

        <CardWrapper
          handleReachEnd={handleReachEnd}
          handleReachStart={handleReachStart}
          handleSlidesChange={handleSlidesChange}
          visibleCategory={visibleCategory}
        />
      </RecommendationWrapper>
    </Container>
  );
};
