import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(),
})

setupListeners(store.dispatch)