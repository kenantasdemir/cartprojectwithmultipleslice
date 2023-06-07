import {createSlice,nanoid} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        searchTerm:"",
        data:[]
    },
    reducers:{

        addItem(state,action){
            state.data.push({
                name:action.payload.name,
                description:action.payload.description,
                cost:action.payload.cost,
                id:nanoid()
            })
        },

        changeSearchTerm(state,action){
            state.searchTerm = action.payload
        },
        
        removeItem(state,action){
            const updatedItems = state.data.filter((item)=> item.id !== action.payload)
            state.data = updatedItems;
        }


    }
})

export const {addItem,removeItem,changeSearchTerm} = cartSlice.actions


export const cartReducer = cartSlice.reducer