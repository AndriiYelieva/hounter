import React from 'react';
import { MainLogo } from '../../common/MainLogo/MainLogo';
import {
  Description,
  FooterWrapper,
  InformationWrapper,
  SocialImg,
  SocialLinks,
  SocialWrapper,
} from './Footer.styled';
import fb from '../../assets/icons/fb.svg';
import twitter from '../../assets/icons/twitter.svg';
import insta from '../../assets/icons/insta.svg';
import { CompanyInfoLinks, Container } from '../../common';

export const Footer = () => {
  return (
    <Container padding>
      <FooterWrapper>
        <InformationWrapper>
          <MainLogo />

          <Description>
            We provide information about properties such
            <br/> as houses, villas and apartments to help people
            <br/> find their dream home
          </Description>

          <SocialWrapper>
            <SocialLinks
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/bogdan.mykhailov/"
            >
              <SocialImg src={fb} alt="Facebook link"/>
            </SocialLinks>

            <SocialLinks target="_blank"
                         rel="noreferrer"
                         href="https://twitter.com/bogdanmykhailov"
            >
              <SocialImg src={twitter} alt="Twitter link"/>
            </SocialLinks>

            <SocialLinks
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/bogdan_mykhailov/"
            >
              <SocialImg src={insta} alt="Instagram link"/>
            </SocialLinks>
          </SocialWrapper>
        </InformationWrapper>

        <CompanyInfoLinks />
      </FooterWrapper>
    </Container>
  );
};
