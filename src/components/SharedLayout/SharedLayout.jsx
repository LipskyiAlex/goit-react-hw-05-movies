import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {Header, Nav,StyledNavLink} from './SharedLayout.styled';
import {FcHome,FcFilmReel} from 'react-icons/fc';
const SharedLayout = () => {


  return (
    <div>
      <Header>
        <Nav>
          <StyledNavLink to="/"> <FcHome size="22"/> Home</StyledNavLink>
          <StyledNavLink to="/movies"><FcFilmReel size="22"/> Movies</StyledNavLink>
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
      <Outlet/>
      </Suspense>
    </div>
  );
};

export default SharedLayout;
