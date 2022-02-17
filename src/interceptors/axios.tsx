import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api/';
// axios.defaults.withCredentials = true; // via cookies

let refresh = false;

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    // token probably expired
    if (error.response.status === 401 && !refresh) {
      refresh = true;

      // get new refresh token
      const response = await axios.post('refresh', {
        withCredentials: true,
      });

      // success
      if (response.status === 200) {
        // get access token from response
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.data.token}`;

        // return previous request details in error.config object
        return axios(error.config);
      }
    }

    refresh = false;
    return error;
  }
);
