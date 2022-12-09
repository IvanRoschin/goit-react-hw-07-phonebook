import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {
  Label,
  Form,
  InputName,
  Field,
  AddContactBtn,
  ErrorMessageCustom,
} from './ContactForm.styled';

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .min(4, 'Too short!')
    .max(30, 'Too long!')
    .required('Required'),
  phone: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
    )
    .min(5, 'Too short!')
    .max(30, 'Too long!')
    .required('Required'),
});

export const ContactForm = ({
  initialValues = { name: '', phone: '' },
  onSubmit,
  btnText,
}) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Label>
            <InputName>Name</InputName>
            <ErrorMessage name="name" component="span">
              {() => (
                <ErrorMessageCustom>
                  Please, type (4-30 letters)
                </ErrorMessageCustom>
              )}
            </ErrorMessage>
            <Field name="name" type="text" />
          </Label>
          <br />
          <Label>
            <InputName>Phone</InputName>
            <ErrorMessage name="phone" component="span">
              {() => (
                <ErrorMessageCustom>
                  Please, type (5-9 numbers)
                </ErrorMessageCustom>
              )}
            </ErrorMessage>
            <Field name="phone" type="text" />
          </Label>
          <br />
          <AddContactBtn type="submit" disabled={isSubmitting}>
            {btnText}
          </AddContactBtn>
        </Form>
      )}
    </Formik>
  );
};

// import { useAddContactMutation } from 'redux/contactSlice';
// import { useFetchContactsQuery } from 'redux/contactSlice';
// // import Loader from 'components/Loader';
// import { toast } from 'react-toastify';

// export const ContactForm = () => {
//   const { data: contacts } = useFetchContactsQuery();
//   const [addContact] = useAddContactMutation();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const name = form.name.value;
//     const phone = form.number.value;

//     const isExist = contacts.find(contact => contact.name === name);

//     if (isExist) {
//       toast.error(`${name} is already in contacts.`);
//       form.reset();
//       return;
//     }
//     const newContact = {
//       name,
//       phone,
//     };
//     addContact(newContact);
//     toast.success(`${name} is added to Phonebook.`);
//     form.reset();
//   };
//   return (
//     <Form onSubmit={handleSubmit}>
//       <Label>
//         <InputName>Name</InputName>
//         <Input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />

//         <InputName>Number</InputName>
//         <Input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </Label>

//       <AddContactBtn className="button" type="submit">
//         add contact
//         {/* {isLoading ? <Loader> : 'Add contact'} */}
//       </AddContactBtn>
//     </Form>
//   );
// };
