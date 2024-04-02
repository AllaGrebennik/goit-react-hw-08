import { Formik, Form, Field } from "formik";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

function LoginForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values))
            .then(unwrapResult)
            .then((originalPromiseResult) => {
                actions.resetForm();
            })
            .catch((rejectedValueOrSerializedError) => {
                toast.error("An error occurred with log in.");
            });
    };

    return (
        <>
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            onSubmit={handleSubmit}
        >
            <Form className={css.form} autoComplete="off">
                <label className={css.label}>
                    Email
                    <Field type="email" name="email" />
                </label>
                <label className={css.label}>
                    Password
                    <Field type="password" name="password" />
                </label>
                <button type="submit">Log In</button>
            </Form>
        </Formik>
        <Toaster position="top-right" />
        </>
    );
};

export default LoginForm;