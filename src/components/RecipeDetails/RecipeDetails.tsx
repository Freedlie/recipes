import React, {FC} from 'react';
import {useAppSelector} from "../../hooks";
import IngredientFromRecipeDetails from "../ingredientFromRecipeDetails/IngredientFromRecipeDetails";
import css from './RecipeDetails.module.css';
import StepInstruction from "../StepInstruction/StepInstruction";


const RecipeDetails:FC = () => {
    const {recipeDetails} = useAppSelector(state => state.recipeReducer);

    console.log(recipeDetails.analyzedInstructions[0].steps);

    return (
        <div className={css.wrapper}>
            <div className={css.rowMain}>
                <div>
                    <h2>{recipeDetails.title}</h2>
                    <p className={css.instruction}>{recipeDetails.instructions}</p>
                </div>
                <div>
                    <img className={css.img} src={recipeDetails.image} alt=""/>
                </div>
            </div>
            <div className={css.stepByStep}>
                {recipeDetails.analyzedInstructions[0].steps.map((step:any)=> <StepInstruction step={step} key={step.number}/>)}
            </div>
            <div dangerouslySetInnerHTML={{__html:recipeDetails.summary}}/>
            {/*<div className={css.ingredientBlock}>*/}
            {/*    <p className={(css.p)}>ingredients:</p>*/}
            {/*    {recipeDetails.extendedIngredients.map((ingredient)=> <IngredientFromRecipeDetails key={ingredient.id} ingredient={ingredient}/>)}*/}
            {/*</div>*/}
        </div>
    );
};

export default RecipeDetails;