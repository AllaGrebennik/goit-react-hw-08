import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contactsSlice";
import Contact from '../Contact/Contact';
import css from "./ContactList.module.css";

function ContactList() {
    const contacts = useSelector(selectVisibleContacts);

    return (
        <ul className={css.list}>
            {contacts.map((contact) => (
                <li className={css.item} key={contact.id}>
                    <Contact data={contact} />
                </li>
            ))}
        </ul>
    );
};

export default ContactList;