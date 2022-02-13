import axios from 'axios';
import React, { SyntheticEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';

export const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [redirect, setRedirect] = useState(false);

  const submitRegisterHandler = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.post('register', {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      password_confirm: passwordConfirm,
    });

    // successfully registered, redirect user to login
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to='/login' />;
  }

  return (
    <main className='form-signin'>
      <form onSubmit={submitRegisterHandler}>
        <h1 className='h3 mb-3 fw-normal'>Please Register</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='first-name'
            placeholder='John'
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor='first-name'>First Name</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='last-name'
            placeholder='Doe'
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor='last-name'>Last Name</label>
        </div>

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

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='confirmPassword'
            placeholder='Password Confirm'
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <label htmlFor='confirmPassword'>Confirm Password</label>
        </div>

        <button
          className='w-100 btn btn-lg btn-primary'
          type='submit'
          onSubmit={(e) => submitRegisterHandler(e)}
        >
          Submit
        </button>
      </form>
    </main>
  );
};
