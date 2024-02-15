import styled from 'styled-components';
import { devices } from '../../common-styles/MediaQueries';

export const BurgerMenuContent = styled.div`
  background-color: var(--green);
  display: flex;
  justify-content: end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s;
  overflow: ${({ isOpen }) => !isOpen && 'hidden'};
  z-index: ${({ isOpen }) => isOpen && 5};
  
  @media ${devices.desk} {
    display: none;
  }
`;

export const CrossWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 25px;
  right: 20px;

  @media ${devices.tab} {
    top: 45px;
    right: 40px;
  }
`;

export const Nav = styled.menu`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  font-size: 14px;
  line-height: 18px;
  font-family: Lexend600, sans-serif;
  cursor: pointer;
  margin-right: 24px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 16px;
  
  & a {
    color: var(--white);
  }
  
  &:hover {
    border: 1px solid var(--greenDark);
  }
`;
