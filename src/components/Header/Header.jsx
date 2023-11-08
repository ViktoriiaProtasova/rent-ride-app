import React from 'react';
import { HeaderContainer, Navigation, StyledLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
