import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

export const store = configureStore({
  // add reducers to redux store
  reducer: {
    auth: authReducer,
  },
});
