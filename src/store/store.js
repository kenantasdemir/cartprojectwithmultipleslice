import {configureStore} from "@reduxjs/toolkit"
import { formReducer } from "./slices/formSlice"
import { cartReducer } from "./slices/cartSlice"

export const store = configureStore({
    reducer:{
        form:formReducer,
        cartItems:cartReducer
    }
})