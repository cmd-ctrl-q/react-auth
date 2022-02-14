import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuth } from '../redux/authSlice';

export const Home = () => {
  const [message, setMessage] = useState('You are not authenticated');
  const dispatch = useDispatch();

  const getUser = async () => {};

  useEffect(() => {
    (async () => {
      try {
        // get the authenticated user
        const { data } = await axios.get('user');

        setMessage(`Hi ${data.first_name} ${data.last_name}`);

        // dispatch the setAuth event and set its value to true for successfully authenticating the user
        dispatch(setAuth(true));
      } catch (err) {
        setMessage('You are not authenticated');
        dispatch(setAuth(false));
      }
    })();
  }, []);

  return (
    <div className='container mt-5 form-signin text-center'>{message}</div>
  );
};
