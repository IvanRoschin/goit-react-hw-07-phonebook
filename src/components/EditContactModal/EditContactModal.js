import { ContactForm } from 'components/ContactForm/ContactForm';
import { Overlay, Modal, Title } from './EditContactModal.styled';
import {
  useGetContactByIdQuery,
  useUpdateContactMutation,
} from 'redux/contactSlice';

export const EditContactModal = ({ closeModal, id }) => {
  const { data: contact } = useGetContactByIdQuery(id);
  const [updateContact] = useUpdateContactMutation();
  const handleCloseModal = () => closeModal(false);

  const handleUpdateContact = async fields => {
    try {
      await updateContact({ id: id, ...fields });
      handleCloseModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Overlay>
      <Modal>
        <Title>Contact Update</Title>
        {contact && (
          <ContactForm
            initialValues={{ name: contact.name, phone: contact.phone }}
            btnText="Save"
            onSubmit={handleUpdateContact}
          />
        )}

        <button type="button" onClick={handleCloseModal}>
          Close
        </button>
      </Modal>
    </Overlay>
  );
};
