import React, {FC} from 'react';

import css from './ComplexRecipe.module.css';

export interface IRecipeProps{
    recipe:{
        "id": number,
        "title": string,
        "image"?: string,
        "imageType": string,
        "readyInMinutes": number,
        "aggregateLikes": number,
        "type": string
    }
}

const ComplexRecipe:FC<IRecipeProps> = ({recipe}) => {
    return (
        <div className={css.recipeBlock}>
            <div className={css.recipeTitle}>
                {recipe.title}
            </div>
            <div className={css.blockImg}>
                <img src={recipe.image} alt="img"/>
            </div>
            <div>
                <div>
                    Time for preparing:{recipe.readyInMinutes}
                </div>
                <div>
                    liked by {recipe.aggregateLikes} people
                </div>
            </div>
        </div>
    );
};

export default ComplexRecipe;