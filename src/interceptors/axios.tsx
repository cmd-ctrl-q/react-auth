import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    // token probably expired
    if (error.response.status === 401) {
      // get new refresh token
      const refreshResp = await axios.post('refresh', {});

      // success
      if (refreshResp.status === 200) {
        // return previous request details in error.config object
        return axios(error.config);
      }
    }

    return error;
  }
);
