import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAuth } from '../../redux/Authorization/slice';

export const PrivateRoute = () => {
  const { token } = useSelector(selectAuth);
  return token ? <Outlet /> : <Navigate to="/login" />;
};
