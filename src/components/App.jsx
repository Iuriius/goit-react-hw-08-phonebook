import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from './Private/route';
import { useAuth } from '../redux/Authorization/useAuth';
import { Route, Routes, Navigate } from 'react-router-dom';
import { currentThunk } from '../redux/Authorization/thunk';

const LayoutPage = lazy(() => import('./Pages/LayoutPage'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));
const ContactsPage = lazy(() => import('./Pages/ContactsPage'));

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
          <Route path="/register" element={
            <RestrictedRoute redirectTo="/register" component={<Register />}} />
          <Route path="/login" element={
            <RestrictedRoute redirectTo="/login" component={<LoginPage />}} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/contacts" element={<ContactsPage />} />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
