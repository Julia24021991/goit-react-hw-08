import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short! Min 3 symbols')
    .max(50, 'Too long! Max 50 symbols')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too short! Min 3 symbols')
    .max(50, 'Too long! Max 50 symbols')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ ...values }))
      .unwrap()
      .then(() => {
        toast.success('Contact successfully added!', {
          style: {
            border: '1px solid #0d47a1',
            padding: '16px',
            color: '#111',
          },
          iconTheme: {
            primary: '#2196f3',
            secondary: '#fff',
          },
        });
        actions.resetForm();
      })
      .catch(() => {
        toast.error('Oops, something go wrong!', {
          style: {
            border: '1px solid #F1041B',
            padding: '16px',
            color: '#111',
          },
          iconTheme: {
            primary: '#F1041B',
            secondary: '#fff',
          },
        });
      });
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.item}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field className={css.input} type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.item}>
          <label className={css.label} htmlFor={numberFieldId}>
            Phone
          </label>
          <Field className={css.input} type="text" name="number" id={numberFieldId} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
