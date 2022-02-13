import { useEffect, useState } from 'react';
import axios from 'axios';

export const Home = () => {
  const [message, setMessage] = useState('You are not authenticated');

  const getUser = async () => {
    try {
      // get the authenticated user
      const response = await axios.get('user');

      const user = response.data;

      setMessage(`Hi ${user.first_name} ${user.last_name}`);
    } catch (err) {
      setMessage('You are not authenticated');
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className='container mt-5 form-signin text-center'>{message}</div>
  );
};
