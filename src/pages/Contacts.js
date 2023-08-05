import { useEffect, useState } from 'react';
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
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const toggle = () => {
    setIsActive(prev => !prev);
  };

  return (
    <div className="cont-wrap">
      <h2 style={{ color: 'darkorchid' }}>Phonebook</h2>
      <Form />
      {isLoading && !error && <b>Please wait...</b>}
      {contacts.length > 0 && (
        <>
          <h2 className={isActive ? 'text' : 'text-is-active'}>Contacts</h2>
          <button onClick={toggle}>TOGGLE</button>
          <Filter />
          <ContactsList />
        </>
      )}
    </div>
  );
};
export default ContactsPage;
