import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos:[]
}

export const todoSlice = createSlice({
    name:'todolist',
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            state.todos.push(action.payload)
        },
        deleteItem:(state,action)=>{
            let temp=[...state.todos]
            temp.splice(action.payload.index,1)
            state.todos=[...temp]
        }
    }
})

export const {addtodo , deleteItem  } = todoSlice.actions
let todoReducer = todoSlice.reducer

export default todoReducer