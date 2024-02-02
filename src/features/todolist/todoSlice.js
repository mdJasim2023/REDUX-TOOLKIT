import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:['Ram Naidu','JasiM','Angel']
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addtask:(state,action)=>{
            state.todos.push(action.payload)
        },
        delTodo:(state,action)=>{
            state.todos.splice(action.payload,1)
        }
    }
})

export const {addtask,delTodo} = todoSlice.actions;

let todoReducer = todoSlice.reducer

export default todoReducer