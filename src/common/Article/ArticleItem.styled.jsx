import styled from 'styled-components';
import { devices } from '../../common-styles/MediaQueries';

export const Article = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 280px;
  margin-bottom: 20px;

  @media ${devices.tab} {
    flex-direction: row;
    width: max-content;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  
  @media ${devices.desk} {
    &:not(:last-child) {
      margin-bottom: 42px;
    }
  }
`;

export const ArticleImage = styled.img`
  width: 250px;
  height: 144px;
  border-radius: 16px;
  margin-right: 32px;
  object-fit: cover;
  margin-bottom: 14px;

  @media ${devices.tab} {
    width: 200px;
    height: 144px;
    margin-bottom: 0;
  }

  @media ${devices.desk} {
    margin-bottom: 0;
  }
`;

export const ArticleDesc = styled.div`
  width: 280px;
  
  @media ${devices.tab} {
    display: flex;
    flex-direction: column;
    width: 340px;
  }
`;

export const ArticleAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const AuthorImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const AuthorName = styled.span`
  font-size: 14px;
  line-height: 22px;
  font-family: Lexend400, sans-serif;
  color: var(--font);
`;

export const ArticleTitle = styled.p`
  font-family: Lexend400, sans-serif;
  font-size: 18px;
  line-height: 32px;
  text-transform: capitalize;
  margin-bottom: 16px;
  color: var(--headline);
  width: 260px;

  @media ${devices.tab} {
    width: 340px;
  }
`;

export const ArticleInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ArticleInfoDesc = styled.div`
  font-family: Lexend400, sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: var(--grey);
`;

export const ArticleIcon = styled.img`
  width: 24px;
  height: 24px;
`;
