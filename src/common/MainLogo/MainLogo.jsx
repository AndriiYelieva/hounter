import React from 'react';
import logo from '../../assets/icons/logo.svg';
import { Logo, LogoTitle, LogoWrapper } from './MainLogo.styled';

export const MainLogo = () => (
  <LogoWrapper>
    <Logo src={logo} alt="Main logo"/>
    <LogoTitle>Hounter</LogoTitle>
  </LogoWrapper>
);
