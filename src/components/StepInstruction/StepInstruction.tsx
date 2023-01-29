import React, {FC} from 'react';

import css from './StepInstruction.module.css';

export interface IStepProps{
    step :{
        equipment: [
            {
                image?: string
            }
        ]
        ingredients: [
            { name: string }
        ]
        length?: {
            number: number
            unit: string
        }
        number: number
        step: string
    }

}


const StepInstruction:FC<IStepProps> = ({step}) => {
    // console.log(step.equipment[0].image);
    return (
        <div className={css.wrapper}>
            <div className={css.mainTxt}>
                <div className={css.centerText}>
                    <span>Step </span>{step.number}
                </div>
                {step.length && <div>
                    {step.length.number} {step.length.unit} for this step
                </div>}
            </div>

            <div>
                ingredients: {step.ingredients.map((ingredient)=>ingredient.name)}
            </div>
            <div className={css.step}>
                {step.step}
            </div>
        </div>
    );
};

export default StepInstruction;