import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle/PageTitle";
import LoginForm from "../components/LoginForm/LoginForm";
import Loader from "../components/Loader/Loader";
import { selectIsLoading } from "../redux/auth/selectors";
import { useSelector } from "react-redux";

function Login() {
    const isLoading = useSelector(selectIsLoading);
    return (
        <div>
            <PageTitle>Please log in</PageTitle>
            <LoginForm />
            <p>
                or <Link to="/register">register</Link>
            </p>
            {isLoading && <Loader />}
        </div>       
    );
};

export default Login;
