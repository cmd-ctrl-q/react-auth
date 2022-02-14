import axios from 'axios';
import React, { SyntheticEvent, useState } from 'react';

export const Forgot = () => {
  const [email, setEmail] = useState('');
  const [notify, setNotify] = useState({
    show: false,
    error: false,
    message: '',
  });

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      await axios.post('forgot', { email });
      setNotify({
        show: true,
        error: false,
        message: 'Please check your email!',
      });
    } catch (err) {
      setNotify({
        show: true,
        error: true,
        message: 'Error occured!',
      });
    }
  };

  let info;

  if (notify.show) {
    info = (
      <div
        className={notify.error ? 'alert alert-danger' : 'alert alert-success'}
        role='alert'
      >
        {notify.message}
      </div>
    );
  }

  return (
    <main className='form-signin'>
      {info}

      <form onSubmit={submit}>
        <h1 className='h3 mb-3 fw-normal'>Please put your email</h1>

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

        <button className='w-100 btn btn-lg btn-primary mt-3' type='submit'>
          Reset password
        </button>
      </form>
    </main>
  );
};
