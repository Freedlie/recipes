import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {searchIngredientService, searchRecipesService} from "../../services";
import {
    IIngredientsInitialState,
    IIngredientsParams,
    IIngredientsServices,
} from "../../interfaces/ingredients.interface";



const initialState: IIngredientsInitialState = {
        products: [],
}

// @ts-ignore
export const getIngredients = createAsyncThunk<IIngredientsServices,IIngredientsParams, {rejectWithValue?: unknown}>(
    'IngredientsSlice/getIngredients',
    async ({query},{rejectWithValue})=>{
        try {
            const {data} = await searchIngredientService.getIngredients(query);
            return data
        }catch (e) {
            return rejectWithValue((e as AxiosError).message)
        }
    }
)

// // @ts-ignore
// export const getRecipeDetails = createAsyncThunk<InformationInterface,IGetDetailsParams, {rejectWithValue?: unknown}>(
//     'complexSearch/getRecipeDetails',
//     async ({id},{rejectWithValue})=>{
//         try{
//             const {data} = await searchRecipesService.getRecipeByID(id);
//             return data;
//         } catch (e) {
//             return rejectWithValue((e as AxiosError).message)
//         }
//
//     }
// )

const IngredientsSlice = createSlice({
    name: 'IngredientsSlice',
    initialState,
    reducers:{},
    extraReducers: builder => builder
        .addCase(getIngredients.fulfilled,(state, action)=>{
            state.products = action.payload.products;
        })

})

const {
    reducer: ingredientReducer, actions:{
    }
} = IngredientsSlice;

const IngredientsActions = {
    getIngredients
}

export {ingredientReducer,IngredientsActions}



