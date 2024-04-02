import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const linkClassName = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
};

function AuthNav() {
    return (
        <div>
            <NavLink className={linkClassName} to="/register">
                Register
            </NavLink>
            <NavLink className={linkClassName} to="/login">
                Log In
            </NavLink>
        </div>
    );
};

export default AuthNav;