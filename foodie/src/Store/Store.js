import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../OrderSlice/CartSlice"
export const store = configureStore({
    // reducer: {cart:cartReducer}
    reducer:cartReducer
})