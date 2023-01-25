import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {recipeReducer} from "./slices/complexSearch.slice";


const rootReducer = combineReducers({
    recipeReducer
})

const setUpStore = () => configureStore({
    reducer: rootReducer
})

const store = setUpStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export {store}