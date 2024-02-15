import React from 'react';

import './ArticleItem.styled';
import {
  Article,
  ArticleAuthor,
  ArticleDesc,
  ArticleIcon,
  ArticleImage,
  ArticleInfo,
  ArticleInfoDesc,
  ArticleTitle,
  AuthorImage,
  AuthorName,
} from './ArticleItem.styled';

export const ArticleItem = ({
  articleImgSrc,
  articleImgAlt,
  authorImgSrc,
  authorAlt,
  authorName,
  articleTitle,
  articleIconSrc,
  articleIconAlt,
  articleInfo,
}) => {
  return (
    <Article>
      <ArticleImage src={articleImgSrc} alt={articleImgAlt}/>

      <ArticleDesc>
        <ArticleAuthor>
          <AuthorImage src={authorImgSrc} alt={authorAlt}/>

          <AuthorName>{authorName}</AuthorName>
        </ArticleAuthor>

        <ArticleTitle>
          {articleTitle}
        </ArticleTitle>

        <ArticleInfo>
          <ArticleIcon src={articleIconSrc} alt={articleIconAlt}/>

          <ArticleInfoDesc>{articleInfo}</ArticleInfoDesc>
        </ArticleInfo>
      </ArticleDesc>
    </Article>
  );
};
