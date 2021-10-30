import { combineReducers, configureStore, EnhancedStore } from "@reduxjs/toolkit";
import Counting from "./ults/slice"
export const rootReducer = combineReducers({
    counting: Counting
});

export const createStore = (initialState?: RootState) : EnhancedStore =>{
    return configureStore({
        reducer: rootReducer
    })
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;