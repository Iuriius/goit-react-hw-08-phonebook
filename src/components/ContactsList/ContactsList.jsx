import { useSelector } from 'react-redux';
import { ContactUl } from './ContactsList.styled';
import { selectVisibleContacts } from '../../redux/selectors';
import { ContactsListItem } from '../ContactsListItem/ContactsListItem';

export const ContactsList = () => {
  const contactsList = useSelector(selectVisibleContacts);

  return (
    <ContactUl>
      <ContactsListItem contacts={contactsList} />
    </ContactUl>
  );
};
