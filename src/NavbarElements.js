// import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #560000;
  height: 5rem;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  box-sizing: border-box;
`;

export const NavLink = styled(Link)`
  color: #FFFFFF;
  text-decoration: none;
  padding: 0 0.5rem;
  font-size: 1.75rem;
  cursor: pointer;
  &.active {
    color: #FFB800;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const NavAnchor = styled.a`
  color: #FFFFFF;
  padding: 0 0.5rem;
  font-size: 1.75rem;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`

export const NavMenu = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  align-content: center;
`;
// export const Bars = styled(FaBars)`
//   display: none;
//   color: #808080;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;
//   margin-right: 24px;
//   /* Third Nav */
//   /* justify-content: flex-end;
//   width: 100vw; */
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;
//
// export const NavBtnLink = styled(Link)`
//   border-radius: 4px;
//   background: #808080;
//   padding: 10px 22px;
//   color: #000000;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   /* Second Nav */
//   margin-left: 24px;
//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #808080;
//   }
// `;