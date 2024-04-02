import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from "./Navigation.module.css";

const linkClassName = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
};

function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav>
            <NavLink className={linkClassName} to="/">
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink className={linkClassName} to="/contacts">
                    Contacts
                </NavLink>
            )}
        </nav>
    );
};

export default Navigation;