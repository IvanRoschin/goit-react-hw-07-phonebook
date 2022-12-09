import { DeleteBtn } from './ContactItem.styled';
import { useDeleteContactMutation } from 'redux/contactSlice';

export const ContactItem = ({ contacts }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <thead>
      {contacts.map(({ id, name, phone }) => {
        const handleDelete = () => deleteContact(id);

        return (
          <tr key={id}>
            <td>{name}</td>
            <td>{phone}</td>
            <td>
              <DeleteBtn type="button" onClick={handleDelete}>
                {isDeleting ? 'Deleting' : 'Delete'}
              </DeleteBtn>
            </td>
          </tr>
        );
      })}
    </thead>
  );
};
