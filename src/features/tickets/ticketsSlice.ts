import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Ticket } from './types'

export interface TicketsState {
  /** Which wallet ticket the detail page shows. null means "the next departure". */
  selectedTicketId: string | null
  /** Tickets booked in this session, newest first. */
  booked: Ticket[]
}

const initialState: TicketsState = { selectedTicketId: null, booked: [] }

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    selectTicket(state, action: PayloadAction<string>) {
      state.selectedTicketId = action.payload
    },
    /** Called when a payment completes: the new ticket becomes the one shown by default. */
    addBookedTicket(state, action: PayloadAction<Ticket>) {
      state.booked = [action.payload, ...state.booked.filter((t) => t.id !== action.payload.id)]
      state.selectedTicketId = action.payload.id
    },
  },
})

export const { selectTicket, addBookedTicket } = ticketsSlice.actions
export default ticketsSlice.reducer
