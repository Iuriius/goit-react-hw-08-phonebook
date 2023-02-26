import toast, { Toaster } from 'react-hot-toast';
import { Label, Input, Button, FormContainer } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContact } from '../../redux/selectors';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const form = event.target;
    const { name, phone } = Object.fromEntries(formData);

    if (contacts.some(item => item.name === name)) {
      return toast.error(`${name} is already in contacts`);
    }
    dispatch(addContact({ name, phone }));
    form.reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit} autoComplete="off">
      <div>
        <Toaster />
      </div>
      <div>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="phone"
            placeholder="Enter number 000-00-00"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
      </div>
      <Button type="submit">Add new contact</Button>
    </FormContainer>
  );
};
