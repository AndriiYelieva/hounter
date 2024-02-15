import React from 'react';
import { ArticleItem, Button, Container, Subtitle, Title } from '../../common';
import { Wrapper } from '../Review/Review.styled';
import {
  ArticleDesc,
  ArticleIcon,
  ArticleInfoDesc,
  ArticleParagraph,
  ArticleRightTitle,
  AuthorArticleWrap,
  AuthorImg,
  AuthorName,
  RightSideArticleImg,
  SubtitleWrap,
  TipsAndTricksContent,
  TipsAndTricksLeftSide,
  TipsAndTricksRightSide,
} from './TipsAndTricks.styled';
import apart from '../../assets/images/apart5.jpg';
import house5 from '../../assets/images/house5.jpg';
import house7 from '../../assets/images/house7.jpg';
import villa from '../../assets/images/villa.jpg';
import clock from '../../assets/icons/clock.svg';
import russel from '../../assets/images/girl2.jpg';
import henry from '../../assets/images/man4.jpg';
import rob from '../../assets/images/man7.jpg';
import will from '../../assets/images/man6.jpg';

import './TipsAndTricks.styled';

export const TipsAndTricks = () => {
  const subtitle = 'Find out more about selling and buying homes';

  return (
    <Container padding>
      <Wrapper>
        <Title
          center
          title="See tips and trick from our partnership"
        />

        <SubtitleWrap>
          <Subtitle subtitle={subtitle}/>
        </SubtitleWrap>

        <Button title="More Artikel" />

        <TipsAndTricksContent>
          <TipsAndTricksLeftSide>
            <ArticleItem
              articleImgSrc={apart}
              articleImgAlt="Apartment"
              authorImgSrc={russel}
              authorAlt="Girl"
              authorName="Dianne Russell"
              articleTitle="The things we need to check when we want to buy a house"
              articleIconSrc={clock}
              articleIconAlt="Clock icon"
              articleInfo="4 min read | 25 Apr 2021"
            />

          <ArticleItem
              articleImgSrc={house7}
              articleImgAlt="House"
              authorImgSrc={henry}
              authorAlt="Man with long hair"
              authorName="Courtney Henry"
              articleTitle="7 Ways to distinguish the quality of the house we want to buy"
              articleIconSrc={clock}
              articleIconAlt="Clock icon"
              articleInfo="6 min read | 24 Apr 2021"
            />

            <ArticleItem
              articleImgSrc={house5}
              articleImgAlt="House"
              authorImgSrc={rob}
              authorAlt="Man"
              authorName="Darlene Robertson"
              articleTitle="The best way to know the quality of the house we want to buy"
              articleIconSrc={clock}
              articleIconAlt="Clock icon"
              articleInfo="2 min read | 24 Apr 2021"
            />
          </TipsAndTricksLeftSide>

          <TipsAndTricksRightSide>
            <RightSideArticleImg src={villa} alt="Villa"/>

            <AuthorArticleWrap>
              <AuthorImg src={will} alt="Man with glasses"/>

              <AuthorName>Cameron Williamson</AuthorName>
            </AuthorArticleWrap>

            <ArticleRightTitle>
              12 Things to know before buying a house
            </ArticleRightTitle>

            <ArticleParagraph>
              Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house
            </ArticleParagraph>

            <ArticleInfoDesc>
              <ArticleIcon src={clock} alt="Clock icon"/>

              <ArticleDesc>8 min read | 25 Apr 2021</ArticleDesc>
            </ArticleInfoDesc>
          </TipsAndTricksRightSide>
        </TipsAndTricksContent>
      </Wrapper>
   </Container>
  );
};
