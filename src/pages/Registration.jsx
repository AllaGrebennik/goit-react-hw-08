import PageTitle from "../components/PageTitle/PageTitle";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import Loader from "../components/Loader/Loader";
import { selectIsLoading } from "../redux/auth/selectors";
import { useSelector } from "react-redux";

function Register() {
    const isLoading = useSelector(selectIsLoading);
    return (
        <div>
            <PageTitle>Register your account</PageTitle>
            <RegistrationForm />
            {isLoading && <Loader />}
        </div>
    );
};

export default Register;