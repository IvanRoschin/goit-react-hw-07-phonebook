import { useFetchContactsQuery } from 'redux/contactSlice';
import { getFilter } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import { ContactItem } from './ContactItem';
import { Loader } from 'components/Loader';

const ContactList = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
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
        <table>{<ContactItem contacts={filtredContacts()} />}</table>
      )}
    </>
  );
};

export default ContactList;

// import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
// import { getFilter, getContacts } from 'redux/Selectors';

// import { DeleteBtn } from './ContactList.styled';

// const filterContacts = (contacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
// };

// export const ContactList = () => {
//   const contacts = useSelector(getContacts);
//   console.log('contacts', contacts);
//   const dispatch = useDispatch();
//   const filter = useSelector(getFilter);
//   console.log('filter', filter);

//   const visibleContacts = filterContacts(contacts, filter);
//   //   const handleDelete = () => dispatch(deleteContact(id));

//   return (
//     <>
//       {!contacts.length && (
//         <p className="inputName">Your contactlist is empty</p>
//       )}
//       {!visibleContacts.length && Boolean(contacts.length) && (
//         <p className="inputName">No contacts found</p>
//       )}
//       <table>
//         <thead>
//           {visibleContacts.map(({ id, name, number }) => {
//             const handleDelete = () => dispatch(deleteContact(id));

//             return (
//               <tr key={id}>
//                 <td>{name}</td>
//                 <td>{number}</td>
//                 <td>
//                   <DeleteBtn type="button" onClick={handleDelete}>
//                     Delete
//                   </DeleteBtn>
//                 </td>
//               </tr>
//             );
//           })}
//         </thead>
//       </table>
//     </>
//   );
// };
