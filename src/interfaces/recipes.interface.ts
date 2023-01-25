export interface RecipesInterface{
    "id": number,
    "title": string,
    "image"?: string,
    "imageType": string,
}

export interface IRecipeInitialState{
    recipes: RecipesInterface[]
}

export interface IRecipesServices{
    results: RecipesInterface[],
    "offset": number,
    "number": number,
    "totalResults": number
}

export interface IParams {
    query: string;
    cuisine: string;
}
