import React from 'react';
import ComplexSearch from "../components/ComplexSearch/ComplexSearch";
import ComplexRecipes from "../components/ComplexRecipes/ComplexRecipes";

const MainPage = () => {
    return (
        <div>
            <div>
                <ComplexSearch/>
                <ComplexRecipes/>
            </div>
        </div>
    );
};

export default MainPage;