import {IRecipeInitialState, IRecipesServices,IParams} from "../../interfaces";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {searchRecipesService} from "../../services";

// interface MyKnownError {
//     errorMessage: string
// }

const initialState: IRecipeInitialState = {
    recipes: [],
    offset: 0,
    totalResults: 0
}

// @ts-ignore
export const getRecipes = createAsyncThunk<IRecipesServices,IParams, {rejectWithValue?: unknown}>(
    'complexSearch/getRecipes',
    async ({query,cuisine,diet,type,offset},{rejectWithValue})=>{
        try {
            const {data} = await searchRecipesService.getSearchRecipes(query,cuisine,diet,type,offset);
            return data
        }catch (e) {
            return rejectWithValue((e as AxiosError).message)
        }
    }
)

// export const getRecipes = createAsyncThunk<IRecipesServices,IParams,{
//     extra: {
//         jwt: string
//     },
//     rejectValue: MyKnownError
// }>('complexSearch/getRecipes',
// // @ts-ignore
//     async ({query,cuisine,diet,type},{rejectValue})=>{
//         try {
//             const {data} = await searchRecipesService.getSearchRecipes(query,cuisine,diet,type);
//             return data
//         }catch (e) {
//             return rejectValue((e as AxiosError).message)
//         }
//     }
//     )

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers:{
        incrementOffset: (state, action) => {
            state.offset += action.payload;
        },
        decrementOffset: (state, action) => {
            state.offset -= action.payload
            if (state.offset < 10) {
                state.offset = 0
            }
        },
        resetOffset:(state,action)=>{
            state.offset = 0
        },
    },
    extraReducers: builder => builder
        .addCase(getRecipes.fulfilled,(state, action)=>{
            state.recipes = action.payload.results;
            state.totalResults = action.payload.totalResults;
        })

})

const {
    reducer: recipeReducer, actions:{
        incrementOffset,decrementOffset,resetOffset
    }
} = searchSlice;

const searchActions = {
    getRecipes,
    incrementOffset,
    decrementOffset,
    resetOffset
}

export {recipeReducer,searchActions}



