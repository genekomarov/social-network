import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><a href="">Profile</a></li>
                <li className={s.active}><a href="">Massages</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Music</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;