import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feautures/counter/counterSlice'
import todoReducer from '../feautures/todolist/todoSlice'


export const store = configureStore({
    reducer:{
        counter:counterReducer,
        todolist:todoReducer
    }
})