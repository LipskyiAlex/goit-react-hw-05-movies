import { Outlet } from 'react-router-dom';
import {Header, Nav,StyledNavLink} from './SharedLayout.styled';
import {FcHome,FcFilmReel} from 'react-icons/fc';
export const SharedLayout = () => {


  
  return (
    <div>
      <Header>
        <Nav>
          <StyledNavLink to="/"> <FcHome size="22"/> Home</StyledNavLink>
          <StyledNavLink to="/movies"><FcFilmReel size="22"/> Movies</StyledNavLink>
        </Nav>
      </Header>
      <Outlet/>
    </div>
  );
};
