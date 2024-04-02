import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import toast, { Toaster } from "react-hot-toast";
import { addContact } from "../../redux/contacts/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

function ContactForm() {
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
        name: "",
        number: ""
    };

    const handleSubmit = (values, actions) => {
        dispatch(addContact(values))
            .then(unwrapResult)
            .then((originalPromiseResult) => {
                toast.success("Contact added successfully.");
            });
		actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
        >
            <Form className={css.container}>
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
                <button className={css.btn} type="submit">Add contact</button>
			</Form>
        </Formik>
    );
};

export default ContactForm;