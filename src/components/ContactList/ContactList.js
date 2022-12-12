import { useFetchContactsQuery } from 'redux/contactSlice';
// import { useGetFilterQuery } from 'redux/filterSlice';

import { getFilter } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import { ContactItem } from './ContactItem';
import { Loader } from 'components/Loader';

const ContactList = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  // const { data: filter } = useGetFilterQuery();
  // console.log('contacts', contacts);
  // console.log('filter', filter);

  const filter = useSelector(getFilter);

  const filtredContacts = () => {
    const normalizeFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <>
      {!contacts && <p>Your contactlist is empty</p>}

      {isFetching ? (
        <Loader />
      ) : (
        <div>{<ContactItem contacts={filtredContacts()} />}</div>
      )}
    </>
  );
};

export default ContactList;
