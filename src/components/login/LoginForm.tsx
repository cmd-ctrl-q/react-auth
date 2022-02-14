import React, { SyntheticEvent, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const LoginForm = (props: { loginData: Function }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const { data } = await axios.post('login', {
      email,
      password,
    });

    // props.success();
    props.loginData(data);
  };

  return (
    <form onSubmit={submit}>
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
  );
};
