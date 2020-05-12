import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            {
                props.errorMessage && <div className={s.error}>Global Error</div>
            }


            <img className={s.logo} src="https://s1.logaster.com/static/v3/img/products/logo.png" alt=""/>
            <div className={s.auth}>
                { props.isAuth
                    ? (
                        <div>
                            <div>{props.login}</div>
                            <button onClick={props.logout}>Log out</button>
                        </div>
                    )
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;