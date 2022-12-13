import { useFetchContactsQuery } from 'redux/contactSlice';
import { getFilter } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactListItem/ContactItem';
import { Loader } from 'components/Loader';

const ContactList = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const filter = useSelector(getFilter);
  const filtredContacts = !contacts
    ? []
    : contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );

  return (
    <>
      {isFetching && <Loader />}
      {!contacts ? (
        <p>Your contactlist is empty</p>
      ) : (
        <table>
          <thead>
            {filtredContacts.map(contact => (
              <ContactItem key={contact.id} {...contact} />
            ))}
          </thead>
        </table>
      )}
    </>
  );
};

export default ContactList;
