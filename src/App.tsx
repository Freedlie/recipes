import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import MainPage from "./pages/MainPage";
import css from './App.module.css'

const App = () => {

    return (
        <div className={css.all}>
            <Routes>
                <Route path={''} element={<MainLayout/>}>
                    <Route index element={<MainPage/>} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;