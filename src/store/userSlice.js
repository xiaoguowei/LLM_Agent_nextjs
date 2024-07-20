import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  error: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setEmail, setError, setLoggedIn } = userSlice.actions;

export default userSlice.reducer;
