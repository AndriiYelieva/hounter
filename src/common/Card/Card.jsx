import React from 'react';
import { Tag } from '../Tag';
import {
  CardImage,
  CardSubTitle,
  CardTitle,
  CardWrapper,
  PersonalAddress,
  PersonalImage,
  PersonalInfo,
  PersonalName,
  PersonalWrapper,
} from './Card.styled';

export const Card = ({ cardData }) => {
  const { card, title, subtitle, personalInfo } = cardData;
  const { cover, tagTitle, tagIcon, tagType } = card;
  const { image, name, address } = personalInfo;

  return (
    <CardWrapper>
      <CardImage cover={cover}>
        <Tag
          type={tagType}
          title={tagTitle}
          icon={tagIcon}
        />
      </CardImage>

      <CardTitle>{title}</CardTitle>

      <CardSubTitle>{subtitle}</CardSubTitle>

      <PersonalInfo>
        <PersonalImage src={image} alt={`${name} photo`}/>

        <PersonalWrapper>
          <PersonalName>{name}</PersonalName>

          <PersonalAddress>{address}</PersonalAddress>
        </PersonalWrapper>
      </PersonalInfo>
    </CardWrapper>
  );
};
