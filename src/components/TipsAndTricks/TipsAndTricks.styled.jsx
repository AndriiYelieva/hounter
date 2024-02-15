import styled from 'styled-components';
import { devices } from '../../common-styles/MediaQueries';

export const SubtitleWrap = styled.div`
  width: 280px;
  margin-bottom: 10px;

  @media ${devices.tab} {
    width: 560px;
    margin-bottom: 16px;
  }
  
  @media ${devices.desk} {
    width: 424px;
    text-align: center;
    margin-bottom: 24px;
  }
`;

export const TipsAndTricksContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;

  @media ${devices.tab} {
    justify-content: space-between;
    width: 560px;
    margin-top: 20px;
  }
  
  @media ${devices.desk} {
    justify-content: space-between;
    align-items: start;
    flex-direction: row;
    width: 100%;
    margin-top: 40px;
  }

  @media (max-width: 1200px) {
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
  }
`;

export const TipsAndTricksLeftSide = styled.div`
  max-width: 280px;
  
  @media ${devices.tab} {
    max-width: 572px;
  }
`;

export const TipsAndTricksRightSide = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;

  @media ${devices.tab} {
    align-items: center;
  }

  @media ${devices.desk} {
    align-items: start;
    width: 560px;
  }
`;

export const RightSideArticleImg = styled.img`
  margin-top: 20px;
  width: 250px;
  height: 280px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 24px;
  
  @media ${devices.tab} {
    width: 560px;
    margin-top: 20px;
  }

  @media (min-width: 1200px) {
    margin-top: 20px;
  }

  @media ${devices.desk} {
    margin-top: 0;
  }
`;

export const AuthorArticleWrap = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const AuthorImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%; 
  margin-bottom: 12px;
`;

export const AuthorName = styled.span`
  font-family: Lexend400, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--font);
`;

export const ArticleRightTitle = styled.span`
  font-family: Lexend400, sans-serif;
  font-size: 24px;
  line-height: 32px;
  text-transform: capitalize;
  color: var(--headline);
  margin-bottom: 12px;
  width: 260px;

  @media ${devices.tab} {
    width: 560px;
  }
`;

export const ArticleParagraph = styled.p`
  font-family: Lexend400, sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: var(--neutral);
  opacity: 0.75;
  margin-bottom: 16px;
  width: 260px;

  @media ${devices.tab} {
    width: 560px;
  }
`;

export const ArticleInfoDesc = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const ArticleIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ArticleDesc = styled.span`
  font-size: 14px;
  line-height: 24px;
  color: var(--grey);
  font-family: Lexend400, sans-serif;
`;
