import React, {FC} from 'react';
import {Measures} from "../../interfaces";
import css from './ingredientFromRecipeDetails.module.css';

export interface IIngredientProps{
    ingredient:{
        aisle?: string;
        amount?: number;
        consistency?: string;
        id?: number;
        image?: string;
        measures?: Measures;
        meta?: string[];
        nameClean?: string
        name?: string;
        original?: string;
        originalName?: string;
        unit?: string;
    }

}

const IngredientFromRecipeDetails:FC<IIngredientProps> = ({ingredient}) => {

    console.log(ingredient.image);

    return (
        <div>
            <div className={css.block}>
                <div className={css.name}>
                    <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt="imgIngredient"/>
                    {ingredient.nameClean}</div>
                <div className={css.inf}>{ingredient.original? ingredient.original: '...'}</div>
            </div>
        </div>
    );
};

export default IngredientFromRecipeDetails;