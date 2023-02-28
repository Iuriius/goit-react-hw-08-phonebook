import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Logged } from '../Menu/logged';
import { Unlogged } from '../Menu/unlogged';
import { selectAuth } from '../../redux/Authorization/slice';

export const LayoutPage = () => {
  const isLoggedIn = useSelector(selectAuth);

  return (
    <>
      {isLoggedIn.token ? <Logged /> : <Unlogged />}
      <Outlet />
    </>
  );
};
