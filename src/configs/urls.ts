const baseURL = process.env.REACT_APP_API
const apiKey = process.env.REACT_APP_TOKEN

const urls = {
    searchRecipes:'recipes/complexSearch',
    findByNutrients:'recipes/findByNutrients',
    findByIngredients: 'recipes/findByIngredients',
    information:'/information',
    similar:'recipes/similar',
    random:'recipes/random',
    autocomplete:'.recipes/autocomplete',
    ingredientsById:'/ingredientWidget.json',
    ingredients: '/food/products/search',
    auth:{
        apiKey: '?apiKey=' + apiKey
    }
}

export {
    baseURL,
    urls
}