import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { resumeApi } from '../services/jsonApi'
// import resumeReducer from '../MyComponents/resumeSlice'

export const store = configureStore({
  reducer: {
    [resumeApi.reducerPath]:resumeApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(resumeApi.middleware),
})

setupListeners(store.dispatch)