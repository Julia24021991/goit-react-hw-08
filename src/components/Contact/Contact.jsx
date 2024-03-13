import { FaUser, FaPhone } from 'react-icons/fa6';
import css from './Contact.module.css';

export const Contact = ({ contact: { name, number }, openDeleteModal, openPatchModal }) => {
  return (
    <div className={css.item}>
      <div>
        <p className={css.name}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.number}>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <div className={css.buttons}>
        <button
          className={css.button}
          onClick={() => {
            openDeleteModal();
          }}
        >
          Delete
        </button>
        <button
          className={css.button}
          onClick={() => {
            openPatchModal();
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};
