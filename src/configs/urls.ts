const baseURL = process.env.REACT_APP_API
const apiKey = process.env.REACT_APP_TOKEN

const urls = {
    searchRecipes:'/complexSearch',
    findByNutrients:'/findByNutrients',
    findByIngredients: '/findByIngredients',
    information:'/information',
    similar:'/similar',
    random:'/random',
    autocomplete:'./autocomplete',
    ingredientsById:'/ingredientWidget.json',
    auth:{
        apiKey: '?apiKey=' + apiKey
    }
}

export {
    baseURL,
    urls
}