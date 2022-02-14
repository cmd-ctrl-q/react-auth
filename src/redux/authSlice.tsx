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

// Export the actions
// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions;

// Export reducers
export default authSlice.reducer;
