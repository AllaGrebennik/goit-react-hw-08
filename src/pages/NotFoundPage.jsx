import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <>
            <p>Oops! Page not found!</p>
            <Link to="/">Back to home page!</Link>
        </>  
    );
};

export default NotFoundPage;