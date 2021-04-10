import React, { useState } from 'react';
import Header from '../Header';
import './Profile.css';

import { useDispatch, useSelector } from 'react-redux';
import { Login, Logout, selectUser } from '../../features/userSlice';
import { useHistory } from 'react-router';
import axios from '../../axios';

function Profile() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const [image, setImage] = useState(null);

  const logout = (event) => {
    event.preventDefault();

    localStorage.removeItem('token');
    dispatch(Logout());

    history.push('/');
  };

  function handleFile(event) {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  }

  function handleUpload(event) {
    event.preventDefault();
    const form = new FormData();
    form.append('uploads', image);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-auth-token': localStorage.getItem('token'),
      },
    };
    axios
      .post(`/api/users/${user.id}`, form, config)
      .then((res) => {
        dispatch(
          Login({
            ...user,
            imgURL: res.imgURL,
          })
        );
        console.log(res);
        setImage(null);
      })
      .catch((err) => {
        console.log(err);
        alert('You are facing an error please try again');
      });
  }

  return (
    <div className="profile">
      <Header />
      <div className="profile__body">
        <img src={user?.imgURL} alt="pic" className="profile__body__img" />
        <h1>{user.name}</h1>
        <form className="profile__form">
          <input
            type="file"
            className="profile__form__file"
            onChange={handleFile}
          />
          <button
            className="profile__form__button"
            onClick={handleUpload}
            disabled={!image}
          >
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
