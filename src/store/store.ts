import { configureStore } from '@reduxjs/toolkit'

// Feature slices (booking flow, etc.) are registered here as their branches land.
export const store = configureStore({
  reducer: {},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
