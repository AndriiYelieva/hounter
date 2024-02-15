import React from 'react';
import {
  ContentWrapper,
  HeroStyled,
  LeftSide,
  ListItem,
  MainTitle,
  PartnershipList,
  PartnershipTitle,
  PartnershipWrapper,
  RightSide,
  SearchIcon,
  SearchWrapper,
  SelectedText,
  SliderImg,
  SliderImgList,
  SliderItem,
  SliderSubTitle,
  SliderTitle,
  SubTitle,
  SwiperSlideStyled,
  SwiperStyled,
  TitleWrapper,
} from './Hero.styled';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import point from '../../assets/icons/map_point.svg';
import arrowRight from '../../assets/icons/arrow_right.svg';
import { Autoplay } from 'swiper';
import { data } from '../../data/heroSliderData';
import { Button, Container, Input } from '../../common';
import { partners } from '../../data/partnersData';

export const Hero = () => {
  return (
    <Container>
      <HeroStyled>
        <LeftSide>
          <TitleWrapper>
            <MainTitle>
              find the place to
              <br/> live <SelectedText>your dreams</SelectedText>
              <br/> easily here
            </MainTitle>

            <SubTitle>
              Everything you need about finding your place to live will be here,
              <br/> where it will be easier for you
            </SubTitle>
          </TitleWrapper>

          <SearchWrapper>
            <SearchIcon src={point} alt="Map piont"/>

            <Input
              type="text"
              placeholder="Search for the location you want!"
            />

            <Button iconPosition='after' gap={'gap'} title="Search" icon={arrowRight}/>
          </SearchWrapper>

          <PartnershipWrapper>
            <PartnershipTitle>Our Partnership</PartnershipTitle>

            <PartnershipList>
              {partners.map(({
                icon,
                title,
              }) => (
                <ListItem key={title}>
                  <img src={icon} alt={title}/>
                </ListItem>
              ))}
            </PartnershipList>
          </PartnershipWrapper>
        </LeftSide>

        <RightSide>
          <SwiperStyled
            slidesPerView="auto"
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {data.map((tab) => {
              const {id, images, title, subTitle} = tab;
              const widthParams = images.length > 1 ? 'params' : '';

              return (
                <SwiperSlideStyled key={id}>
                  <SliderItem>
                    <SliderImgList params={widthParams}>
                      {images.map(({
                        id,
                        image,
                        alt,
                        position,
                        type
                      }) => {
                        return (
                          <SliderImg
                            key={id}
                            type={type}
                            src={image}
                            alt={alt}
                            position={position}
                          />
                        )
                      })}
                    </SliderImgList>

                    <ContentWrapper>
                      <SliderTitle>{title}</SliderTitle>

                      <SliderSubTitle>{subTitle}</SliderSubTitle>
                    </ContentWrapper>
                  </SliderItem>
                </SwiperSlideStyled>
              );
            })}
          </SwiperStyled>
        </RightSide>
      </HeroStyled>
    </Container>
  );
};
