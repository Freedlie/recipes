import {RecipesInterface} from "./recipes.interface";

export interface IngredientsInterface {
    products: Item[];
    offset: number;
    number: number;
    totalResults: number;
}

export interface Item {
    id: number;
    title: string;
    image: string;
}

export interface IIngredientsInitialState{
        products: Item[];
}

export interface IIngredientsParams {
    query: string;
}

export interface IIngredientsServices{
    products: Item[],
    "offset": number,
    "number": number,
    totalResults: number
}