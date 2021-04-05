import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ClickedFalse,
  clickedTrue,
  selectSign,
} from '../../features/signUpSlice';
import './SignIn.css';

function SignIn() {
  const dispatch = useDispatch();
  const signup = useSelector(selectSign);
  return (
    <div className="signIn">
      {!signup ? (
        <div className="login">
          <h1>Welcome Back</h1>
          <form className="login__form">
            <input
              type="email"
              className="login__form__email"
              placeholder="Email"
            />
            <input
              type="password"
              className="login__form__password"
              placeholder="Password"
            />
            <button className="login__form__button">Login</button>
          </form>

          <p>
            <span className="first">You don't have an account?</span>
            <span className="second" onClick={() => dispatch(clickedTrue())}>
              SignUp.
            </span>
          </p>
        </div>
      ) : (
        <div className="signUp">
          <h1>Welcome</h1>
          <form className="signUp__form">
            <input
              type="text"
              className="signUp__form__name"
              placeholder="Name"
            />
            <input
              type="email"
              className="signUp__form__email"
              placeholder="Email"
            />
            <input
              type="password"
              className="signUp__form__password"
              placeholder="Password"
            />
            <button className="signUp__form__button">Sign Up</button>
          </form>

          <p>
            <span className="first">You already have an account?</span>
            <span className="second" onClick={() => dispatch(ClickedFalse())}>
              {' '}
              SignIn
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default SignIn;
