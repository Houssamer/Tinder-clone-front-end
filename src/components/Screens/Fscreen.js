import React, { useState } from 'react';
import './Fscreen.css';
import logo from '../../logo1.png';
import SignIn from './SignIn';
import { useDispatch } from 'react-redux';
import { ClickedFalse, clickedTrue } from '../../features/signUpSlice';

function Fscreen() {
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();
  function createAccount() {
    setLogin(true);
    dispatch(clickedTrue());
  }
  return (
    <div className="fscreen">
      <div className="fscreen__background">
        <img
          src={logo}
          alt="logo"
          className="fscreen__header__logo"
          onClick={() => {
            setLogin(false);
            dispatch(ClickedFalse());
          }}
        />
        {!login && (
          <button
            className="fscreen__header__button"
            onClick={() => setLogin(true)}
          >
            LOGIN
          </button>
        )}
        <div className="shadow" />
      </div>
      {!login ? (
        <div className="fscreen__body">
          <h1>Swipe Right</h1>
          <button className="fscreen__button" onClick={createAccount}>
            CREATE ACCOUNT
          </button>
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default Fscreen;
