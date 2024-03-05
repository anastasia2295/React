import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ul-slice";
import cartSlice from "./card-slice";

const store = configureStore({
    reducer: { 
        ui: uiSlice.reducer,
        cart: cartSlice.reducer
    
    }
})
export default store