import React from 'react';
import {
  CardImage,
  ContentWrapper,
  Rate,
  Rating,
  RatingIcon,
  RatingStyled,
  ReviewCardWrapper,
  ReviewDesc,
  ReviewImage,
  ReviewInfo,
  ReviewName,
  ReviewPosition,
  ReviewTitle,
  ReviewWrapper,
} from './ReviewCard.styled';
import star from '../../assets/icons/star.svg';

export const ReviewCard = ({ card }) => {
  const {
    image,
    title,
    desc,
    userImage,
    userName,
    position,
    rating,
  } = card;

  return (
    <ContentWrapper>
      <CardImage image={image}/>

      <ReviewCardWrapper>
        <ReviewTitle>{title}</ReviewTitle>

        <ReviewDesc>{desc}</ReviewDesc>

        <RatingStyled>
          <ReviewInfo>
            <ReviewImage src={userImage} alt={userName}/>

            <ReviewWrapper>
              <ReviewName>{userName}</ReviewName>

              <ReviewPosition>{position}</ReviewPosition>
            </ReviewWrapper>
          </ReviewInfo>

          <Rating>
            <RatingIcon src={star} alt="Rating star"/>

            <Rate>{rating}</Rate>
          </Rating>
        </RatingStyled>
      </ReviewCardWrapper>
    </ContentWrapper>
  );
};
