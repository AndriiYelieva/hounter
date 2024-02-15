import styled from "styled-components";
import { devices } from '../../common-styles/MediaQueries';

export const HeaderWrapper = styled.header`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 20px;
  
  z-index: 1;
  
  @media ${devices.tab} {
    top: 40px;
    padding: 0 40px;
  }

  @media ${devices.desk} {
    max-width: 1200px;
    padding: 0 120px;
  }
`;
export const NawWrapper = styled.div`
  display: none;

  @media ${devices.desk} {
    display: flex;
    align-items: center;
  }
`;

export const NavMenu = styled.menu`
  display: flex;
  margin-left: auto;
  margin-right: 56px;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background-color: var(--green);
  border: 1px solid var(--green);
  border-radius: 32px;
  font-size: 14px;
  color: var(--white);
  line-height: 18px;
  font-family: Lexend600, sans-serif;
  cursor: pointer;
  
  :not(:last-child) {
    margin-right: 24px;
  }

  @media (min-width: 1200px) {
    color: var(--white);
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  :hover {
    border: 1px solid var(--greenDark);

    @media (min-width: 1200px) {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

export const MenuButton = styled.button`
  font-size: 14px;
  line-height: 22px;
  font-family: Lexend600, sans-serif;
  color: var(--white);
  background: var(--greenDark);
  padding: 12px 24px;
  border-radius: 32px;
  border: none;
  cursor: pointer;

  @media (min-width: 1200px) {
    color: var(--greenDark);
    background: var(--greenLight);
  }

  :hover {
    transform: scale(0.99);
    transition: 0.3s;
  }
`;

export const BurgerImage = styled.img`
  width: 15px;
  height: 15px;
  display: block;

  @media ${devices.tab} {
    width: 20px;
    height: 20px;
  }

  @media ${devices.desk} {
    display: none;
  }
`;
