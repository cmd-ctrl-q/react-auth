import { ReactElement, SyntheticEvent, useEffect, useState } from 'react';
import axios from 'axios';
import qrcode from 'qrcode';

export const AuthForm = (props: {
  loginData: {
    id: number;
    secret?: string;
    otpauth_url?: string;
  };
  success: Function;
}) => {
  const [code, setCode] = useState('');
  const [img, setImg] = useState<ReactElement | null>(null);

  useEffect(() => {
    if (props.loginData.otpauth_url) {
      qrcode.toDataURL(props.loginData.otpauth_url, (err, data) => {
        setImg(<img src={data} style={{ width: '100%' }} alt='qr code' />);
      });
    }
  }, [props.loginData.otpauth_url]);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    // send two-factor auth request
    const { status } = await axios.post('two-factor', {
      ...props.loginData,
      code,
    });

    if (status === 200) {
      props.success();
    }
  };

  return (
    <>
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

        <button className='w-100 btn btn-lg btn-primary mt-3' type='submit'>
          Submit
        </button>
      </form>

      {img}
    </>
  );
};
