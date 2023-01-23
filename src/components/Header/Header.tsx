import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.headerContainer}>
            <div className={css.logo}>
                <img src="../../public/IMG_0616.JPG" alt="logo"/>
            </div>
            <div className={css.link}>
                <NavLink to={''}><span className={css.text}>Recipes</span></NavLink>
            </div>
        </div>
    );
};

export default Header;