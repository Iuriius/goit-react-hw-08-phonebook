import { useEffect } from 'react';
import { Form } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { fetchContacts } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsList } from '../ContactsList/ContactsList';
import {
  selectContact,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Phonebook</h2>
      <Form />
      {isLoading && !error && <b>Please wait...</b>}
      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactsList />
        </>
      )}
    </>
  );
};
