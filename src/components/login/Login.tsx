import React, { useState, SyntheticEvent } from 'react';
import { Navigate } from 'react-router-dom';
import { Alert } from '../Alert';
import { LoginForm } from './LoginForm';

export const Login = () => {
  const [redirect, setRedirect] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const success = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to='/' />;
  }

  return (
    <main className='form-signin'>
      <div>{loginFailed && <Alert value='danger' msg={errMsg} />}</div>
      <LoginForm success={success} />
    </main>
  );
};
