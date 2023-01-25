import React, {FC, FormEvent} from 'react';

import css from './ComplexSearch.module.css';
import {getRecipes} from "../../redux";
import {useAppDispatch} from "../../hooks";

interface FormValues {
    query: string;
    cuisine: string;
}

const ComplexSearch:FC = () => {


    const dispatch = useAppDispatch();

    const handleSubmit = (event:FormEvent<HTMLFormElement>,) => {
        event.preventDefault();

        // @ts-ignore
        console.log(event.currentTarget.elements[0].value);
        // console.log(event.currentTarget.elements[1].value);
        // const query = event.currentTarget.elements[0].value
        // const cuisine = event.target.cuisine.value;

        // @ts-ignore
        const query = event.currentTarget.elements[0].value
        // @ts-ignore
        const cuisine = event.currentTarget.elements[1].value
        dispatch(getRecipes({query, cuisine}))
    }

    // const [searchTerm,setSearchTerm] = useState('')
    // console.log(searchTerm);
    return (
        // <div className={css.ComplexSearchContainer}>
        //     <div className={css.form}>
        //         <input className={css.input} value={searchTerm} type="text" placeholder='search recipes...' onChange={(e)=> setSearchTerm(e.target.value)}/>
        //         <button className={css.submit}>Search</button>
        //     </div>
        // </div>
        <div className={css.ComplexSearchContainer}>
            <form onSubmit={handleSubmit} className={css.form}>
                <input
                    type="text"
                    name="query"
                    placeholder="Search recipes..."
                />
                <select name="cuisine">
                    <option value="italian">Italian</option>
                    <option value="mexican">Mexican</option>
                    <option value="chinese">Chinese</option>
                </select>
                <button type="submit">Search</button>
            </form>
        </div>

    );
}

export default ComplexSearch;