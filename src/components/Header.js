import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import logo from '../logo.png';
import { useHistory } from 'react-router';

function Header() {
  const history = useHistory();
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="icon" onClick={() => history.push('/Profile')}/>
      </IconButton>

      <img src={logo} alt="logo" className="header__logo" onClick={() => history.push('/')} />

      <IconButton>
        <ForumIcon className="icon" />
      </IconButton>
    </div>
  );
}

export default Header;
