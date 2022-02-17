import React, { SyntheticEvent, useState } from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';

export const LoginForm = (props: {
  loginData: Function;
  success: Function;
}) => {
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

  const onSuccess = async (googleUser: any) => {
    const { status, data } = await axios.post(
      'google-auth',
      {
        token: googleUser.tokenId,
      },
      { withCredentials: true }
    );

    // get access token from response
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

    if (data.status === 200) {
      props.success();
    }
  };

  const onFailure = (e: Error) => {
    console.log(e);
  };

  return (
    <>
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

      <GoogleLogin
        clientId='744328445108-2f47drbqgmrja84h5872kun2dlj0iojt.apps.googleusercontent.com'
        buttonText='Login with Google'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy='single_host_origin'
        className='mt-3 w-100'
      />
    </>
  );
};
