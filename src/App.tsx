import React, {useEffect} from 'react';
import {searchRecipesService} from "./services/searchRecipes.service";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import MainPage from "./pages/MainPage";

const App = () => {


    useEffect(()=>{
        searchRecipesService.getSearchRecipes('pasta','chinese').then(({data})=>{
            console.log(data);
        })
    })

    return (
        <div>
            <Routes>
                <Route path={''} element={<MainLayout/>}>
                    <Route index element={<MainPage/>} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;