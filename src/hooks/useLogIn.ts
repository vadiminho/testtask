import { useForm } from 'react-hook-form';

import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { clearAuthenticatedError, setAccessToken, setAuthenticated, setAuthenticatedError } from '../app/redux/authReducer';
import { useLogInMutation } from '../features/auth/authSlice';
import { AuthFormData } from '../types/authTypes';

const useLogIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>();

  const [logIn, { error }] = useLogInMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogIn = useCallback(
    async (data: AuthFormData) => {
      const response = await logIn(data);

      if ('data' in response && response.data) {
        dispatch(setAccessToken(response.data.accessToken));
        dispatch(setAuthenticated(true));
        navigate('/');
        dispatch(clearAuthenticatedError());
      } else if (error && 'data' in error) {
        dispatch(setAuthenticatedError(error.data));
      }
    },
    [logIn, dispatch, navigate, error],
  );

  return {
    control,
    handleSubmit: handleSubmit(handleLogIn),
    errors,
  };
};

export default useLogIn;
