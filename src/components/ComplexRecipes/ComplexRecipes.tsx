import React, {FC} from 'react';
import {useAppSelector} from "../../hooks";
import ComplexRecipe from "../ComplexRecipe/ComplexRecipe";
import css from './ComplexRecipes.module.css'

const ComplexRecipes:FC = () => {
        const {recipes} = useAppSelector(state => state.recipeReducer)
    return (
        <div>
            <div className={css.recipesWrapper}>
                {recipes.map((recipe)=> <ComplexRecipe key={recipe.id} recipe={recipe}/>)}
            </div>
        </div>
    );
};

export default ComplexRecipes;