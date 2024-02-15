import React, { useState } from 'react';
import {
  BurgerImage,
  HeaderWrapper,
  MenuButton,
  MenuItem,
  NavMenu,
  NawWrapper,
} from './Header.styled';
import arrowDown from '../../assets/icons/arrow_down.svg';
import burger from '../../assets/icons/burger_menu.svg';
import { MainLogo } from '../../common/MainLogo/MainLogo';
import { Select } from '../../common';
import { BurgerMenu } from '../../common/Burger';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerOpen = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <HeaderWrapper>
      <MainLogo/>

      <BurgerMenu
        isOpen={isOpen}
        handleBurgerOpen={handleBurgerOpen}
      />

      <NawWrapper>
        <NavMenu>
          <MenuItem>About Us</MenuItem>

          <MenuItem>Article</MenuItem>

          <Select
            title="Property"
            icon={arrowDown}
          />
        </NavMenu>

        <MenuButton>Sign Up!</MenuButton>
      </NawWrapper>

      <BurgerImage
        src={burger}
        onClick={handleBurgerOpen}
        alt="Burger menu"
      />
    </HeaderWrapper>
  );
};
