import { configureStore } from '@reduxjs/toolkit'
import bookingReducer from '../features/booking/bookingSlice'

// Feature slices are registered here as their branches land.
export const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
