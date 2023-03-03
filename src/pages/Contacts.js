import { useEffect } from 'react';
import { Form } from '../components/Form/Form';
import { Filter } from '../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { ContactsList } from '../components/ContactsList/ContactsList';
import {
  selectContact,
  selectError,
  selectIsLoading,
} from '../redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="cont-wrap">
      <h2 style={{ color: 'darkorchid' }}>Phonebook</h2>
      <Form />
      {isLoading && !error && <b>Please wait...</b>}
      {contacts.length > 0 && (
        <>
          <h2 style={{ color: 'darkorchid' }}>Contacts</h2>
          <Filter />
          <ContactsList />
        </>
      )}
    </div>
  );
};
export default ContactsPage;
