import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import logo from '../logo.png';

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="icon" />
      </IconButton>

      <img src={logo} alt="logo" className="header__logo" />

      <IconButton>
        <ForumIcon className="icon" />
      </IconButton>
    </div>
  );
}

export default Header;
