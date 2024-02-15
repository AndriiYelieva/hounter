import React from 'react';
import { TagIcon, TagStyled, TagTitle } from './Tag.styled';

export const Tag = ({icon, title, type}) => {
  const getCurrentColor = () => {
    switch (type) {
      case 'newHouse': {
        return '#DBEAFE';
      }

      case 'bestDeals': {
        return '#D1FAE5';
      }

      default:
        return '#FEE2E2'
    }
  };

  const color = getCurrentColor();

  const getCurrentTitleColor = () => {
    switch (type) {
      case 'newHouse': {
        return '#1D4ED8';
      }

      case 'bestDeals': {
        return '#047857';
      }

      default:
        return '#EF4444'
    }
  };

  const titleColor = getCurrentTitleColor();

  return (
    <TagStyled type={color}>
      <TagIcon src={icon} alt={`${title}`}/>
      <TagTitle titleColor={titleColor}>{title}</TagTitle>
    </TagStyled>
  );
};
