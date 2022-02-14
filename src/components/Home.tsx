import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../redux/authSlice';
import { RootState } from '../redux/store';

export const Home = () => {
  const [message, setMessage] = useState('');
  const auth = useSelector((state: RootState) => state.auth.value);
  const dispatch = useDispatch();

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
  }, [dispatch]);

  return (
    <div className='container mt-5 form-signin text-center'>
      {auth ? message : 'You are not authenticated'}
    </div>
  );
};
