import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
  accessToken: localStorage.getItem('token') || '',
  authenticatedError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticatedError: (state, action) => {
      state.authenticatedError = action.payload;
    },
    clearAuthenticatedError: (state) => {
      state.authenticatedError = null;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      localStorage.setItem('token', action.payload);
    },
    logout: (state) => {
      localStorage.removeItem('token');
      state.isAuthenticated = false;
    },
  },
});

export const { setAccessToken, logout, setAuthenticated, setAuthenticatedError, clearAuthenticatedError } = authSlice.actions;

export default authSlice.reducer;
