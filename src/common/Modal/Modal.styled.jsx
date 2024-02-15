import styled from 'styled-components';
import { devices } from '../../common-styles/MediaQueries';

export const ModalBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
  z-index: 2;

  ${({ active }) => active
          && `opacity: 1; pointer-events: all;`}
`;

export const ModalContent = styled.div`
  transform: scale(0.5);
  width: max-content;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${({image}) => image && `url(${image})`};
  background-position: center;
  background-size: cover;
  
  @media ${devices.tab} {
    transform: scale(0.6);
  }
  
  @media ${devices.desk} {
    transform: scale(1);
  }
`;

