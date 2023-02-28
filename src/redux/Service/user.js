import { userApi } from '../Authorization/thunk';

export const currentService = () => {
  return userApi.get('/users/current');
};

export const signUpService = body => {
  return userApi.post('/users/signup', body);
};

export const signInService = body => {
  return userApi.post('/users/login', body);
};

export const logOutService = () => {
  return userApi.post('/users/logout');
};
