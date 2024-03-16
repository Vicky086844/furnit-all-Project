import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Feature/AuthSlice"
export const store = configureStore({
    // reducer: {cart:cartReducer}
    reducer:cartReducer
})