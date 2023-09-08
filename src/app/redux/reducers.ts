import { authApi } from '../../features/auth/authSlice';
import authReducer from './authReducer';

const rootReducer = {
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
};

export default rootReducer;
