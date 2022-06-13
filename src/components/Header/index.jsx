import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from './styledHeader';

function Header() {
  return (
    <StyledHeader>
      <Link to="/about">Sobre</Link>
      <br/>
      <Link to="/">Home</Link>
    </StyledHeader>
  )
}

export default Header;
