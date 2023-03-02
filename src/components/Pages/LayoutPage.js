import { Suspense } from 'react';
import { Logged } from '../Menu/logged';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Unlogged } from '../Menu/unlogged';
import { selectAuth } from '../../redux/Authorization/slice';

const LayoutPage = () => {
  const isLoggedIn = useSelector(selectAuth);

  return (
    <>
      {isLoggedIn.token ? <Logged /> : <Unlogged />}
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default LayoutPage;
