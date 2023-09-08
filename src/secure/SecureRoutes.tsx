import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../app/redux/store';
interface SecureProps {
  page: ReactElement;
}

function SecureRoutes({ page }: SecureProps) {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return page;
  }
  return <Navigate to="/log-in" />;
}

export default SecureRoutes;
