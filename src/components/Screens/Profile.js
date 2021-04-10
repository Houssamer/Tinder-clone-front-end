import React from 'react';
import Header from '../Header';
import './Profile.css';

import { useDispatch, useSelector } from 'react-redux';
import { Logout, selectUser } from '../../features/userSlice';
import { useHistory } from 'react-router';
import axios from '../../axios';

function Profile() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = (event) => {
    event.preventDefault();

    localStorage.removeItem('token');
    dispatch(Logout());

    history.push('/');
  };

  function handleUpload() {}
    
  return (
    <div className="profile">
      <Header />
      <div className="profile__body">
        <img src={user?.imgURL} alt="" className="profile__body__img" />
        <h1>{user.name}</h1>
        <form className="profile__form">
          <input type="file" className="profile__form__file" />
          <button className="profile__form__button" onClick={handleUpload}>
            Upload
          </button>
        </form>
        <button className="profile__logout__button" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
