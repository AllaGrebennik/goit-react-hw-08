import css from "./Error.module.css";

function ErrorMessage() {
    return (
        <div className={css.container}>
            <b>Oops! Error! Reload please!</b>
        </div>
    );
};

export default ErrorMessage;