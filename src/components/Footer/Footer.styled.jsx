import styled from 'styled-components';
import { devices } from '../../common-styles/MediaQueries';

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;

  @media ${devices.desk} {
    margin: 0 auto;
    max-width: 1200px;
    align-items: start;
    flex-direction: row;
  }

  @media (max-width: 1200px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.p`
  font-family: Lexend300, sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: var(--neutral);
  opacity: 0.75;
  margin: 16px 0 30px;
`;

export const SocialWrapper = styled.div`
  display: flex;
`;

export const SocialLinks = styled.li`
  list-style: none;

  :not(:last-child) {
    margin-right: 24px;
  }

  @media ${devices.desk} {
    margin-bottom: 0;
  }

  @media (max-width: 1200px) {
    margin-bottom: 20px;
  }
`;

export const SocialImg = styled.img`
  width: 32px;
  height: 32px;
`;
