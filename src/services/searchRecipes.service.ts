import {axiosInstance, AxiosRes} from "./axios";

import {RecipesInterface} from "../interfaces";
import {urls} from "../configs";

const searchRecipesService ={
    getSearchRecipes : (query:string, cuisine: string):AxiosRes<RecipesInterface>=>axiosInstance.get(`${urls.searchRecipes}${urls.auth.apiKey}&query=${query}&cuisine=${cuisine}`)
}

export {searchRecipesService}

