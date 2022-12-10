import { DeleteBtn } from './ContactItem.styled';
import { useDeleteContactMutation } from 'redux/contactSlice';
import { Loader } from 'components/Loader';
import { toast } from 'react-toastify';

export const ContactItem = ({ contacts }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <thead>
      {contacts.map(({ id, name, phone }) => {
        const handleDelete = e => {
          e.preventDefault();
          deleteContact(id);
          toast.warning(`Contact is deleted`);
        };

        return (
          <tr key={id}>
            <td>{name}</td>
            <td>{phone}</td>
            <td>
              <DeleteBtn type="button" onClick={null}>
                update
              </DeleteBtn>
            </td>
            <td>
              <DeleteBtn
                type="button"
                disabled={isDeleting}
                onClick={handleDelete}
              >
                {isDeleting ? <Loader /> : 'Delete'}
              </DeleteBtn>
            </td>
          </tr>
        );
      })}
    </thead>
  );
};
