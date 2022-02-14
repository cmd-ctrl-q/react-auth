import React, { SyntheticEvent, useState } from 'react';

export const AuthForm = (props: {
  loginData: {
    id: number;
    secret?: string;
    otpauth_url?: string;
  };
}) => {
  const [code, setCode] = useState('');

  const submit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submit}>
      <h1 className='h3 mb-3 fw-normal'>
        Please insert your authentication code
      </h1>

      <div className='form-floating'>
        <input
          type='text'
          className='form-control'
          id='qr-code'
          placeholder='6 digit code'
          onChange={(e) => setCode(e.target.value)}
        />
        <label htmlFor='password'>6 digit code</label>
      </div>

      <button className='w-100 btn btn-lg btn-primary' type='submit'>
        Submit
      </button>
    </form>
  );
};
