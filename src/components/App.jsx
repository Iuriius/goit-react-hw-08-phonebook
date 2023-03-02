// import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../redux/Authorization/useAuth';
import { Route, Routes, Navigate } from 'react-router-dom';
import { currentThunk } from '../redux/Authorization/thunk';
import { PrivateRoute } from '../redux/Authorization/PrivateRoute';
import { RestrictedRoute } from '../redux/Authorization/RestrictedRoute';

import LayoutPage from './Pages/LayoutPage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import ContactsPage from './Pages/ContactsPage';

// const LayoutPage = lazy(() => import('./Pages/LayoutPage'));
// const RegisterPage = lazy(() => import('./Pages/RegisterPage'));
// const LoginPage = lazy(() => import('./Pages/LoginPage'));
// const ContactsPage = lazy(() => import('./Pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route
          path="/register"
          element={
            <RestrictedRoute component={<RegisterPage />} redirectTo="/login" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={<ContactsPage />} />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
