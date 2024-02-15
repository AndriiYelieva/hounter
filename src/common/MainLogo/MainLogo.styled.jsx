import styled from 'styled-components';
import { devices } from '../../common-styles/MediaQueries';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;

  @media ${devices.tab} {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
  
  @media ${devices.desk} {
    width: 36px;
    height: 36px;
    margin-right: 12px;
  }
`;

export const LogoTitle = styled.p`
  font-family: Lexend700, sans-serif;
  font-size: 16px;
  line-height: 20px;
  text-transform: capitalize;
  color: var(--headline);
`;
