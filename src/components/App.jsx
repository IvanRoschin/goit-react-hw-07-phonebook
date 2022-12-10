import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from './ContactList';
import { ContactComponent } from './AddContact';

import {
  Container,
  PageTitle,
  ContactsTitle,
  TagLineBox,
  ContactFormBox,
} from './App.styled';

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
