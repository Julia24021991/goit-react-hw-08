import { Contact } from "../Contact/Contact"
import css from "./ContactList.module.css"

export const ContactList = ({ contacts, onDelete }) => {
    return (
        <div >
            <ul className={css.ulList} >
                {contacts.map((contact) => {
                    return (
                        <li key={contact.id}>
                            <Contact contact={contact} onDeleteButton={onDelete} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}