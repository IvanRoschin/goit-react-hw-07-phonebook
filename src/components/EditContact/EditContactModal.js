// import { useParams } from 'react-router-dom';
// import { ContactForm } from '../ContactForm/ContactForm';
// import { Overlay, Modal } from './EditContactModal.styled';
// import {
//   useGetContactByIdQuery,
//   useUpdateContactMutation,
// } from 'redux/contactSlice';

// export const EditContactModal = () => {
//   const { contactId } = useParams();
//   const { data: contact } = useGetContactByIdQuery(contactId);

//   const [updateContact] = useUpdateContactMutation();

//   const handleUpdateContact = async fields => {
//     try {
//       await updateContact({ id: contactId, ...fields });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Overlay>
//       <Modal>
//         {contact && (
//           <ContactForm
//             initialValues={{ name: contact.name, phone: contact.phone }}
//             btnText="Сохранить изменения"
//             onSubmit={handleUpdateContact}
//           />
//         )}

//         <button type="button" onClick={null}>
//           Закрыть
//         </button>
//       </Modal>
//     </Overlay>
//   );
// };
