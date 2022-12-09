import { useAddContactMutation } from 'redux/contactSlice';
import { useFetchContactsQuery } from 'redux/contactSlice';
// import Loader from 'components/Loader';
import { toast } from 'react-toastify';

import {
  Form,
  Label,
  InputName,
  Input,
  AddContactBtn,
} from './ContactForm.styled';

export const ContactForm = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value;
    const phone = form.number.value;

    const isExist = contacts.find(contact => contact.name === name);

    if (isExist) {
      toast.error(`${name} is already in contacts.`);
      form.reset();
      return;
    }
    const newContact = {
      name,
      phone,
    };
    addContact(newContact);
    toast.success(`${name} is added to Phonebook.`);
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <InputName>Name</InputName>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <InputName>Number</InputName>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <AddContactBtn className="button" type="submit">
        add contact
        {/* {isLoading ? <Loader> : 'Add contact'} */}
      </AddContactBtn>
    </Form>
  );
};
