import React, {FC} from 'react';
import IngredientSearch from "../components/IngredientSearch/IngredientSearch";
import Ingredients from "../components/Ingredients/Ingredients";

const IngredientsPage:FC = () => {
    return (
        <div>
            <IngredientSearch/>
            <Ingredients/>
        </div>
    );
};

export default IngredientsPage;