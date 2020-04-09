import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={s.active}>Massages</NavLink></li>
                <li><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
                <li><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
                <li>&nbsp;</li>
                <li><NavLink to="/users" activeClassName={s.active}>Find users</NavLink></li>
                <li>&nbsp;</li>
                <li><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;