import styled from 'styled-components';
import { devices } from '../../common-styles/MediaQueries';

export const SectionTitle = styled.h2`
  font-family: Lexend300, sans-serif;
  font-size: 14px;
  line-height: 18px;
  text-transform: capitalize;
  text-align: center;
  color: var(--gold);
  position: relative;
  margin-bottom: 20px;

  @media ${devices.desk} {
    text-align: start;
    margin-bottom: ${({ center }) => center ? '12px' : '0'};
  }

  :before {
    display: none;
    
    @media ${devices.desk} {
      display: block;
      content: '';
      position: absolute;
      left: ${({ center }) => center ? '' : '-40px'};
      top: ${({ center }) => center ? '-8px' : ''};
      bottom: ${({ center }) => center ? '' : '50%'};
      right: ${({ center }) => center ? '50%;' : ''};
      transform: ${({ center }) => center
              ? 'translate(50%, -50%)'
              : 'translate(0, -50%)'};
      width: 32px;
      height: 1px;
      background-color: var(--gold);
    }
   }
`;
