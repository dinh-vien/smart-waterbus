import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Which wallet ticket the detail page shows. null means "the next departure".
export interface TicketsState {
  selectedTicketId: string | null
}

const initialState: TicketsState = { selectedTicketId: null }

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    selectTicket(state, action: PayloadAction<string>) {
      state.selectedTicketId = action.payload
    },
  },
})

export const { selectTicket } = ticketsSlice.actions
export default ticketsSlice.reducer
