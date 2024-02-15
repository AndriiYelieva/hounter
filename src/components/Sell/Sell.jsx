import React, { useRef, useState } from 'react';
import { Button, Container, Modal, Subtitle, Title } from '../../common';
import {
  BiggestSlierBackground,
  BiggestSlierImage,
  BiggestSlierWrapper,
  ContactNowWrapper,
  GalleryButton,
  GalleryButtonImg,
  HouseDetail,
  HouseDetailDesc,
  HouseDetailItem,
  HouseDetailList,
  HouseDetailsIcon,
  HouseDetailSpan,
  MiddleSliderWrapper,
  MiddleSlierImage,
  SellContent,
  SellGallery,
  SellImage,
  SellInfo,
  SellName,
  SellPosition,
  SellWrapper,
  SliderGroupWrapper,
  SmallSliderWrapper,
  SmallSlierImage,
  UserInfoWrapper,
} from './Sell.styled';
import phone from '../../assets/icons/phone.svg';
import girl2 from '../../assets/images/girl2.jpg';
import bed from '../../assets/icons/bed.svg';
import bath from '../../assets/icons/bath.svg';
import car from '../../assets/icons/car.svg';
import play from '../../assets/icons/play.svg';
import stairs from '../../assets/icons/stairs.svg';
import 'swiper/css';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useHandleModal } from '../../hooks/use-modal';
import { sliderData } from '../../data/slyderData';

export const Sell = () => {
  const imageRef = useRef(null);
  const {
    modal,
    toggleModal,
  } = useHandleModal();
  const [image, setImage] = useState('');

  const handleModalToggle = (event) => {
    toggleModal();
    setImage(event.currentTarget.src);
  };

  const handleMainSliderModalToggle = () => {
    toggleModal();
    setImage(imageRef.current.src);
  };

  return (
    <Container>
      <SellWrapper>
        <SellContent>
          <>
            <Title title="ReadyTo TipsAndTricks!"/>

            <Subtitle marginTop={'marginTop'}
                      subtitle="Let’s tour and see our house!"/>

            <HouseDetail>
              <HouseDetailDesc>
                Houses recommended by our partners that have been curated to
                become the home of your dreams!
              </HouseDetailDesc>

              <HouseDetailSpan>House Detail</HouseDetailSpan>

              <HouseDetailList>
                <HouseDetailItem>
                  <HouseDetailsIcon src={bed} alt="Bed"/>
                  4 Bedrooms
                </HouseDetailItem>

                <HouseDetailItem>
                  <HouseDetailsIcon src={bath} alt="Bath"/>
                  2 Bathrooms
                </HouseDetailItem>

                <HouseDetailItem>
                  <HouseDetailsIcon src={car} alt="Car"/>
                  1 Carport
                </HouseDetailItem>

                <HouseDetailItem>
                  <HouseDetailsIcon src={stairs} alt="Stairs"/>
                  2 Floors
                </HouseDetailItem>
              </HouseDetailList>
            </HouseDetail>

            <ContactNowWrapper>
              <SellInfo>
                <SellImage src={girl2} alt="Dianne Russell"/>

                <UserInfoWrapper>
                  <SellName>Dianne Russell</SellName>
                  <SellPosition>Manager Director</SellPosition>
                </UserInfoWrapper>
              </SellInfo>

              <Button iconPosition="before" icon={phone} title="Contact Now"/>
            </ContactNowWrapper>
          </>
        </SellContent>

        <SellGallery>
          <Modal modalMode={modal} closeModal={toggleModal}>
            {image && <img src={image} alt="Modal img"/>}
          </Modal>

          <BiggestSlierWrapper>
            <Swiper
              style={{zIndex: 0}}
              slidesPerView={1}
              loop={true}
              initialSlide={0}
              autoplay={{
                delay: 4000,
              }}
              modules={[Autoplay]}>
              <BiggestSlierBackground onClick={handleMainSliderModalToggle}>
                <GalleryButton>
                  <GalleryButtonImg src={play} alt="Play icon"/>
                </GalleryButton>
              </BiggestSlierBackground>

              {sliderData.map(({
                id,
                image,
                alt,
              }) => (
                <SwiperSlide
                  key={id}
                >
                  <BiggestSlierImage
                    ref={imageRef}
                    onClick={handleModalToggle}
                    src={image}
                    alt={alt}
                  />
                </SwiperSlide>))}
            </Swiper>
          </BiggestSlierWrapper>

          <SliderGroupWrapper>
            <MiddleSliderWrapper>
              <Swiper
                style={{zIndex: 0}}
                slidesPerView={1}
                loop={true}
                initialSlide={1}
                autoplay={{
                  delay: 4000,
                }}
                modules={[Autoplay]}>
                {sliderData.map(({
                  id,
                  image,
                  alt,
                }) => (
                  <SwiperSlide
                    key={id}
                  >
                    <MiddleSlierImage
                      onClick={handleModalToggle}
                      src={image}
                      alt={alt}
                    />
                  </SwiperSlide>))}
              </Swiper>
            </MiddleSliderWrapper>

            <SmallSliderWrapper>
              <Swiper
                style={{zIndex: 0}}
                slidesPerView={1}
                loop={true}
                initialSlide={2}
                autoplay={{
                  delay: 4000,
                }}
                modules={[Autoplay]}
              >
                {sliderData.map(({
                  id,
                  image,
                  alt,
                }) => (
                  <SwiperSlide
                    key={id}
                  >
                    <SmallSlierImage
                      onClick={handleModalToggle}
                      src={image}
                      alt={alt}
                    />
                  </SwiperSlide>))}
              </Swiper>
            </SmallSliderWrapper>

            <SmallSliderWrapper>
              <Swiper
                style={{zIndex: 0}}
                slidesPerView={1}
                loop={true}
                initialSlide={3}
                autoplay={{
                  delay: 4000,
                }}
                modules={[Autoplay]}>
                {sliderData.map(({
                  id,
                  image,
                  alt,
                }) => (
                  <SwiperSlide
                    key={id}
                  >
                    <SmallSlierImage
                      onClick={handleModalToggle}
                      src={image}
                      alt={alt}
                    />
                  </SwiperSlide>))}
              </Swiper>
            </SmallSliderWrapper>
          </SliderGroupWrapper>
        </SellGallery>
      </SellWrapper>
    </Container>
  );
};
