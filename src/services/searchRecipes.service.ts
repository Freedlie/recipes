import {axiosInstance, AxiosRes} from "./axios";

import {RecipesInterface} from "../interfaces";
import {urls} from "../configs";

const searchRecipesService ={
    getSearchRecipes : (query:string, cuisine: string, diet:string, type: string, offset:number):AxiosRes<RecipesInterface>=>axiosInstance.get
    (`${urls.searchRecipes}${urls.auth.apiKey}&query=${query}&cuisine=${cuisine}&diet=${diet}&addRecipeInformation=true&instructionsRequired=true&type=${type}&offset=${offset}`)
}

export {searchRecipesService}

