import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import {
  ContactItem,
  ContactName,
  ContactNumber,
  Button,
} from './ContactsListItem.styled';

export const ContactsListItem = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {contacts.length &&
        contacts.map(contact => (
          <ContactItem key={contact.id}>
            <ContactName>
              {contact.name}:<ContactNumber>{contact.phone}</ContactNumber>
            </ContactName>
            <Button
              type="button"
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </Button>
          </ContactItem>
        ))}
    </>
  );
};

ContactsListItem.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
};
