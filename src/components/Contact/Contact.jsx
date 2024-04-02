import { useState, useEffect } from 'react';
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import ModalDelete from '../ModalDelete/ModalDelete';
import ModalEdit from '../ModalEdit/ModalEdit';
import css from "./Contact.module.css";

const Contact = ({ data: { id, name, number } }) => {
    const [isModalDelete, setIsModalDelete] = useState(false);
    const [isModalEdit, setIsModalEdit] = useState(false);

    const onModalDelete = () => setIsModalDelete(true);
    const offModalDelete = () => setIsModalDelete(false);
    const onModalEdit = () => setIsModalEdit(true);
    const offModalEdit = () => setIsModalEdit(false);

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
            <div className={css.btnbox}>
                <button className={css.btn} onClick={onModalEdit}>
                    Edit
                </button>        
                <button className={css.btn} onClick={onModalDelete}>
                    Delete
                </button>
            </div>
            <ModalEdit isOpen={isModalEdit} onClose={offModalEdit} id={id} name={name} number={number} />
            <ModalDelete isOpen={isModalDelete} onClose={offModalDelete} id={id} name={name} />
        </>      
    );
};

export default Contact;