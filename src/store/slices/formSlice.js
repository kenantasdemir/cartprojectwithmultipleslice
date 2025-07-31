import {createSlice} from "@reduxjs/toolkit"
import { addCourse, addItem } from "./cartSlice"

const formSlice = createSlice({
    name:"form",
    initialState:{
        name:"",
        description:"",
        cost:0
    },
    reducers:{
        changeName(state,action){
            state.name = action.payload
        },
        changeDescription(state,action){
            state.description = action.payload
        },
        changeCost(state,action){
            state.cost = action.payload
        }
    },
    extraReducers(builder){
        builder.addCase(addItem,(state,action)=>{
            state.name = "";
            state.description = "";
            state.cost = "";
        })
    }
})
//EXTRA REDUCERS
//özellikle asenkron işlemleri (örneğin API çağrıları) veya başka slice'lardan gelen aksiyonları bir slice içinde yakalamak için kullanılır.
//extraReducers, slice dışı olayları dinlemek ve onlara tepki vermek için kullanılır. Özellikle API çağrıları gibi durumlarda oldukça kullanışlıdır.

export const {changeName,changeDescription,changeCost} = formSlice.actions

export const formReducer = formSlice.reducer
