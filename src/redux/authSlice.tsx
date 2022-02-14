import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.value = action.payload;
    },
  },
});

// export the actions
export const { setAuth } = authSlice.actions;

// export reducers
export default authSlice.reducer;
