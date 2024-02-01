import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0
}
export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers : {
        inc:(state)=>{state.count++},
        dec:(state)=>{state.count--},
        res:(state)=>{state.count=initialState.count}
    }
})

export const {inc , dec , res} = counterSlice.actions;
let counterReducer = counterSlice.reducer

export default counterReducer