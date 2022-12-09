import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from './ContactList/ContactList';

import {
  Container,
  PageTitle,
  ContactsTitle,
  TagLineBox,
  ContactFormBox,
} from './App.styled';
import { ContactComponent } from './AddContact/AddContact';

export const App = () => {
  return (
    <Container>
      <PageTitle>Phonebook</PageTitle>
      <TagLineBox>
        <ContactFormBox>
          <ContactsTitle>Contact form</ContactsTitle>
          <ContactComponent />
        </ContactFormBox>
        <div>
          <ContactsTitle>Contacts List</ContactsTitle>
          <ContactFilter />
          <ContactList />
        </div>
      </TagLineBox>
    </Container>
  );
};
