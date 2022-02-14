import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  const [auth, setAuth] = useState(false);

  const checkUserAuth = async () => {
    try {
      // get the authenticated user
      await axios.get('user');
      setAuth(true);
    } catch (err) {
      setAuth(false);
    }
  };

  useEffect(() => {
    checkUserAuth();
  });

  const logout = async () => {
    // send request to delete jwt on backend
    await axios.post('logout');
  };

  let links;

  if (auth) {
    links = (
      <Link to='/' className='btn btn-outline-light me-2' onClick={logout}>
        Logout
      </Link>
    );
  } else {
    links = (
      <div className='text-end'>
        <Link to='/login' className='btn btn-outline-light me-2'>
          Login
        </Link>
        <Link to='/register' className='btn btn-outline-light me-2'>
          Register
        </Link>
      </div>
    );
  }

  return (
    <header className='p-3 bg-dark text-white'>
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
          <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
            <li>
              <Link to='/' className='nav-link px-2 text-white'>
                Home
              </Link>
            </li>
          </ul>

          {links}
        </div>
      </div>
    </header>
  );
};
