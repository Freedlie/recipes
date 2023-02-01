import React, {FC} from 'react';
import css from './Ingredient.module.css';

export interface IProps{
    ingredient:{
        id: number;
        title: string;
        image: string;
    }
}

const Ingredient:FC<IProps> = ({ingredient}) => {

    return (
        <div className={css.wrapper}>
            <div className={css.ingredientBlock}>
                <div className={css.ingredientTitle}>{ingredient.title}</div>
                <div>
                    <img className={css.ingredientImage} src={ingredient.image} alt="ingredientImg"/>
                </div>
            </div>
        </div>

    );
};

export default Ingredient;