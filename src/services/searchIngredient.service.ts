import {axiosInstance, AxiosRes} from "./axios";
import {RecipesInterface} from "../interfaces";
import {urls} from "../configs";

const searchIngredientService = {
    getIngredients:(query:string):AxiosRes<RecipesInterface>=>axiosInstance.get(`${urls.ingredients}${urls.auth.apiKey}&query=${query}`)
}

export {searchIngredientService}