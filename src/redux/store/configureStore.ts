import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartReducers from "../reducers/cartReducer.ts";

const rootReducer = combineReducers({
    cart: cartReducers
})
export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>