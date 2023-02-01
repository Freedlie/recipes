import React, {FC} from 'react';
import {useAppSelector} from "../../hooks";
import Ingredient from "../Ingredient/Ingredient";

const Ingredients:FC = () => {

    const {products} = useAppSelector(state => state.ingredientReducer);

    console.log(!products)

    return (
        <div>
            {products.map((ingredient)=> <Ingredient key={ingredient.id} ingredient={ingredient}/>)}
        </div>
    );
};

export default Ingredients;