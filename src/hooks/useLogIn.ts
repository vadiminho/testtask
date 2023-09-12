import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { clearAuthenticatedError, setAccessToken, setAuthenticated, setAuthenticatedError } from '../app/redux/authReducer';
import { useLogInMutation } from '../features/auth/authSlice';
import { AuthFormData } from '../types/authTypes';
import {isFetchBaseQueryError, isErrorWithMessage} from "../helpers";


const useLogIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>();

  const [logIn] = useLogInMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogIn = useCallback(
      async (data: AuthFormData) => {
        try {
          const response = await logIn(data).unwrap();
          if ('data' in response && response.data) {
            dispatch(setAccessToken(response.data.accessToken));
            dispatch(setAuthenticated(true));
            navigate('/');
            dispatch(clearAuthenticatedError());
          }
        } catch (error) {
          if (isFetchBaseQueryError(error)) {
            dispatch(setAuthenticatedError(error.data));
          }else if (isErrorWithMessage(error)){
            dispatch(setAuthenticatedError(error.data));
          }
        }
      },
      [logIn, dispatch, navigate],
  );

  return {
    control,
    handleSubmit: handleSubmit(handleLogIn),
    errors,
  };
};

export default useLogIn;

