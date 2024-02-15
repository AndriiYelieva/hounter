import React, { useState } from 'react';
import {
  ItemLink,
  ItemStyled,
  SelectButton,
  SelectIcon,
  SelectStyled,
  SelectWrapper,
} from './Select.styled';

export const Select = ({title, icon}) => {
  const [toggle, setToggle] = useState(false);

  const handleToggleClick = () => {
    setToggle(toggle => !toggle)
  };

  return (
    <SelectWrapper>
      <SelectButton
        toggle={toggle}
        onClick={handleToggleClick}
      >
        {title}

        <SelectIcon
          toggle={toggle}
          src={icon}
          alt="Arrow down"
        />
      </SelectButton>

      <SelectStyled toggle={toggle}>
        <ItemStyled onClick={handleToggleClick} >
          <ItemLink href="#">House</ItemLink>
        </ItemStyled>

        <ItemStyled onClick={handleToggleClick}>
          <ItemLink href="#">Villa</ItemLink>
        </ItemStyled>

        <ItemStyled onClick={handleToggleClick}>
          <ItemLink href="#">Apartment</ItemLink>
        </ItemStyled>
      </SelectStyled>
    </SelectWrapper>
  );
};
