import React from 'react';
import {
  EmailIcon,
  Feedback,
  FeedbackTitle,
  FeedbackWrapper,
  SubscribeImage1,
  SubscribeImage2,
  SubscribeImage3,
  SubscribeImage4,
  SubscribeImage5,
  SubscribeImage6,
  SubscribeImage7,
  SubscribeImage8,
  SubscribeLeftContent,
  SubscribeRightContent,
  SubscribeWrapper,
} from './Subscribe.styled';
import letter from '../../assets/icons/letter.svg';
import girl2 from '../../assets/images/girl2.jpg';
import man2 from '../../assets/images/man2.jpg';
import man4 from '../../assets/images/man4.jpg';
import girl5 from '../../assets/images/girl5.jpg';
import apart1 from '../../assets/images/apart1.jpg';
import apart2 from '../../assets/images/apart2.jpg';
import apart3 from '../../assets/images/apart3.jpg';
import apart4 from '../../assets/images/apart4.jpg';
import { Button, Container, Input } from '../../common';

export const Subscribe = () => {
  return (
    <Container padding>
      <SubscribeWrapper>
        <SubscribeLeftContent>
          <SubscribeImage1 src={apart1} alt="Modern interier"/>

          <SubscribeImage2 src={girl2} alt="Dianne Russell"/>

          <SubscribeImage3 src={man2} alt="Ronald Richards"/>

          <SubscribeImage4 src={apart2} alt="House"/>
        </SubscribeLeftContent>

        <Feedback>
          <FeedbackTitle>
            Subscribe For More Info
            <br/>
            and update from Hounter
          </FeedbackTitle>

          <FeedbackWrapper>
            <EmailIcon src={letter} alt="Map piont"/>

            <Input placeholder="Your email here" type="email"/>

            <Button title="Subsribe Now"/>
          </FeedbackWrapper>
        </Feedback>

        <SubscribeRightContent>
          <SubscribeImage5 src={apart3} alt="Apartment"/>

          <SubscribeImage6 src={man4} alt="Diego Maradona"/>

          <SubscribeImage7 src={girl5} alt="Beautifule girl"/>

          <SubscribeImage8 src={apart4} alt="Interier"/>
        </SubscribeRightContent>
      </SubscribeWrapper>
    </Container>
  );
};
