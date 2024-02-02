import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    count:0
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers :{
        increment:(state,action)=>{
            state.count++
        },
        decrement:(state,action)=>{
            state.count--
        }
    }
})

export const {increment,decrement}  = counterSlice.actions;
let counterReducer = counterSlice.reducer
export default counterReducer