import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import AllRecipes from '../pages/AllRecipes'
import RecipeDetail from '../pages/RecipeDetail'
import ErrorPage from "./ErrorPage";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="recipes" element={<AllRecipes />} />
            <Route path="recipes/:slug" element={<RecipeDetail />} />
            <Route path="*" element={<ErrorPage />} />
           
        </Routes>
    )
}

export default Router