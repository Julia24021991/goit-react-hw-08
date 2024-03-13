import { FaUser, FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css"

export const Contact = ({ contact: { name, number, id }, onDeleteButton }) => {
    return (
        <div className={css.contact}>
            <div>
                <p className={css.name}><FaUser className={css.icon} />{name}</p>
                <p className={css.number}><FaPhone className={css.icon} />{number}</p>
            </div>
            <button className={css.button} onClick={() => onDeleteButton(id)}>Delete</button>
        </div>
    )
}
