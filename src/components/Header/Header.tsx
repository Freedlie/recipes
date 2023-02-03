import React, {FC, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';
// @ts-ignore
import img from './IMG_0616.jpg';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {searchActions} from "../../redux";

const Header:FC = () => {

    const [lastScroll, setLastScroll] = useState(0);
    const [hidden, setHidden] = useState(false);

    const {offset} = useAppSelector(state => state.recipeReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        let scroll = window.scrollY;
        if (scroll > lastScroll && scroll > 500) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setLastScroll(scroll);
    }
    return (
        <div className={hidden ? css.hidden : css.headerContainer}>
            <div className={css.logo}>
                <img className={css.logoImg} src={img} alt="logo"/>
            </div>
            <div className={css.link}>
                <NavLink to={''}><span className={css.text}>Recipes</span></NavLink>
                <NavLink to={'/IngredientsPage'}><span className={css.text}>Ingredients</span></NavLink>
            </div>
        </div>
    );
};

export default Header;