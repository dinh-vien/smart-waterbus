import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { DEFAULT_SEARCH_QUERY } from '../../mocks/tripSearch'
import type { SearchQuery } from '../trips/types'

// Client-side booking state shared by the booking pages. Every field has a default,
// so any page still renders when opened directly by URL.
export interface BookingState {
  query: SearchQuery
  selectedTripId: string | null
}

export const DEFAULT_TRIP_ID = 'wb-01'

const initialState: BookingState = {
  query: DEFAULT_SEARCH_QUERY,
  selectedTripId: null,
}

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<Partial<SearchQuery>>) {
      state.query = { ...state.query, ...action.payload }
    },
    selectTrip(state, action: PayloadAction<string>) {
      state.selectedTripId = action.payload
    },
  },
})

export const { setQuery, selectTrip } = bookingSlice.actions
export default bookingSlice.reducer
