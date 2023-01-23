import React, {useState} from 'react';

import css from './ComplexSearch.module.css';

const ComplexSearch = () => {

    const [searchTerm,setSearchTerm] = useState('')
    console.log(searchTerm);
    return (
        <div className={css.ComplexSearchContainer}>
            <div className={css.form}>
                <input className={css.input} value={searchTerm} type="text" placeholder='search recipes...' onChange={(e)=> setSearchTerm(e.target.value)}/>
                <button className={css.submit}>Search</button>
            </div>
        </div>
    );
};

export default ComplexSearch;