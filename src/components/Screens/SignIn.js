import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ClickedFalse,
  clickedTrue,
  selectSign,
} from '../../features/signUpSlice';
import './SignIn.css';
import axios from '../../axios';
import { Logout, Login } from '../../features/userSlice';

function SignIn() {
  const dispatch = useDispatch();
  const signup = useSelector(selectSign);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (event) => {
    event.preventDefault();

    const body = JSON.stringify({
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios
      .post('/api/users', body, config)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        dispatch(
          Login({
            token: localStorage.getItem('token'),
            name: res.data.user.name,
            email: res.data.user.email,
          })
        );
      })
      .catch((err) => {
        console.log(err);
        dispatch(Logout());
      });
  };

  const login = (event) => {
    event.preventDefault();

    const body = JSON.stringify({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios.post('/api/auth', body, config)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        dispatch(Login({
          token: localStorage.getItem('token'),
          name: res.data.user.name,
          email: res.data.user.email,
          imgURL: res.data.user?.imgURL
        }))
      })
      .catch(err => {
        console.log(err);
        dispatch(Logout())
      })
  };

  return (
    <div className="signIn">
      {!signup ? (
        <div className="login">
          <h1>Welcome Back</h1>
          <div className="login__form">
            <input
              type="email"
              className="login__form__email"
              placeholder="Email"
              ref={emailRef}
            />
            <input
              type="password"
              className="login__form__password"
              placeholder="Password"
              ref={passwordRef}
            />
            <button className="login__form__button" onClick={login}>
              Login
            </button>
          </div>

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
          <div className="signUp__form">
            <input
              type="text"
              className="signUp__form__name"
              placeholder="Name"
              ref={nameRef}
            />
            <input
              type="email"
              className="signUp__form__email"
              placeholder="Email"
              ref={emailRef}
            />
            <input
              type="password"
              className="signUp__form__password"
              placeholder="Password"
              ref={passwordRef}
            />
            <button
              type="button"
              className="signUp__form__button"
              onClick={register}
            >
              Sign Up
            </button>
          </div>

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
