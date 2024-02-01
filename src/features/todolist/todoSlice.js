import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:[]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addtask:(state,action)=>{
            state.todos.push(action.payload)
        },
        deltask:(state,action)=>{
            let temp = [...state.todos];
            temp.splice(action.payload.index,1);
            state.todos = [...temp]
        },
        taskDone:(state)=>{
            console.log('JASIM');
            state.todos.dn=true;
        }
    }
})

export const {addtask , deltask } = todoSlice.actions;
let todoReducer = todoSlice.reducer;
export default todoReducer