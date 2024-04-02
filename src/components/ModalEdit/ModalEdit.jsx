import Modal from 'react-modal'
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { updateContact } from "../../redux/contacts/operations";
import css from "./ModalEdit.module.css";

Modal.setAppElement("#root");
    
const ModalEdit = ({ isOpen, onClose, id, name, number }) => {
    const dispatch = useDispatch();
    const nameFieldId = useId();
    const numberFieldId = useId();

    const ContactSchema = Yup.object().shape({
        name:
            Yup.string()
                .min(3, "Too Short!")
                .max(50, "Too Long!")
                .required("Required"),
        number:
            Yup.string()
                .min(3, "Too Short!")
                .max(50, "Too Long!")
                .required("Required")
    });
    
    const initialValues = {
        id,
        name,
        number,
    };

    const onUpdate = (values, actions) => {
        console.log(values);
        console.log(actions);
        dispatch(updateContact(values))
            .then(unwrapResult)
            .then((originalPromiseResult) => {
                toast.success("Contact updated successfully.");
            });
        onClose();
    };

    return (
        <Modal
            className={css.container}
            isOpen={isOpen}
            onRequestClose={onClose}
        >
            <div className={css.wrapper}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={ContactSchema}
                    onSubmit={onUpdate}
                >
                    <Form className={css.box}>
                        <div className={css.input}>
                            <label className={css.label} htmlFor={nameFieldId}>Name</label>
                            <Field className={css.field} type="text" name="name" id={nameFieldId} />
                            <ErrorMessage name="name" as="span" />
                        </div>
                        <div className={css.input}>
                            <label className={css.label} htmlFor={numberFieldId}>Number</label>
                            <Field className={css.field} type="text" name="number" id={numberFieldId} />
                            <ErrorMessage name="number" as="span" />
                        </div>
                        <button className={css.btn} type="submit">Update contact</button>
                    </Form>
                </Formik>
            </div>
        </Modal>
    );
};

export default ModalEdit;