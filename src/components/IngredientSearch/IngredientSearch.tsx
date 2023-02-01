import React, {FC, useEffect, useState} from 'react';
import css from "../ComplexSearch/ComplexSearch.module.css";
import {useAppDispatch} from "../../hooks";
import {getIngredients} from "../../redux";

const IngredientSearch:FC = () => {

    const dispatch = useAppDispatch();

    const [query,setQuery] =useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(getIngredients({query}))
    };

    return (
        <div className={css.ComplexSearchContainer}>
            <form className={css.form} onSubmit={handleSubmit}>
                <div>
                    <input className={css.input}
                           type="text"
                           name="query"
                           placeholder="Search recipes..."
                           value={query}
                           onChange={(e)=> {
                               setQuery(e.target.value)
                           }}
                    />
                    <button className={css.submit} type="submit">Search</button>
                </div>
            </form>
        </div>
    );
};

export default IngredientSearch;