import styled from 'styled-components';
import { devices } from '../../common-styles/MediaQueries';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${devices.desk} {
    flex-direction: row;
  }
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  :not(:last-child) {
    margin-right: 88px;
  }

  @media ${devices.desk} {
    margin-bottom: 0;
  }
`;

export const InfoTitle = styled.h3`
  font-size: 18px;
  line-height: 22px;
  text-transform: capitalize;
  margin-bottom: 24px;
  color: var(--headlineDark);
  font-family: Lexend600, sans-serif;
`;

export const InfoListItem = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 18px;
  text-transform: capitalize;
  font-family: Lexend300, sans-serif;

  :not(:last-child) {
    margin-bottom: 18px;
  }
`;

export const InfoLink = styled.a`
  color: var(--grey);
`;

