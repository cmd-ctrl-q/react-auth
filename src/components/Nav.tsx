import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAuth } from '../redux/authSlice';
import { RootState } from '../redux/store';

export const Nav = () => {
  // get the auth value from the state
  const auth = useSelector((state: RootState) => state.auth.value);
  const dispatch = useDispatch();

  const logout = async () => {
    // send request to delete jwt on backend
    await axios.post('logout');

    dispatch(setAuth(false));
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
