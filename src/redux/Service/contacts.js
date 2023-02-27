import { userApi } from '../axios';

export const getContactsService = () => {
  return userApi.get('/contacts');
};

export const addContactService = params => {
  return userApi.post('/contacts', params);
};

export const deleteContactsService = id => {
  return userApi.delete(`/contacts/${id}`);
};
