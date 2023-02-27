import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LoginPage } from './Pages/Login';
import { LayoutPage } from './Pages/Layout';
import { PrivateRoute } from './Private/route';
import { ContactsPage } from './Pages/Contacts';
import { RegisterPage } from './Pages/Register';
import { currentThunk } from '../redux/Authorization/thunk';
import { Routes, Route, Navigate } from 'react-router-dom';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
