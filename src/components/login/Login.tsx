import React, { useState, SyntheticEvent } from 'react';
import { Navigate } from 'react-router-dom';
import { Alert } from '../Alert';
import { AuthForm } from './AuthForm';
import { LoginForm } from './LoginForm';

export const Login = () => {
  const [redirect, setRedirect] = useState(false);
  const [loginData, setLoginData] = useState<{
    id: number;
    secret?: string;
    otpauth_url?: string;
  }>({
    id: 0,
  });
  const [loginFailed, setLoginFailed] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const success = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to='/' />;
  }

  let form;

  if (loginData.id === 0) {
    // set the login data from the login form.
    // this allows you to do two-factor auth after logging in.
    form = <LoginForm loginData={setLoginData} />;
  } else {
    form = <AuthForm loginData={loginData} />;
  }

  return (
    <main className='form-signin'>
      <div>{loginFailed && <Alert value='danger' msg={errMsg} />}</div>
      {form}
    </main>
  );
};
