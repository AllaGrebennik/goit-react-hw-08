import Modal from 'react-modal'
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./ModalDelete.module.css";

Modal.setAppElement("#root");
    
const ModalDelete = ({ isOpen, onClose, id, name }) => {
    const dispatch = useDispatch();
    const onDelete = () => {
        dispatch(deleteContact(id))
            .then(unwrapResult)
            .then((originalPromiseResult) => {
                toast.success("Contact deleted successfully.");
            })
        onClose();
    };
 
    return (
        <Modal
            className={css.container}
            isOpen={isOpen}
            onRequestClose={onClose}
        >
            <div className={css.wrapper}>
                <p>Delete contact: </p>
                <p>{name} ???</p>
                <button className={css.btn} onClick={onDelete}>
                    Yes, delete!
                </button>
            </div>
        </Modal>
    );
};

export default ModalDelete;