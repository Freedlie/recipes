import React, {FC} from 'react';

export interface IStepProps{
    step :{
        equipment: []
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
    return (
        <div>
            <div>
                <span>Step </span>{step.number}
            </div>
            <div>
                {step.length && <div>
                    {step.length.number} {step.length.unit} for this step
                </div>}
            </div>
            <div>
                ingredients: {step.ingredients.map((ingredient)=>ingredient.name)}
            </div>
            <div>
                {step.step}
            </div>
        </div>
    );
};

export default StepInstruction;