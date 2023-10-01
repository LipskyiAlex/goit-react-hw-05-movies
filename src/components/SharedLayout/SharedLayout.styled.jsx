import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const Header = styled.header `

 width: 100%;
 
 border-bottom: 1px solid grey;
 box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);

 background-image: linear-gradient(to left, #553c9a, #b393d3);
 

`

export const Nav = styled.nav `
 
display:flex;
gap:20px;
align-items:center;
justify-content:center;
color: black;
font-size:20px;


`


export const StyledNavLink = styled(NavLink) `

  padding: 5px;
  transition: transform 0.2s ease-in-out;
  }

  &.active {

  font-weight:bold;
  color:#fff;
  transform: scale(1.05);

`