import React from 'react';
import chefLogo from '../assets/chef-claude-icon.png';

const Header = () => {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-brand">
        <img className="logo" src={chefLogo} alt="Chef Claude logo" />
        Chef Sela
      </a>
    </nav>
  );
};

export default Header;
