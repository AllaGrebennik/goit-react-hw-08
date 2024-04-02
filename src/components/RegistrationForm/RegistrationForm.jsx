import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { toast, Toaster } from "react-hot-toast";
import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

function RegistrationForm() {
    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
        dispatch(register(values))
            .then(unwrapResult)
            .then((originalPromiseResult) => {
                actions.resetForm();
            })
            .catch((rejectedValueOrSerializedError) => {
                toast.error("An error occurred with registration.");
            });
    };
 
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                }}
                onSubmit={handleSubmit}
            >
                <Form className={css.form} autoComplete="off">
                    <label className={css.label}>
                        Username
                        <Field type="text" name="name" />
                    </label>
                    <label className={css.label}>
                        Email
                        <Field type="email" name="email" />
                    </label>
                    <label className={css.label}>
                        Password
                        <Field type="password" name="password" />
                    </label>
                    <button type="submit">Register</button>
                </Form>
            </Formik>
            <Toaster position="top-right" />
        </>
    );
};

export default RegistrationForm;