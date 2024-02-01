import { configureStore } from "@reduxjs/toolkit";
import counterReducer1 from '../features/counter copy/counterSlice1'
import todoReducer from "../features/todolist/todolistSlice";
import counterReducer from "../features/counter/counterSlice";
export const store = configureStore({
    reducer:{ 
        c:counterReducer,
        t:todoReducer,
        c1:counterReducer1
    }, 
})