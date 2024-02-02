import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todolist/todoSlice'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import {countriesApi} from './countriesApi'
export const store = configureStore({
  reducer: {
      counter:counterReducer,
      todolist:todoReducer,
      [countriesApi.reducerPath]: countriesApi.reducer,
},
middleware :(getDefaultMiddleware) => getDefaultMiddleware().concat(countriesApi.middleware)
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)