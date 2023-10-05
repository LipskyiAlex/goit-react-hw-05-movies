import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';
import colors from '../../utilites/colors.js';


export const Header = styled.header `

background-color: ${colors.headerFooterDark};
 width: 100%;
 
 border-bottom: 3px solid ${colors.accentRed};
 box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
 

`

export const Nav = styled.nav `
 
display:flex;
gap:20px;
align-items:center;
justify-content:center;
color: ${colors.headerFooterDark};
font-size:36px;


`


export const StyledNavLink = styled(NavLink) `

  padding: 10px;
  transition: transform 0.2s ease-in-out;
   
  color: ${colors.accentRed}

  }

  &.active {

  font-weight:bold;
  color:${colors.textLight};
   transform: scale(1.05);

`

