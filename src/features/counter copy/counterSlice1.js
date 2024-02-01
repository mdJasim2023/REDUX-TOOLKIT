import { createSlice } from '@reduxjs/toolkit'
 const initialState = {
    count1:0
 }

 export const counterSlice1=createSlice({
        name:'counter1',
        initialState,
        reducers: {
            increment1:(state)=>{state.count1+=1},
            decrement1:(state)=>{state.count1-=1},
            reset1:(state)=>{state.count1=initialState.count1}
        }
 })

 export const {increment1,decrement1,reset1} = counterSlice1.actions;

 let counterReducer1 = counterSlice1.reducer;

 export default counterReducer1