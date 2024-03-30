import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

const Contact = ({ data: { id, name, number } }) => {
    const dispatch = useDispatch();
    const onDelete = () => dispatch(deleteContact(id));
    return (
        <>
            <div className={css.text}>
                <p>
                    <FaUser />
                    {name}
                </p>
                <p>
                    <BsFillTelephoneFill />
                    {number}
                </p>
            </div>
            <button className={css.btn} onClick={onDelete}>
                Delete
            </button>
        </>      
    );
};

export default Contact;