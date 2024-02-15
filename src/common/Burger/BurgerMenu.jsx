import React from 'react';
import {
  BurgerMenuContent,
  CrossWrapper,
  Nav,
  NavItem,
} from './BurgerMenu.styled';
import cross from '../../assets/icons/cross.svg';
import { BurgerImage } from '../../components/Header/Header.styled';

export const BurgerMenu = ({ isOpen, handleBurgerOpen }) => {

  return (
    <BurgerMenuContent isOpen={isOpen} >
      <CrossWrapper>
        <BurgerImage src={cross} onClick={handleBurgerOpen} alt="Burger menu"/>
      </CrossWrapper>

      <Nav>
        <NavItem onClick={handleBurgerOpen}><a href="#">About Us</a></NavItem>
        <NavItem onClick={handleBurgerOpen}><a href="#">Article</a></NavItem>
        <NavItem onClick={handleBurgerOpen}><a href="#">House</a></NavItem>
        <NavItem onClick={handleBurgerOpen}><a href="#">Villa</a></NavItem>
        <NavItem onClick={handleBurgerOpen}><a href="#">Apartment</a></NavItem>
      </Nav>
    </BurgerMenuContent>
  );
};
