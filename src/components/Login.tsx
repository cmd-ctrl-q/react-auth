import React, { useState, SyntheticEvent } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { Alert } from './Alert';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const loginSubmitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('login', {
        email,
        password,
      }); // {withCredentials: true} is implied in interceptors/axios.tsx

      setRedirect(true);

      return response.data;
    } catch (err: any) {
      setErrMsg(err.response.data.message);
      setLoginFailed(true);
      throw err;
    }
  };

  if (redirect) {
    return <Navigate to='/' />;
  }

  return (
    <main className='form-signin'>
      <div>{loginFailed && <Alert value='danger' msg={errMsg} />}</div>
      <form onSubmit={loginSubmitHandler}>
        <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            placeholder='name@example.com'
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='email'>Email address</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
        </div>

        <div className='mb-3'>
          <Link to='/forgot'>Forgot Password</Link>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>
          Sign in
        </button>
      </form>
    </main>
  );
};
