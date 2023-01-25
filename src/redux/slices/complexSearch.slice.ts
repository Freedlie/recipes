import {IRecipeInitialState, IRecipesServices,IParams} from "../../interfaces";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {searchRecipesService} from "../../services";

const initialState: IRecipeInitialState = {
    recipes: []
}

// @ts-ignore
export const getRecipes = createAsyncThunk<IRecipesServices,IParams, {rejectWithValue:boolean}>(
    'complexSearch/getRecipes',
    async ({query,cuisine,diet,type},{rejectWithValue})=>{
        try {
            const {data} = await searchRecipesService.getSearchRecipes(query,cuisine,diet,type);
            return data
        }catch (e) {
            return rejectWithValue((e as AxiosError).message)
        }
    }
)

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers:{},
    extraReducers: builder => builder
        .addCase(getRecipes.fulfilled,(state, action)=>{
            state.recipes = action.payload.results;
        })
})

const {
    reducer: recipeReducer, actions:{

    }
} = searchSlice;

const searchActions = {
    getRecipes
}

export {recipeReducer,searchActions}


