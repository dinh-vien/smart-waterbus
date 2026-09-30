import { withDelay } from '../../../mocks/delay'
import {
  ALL_TICKETS,
  ASSISTANT_FALLBACK,
  ASSISTANT_REPLIES,
  MANAGE_BOOKING,
  TICKET_WALLET,
} from '../../../mocks/tickets'
import type { ManageBooking, Ticket, TicketWallet } from '../types'

// Mock service layer: swap for real API calls later without touching the UI.
export function getTicketWallet(): Promise<TicketWallet> {
  return withDelay(TICKET_WALLET)
}

/** Falls back to the next departure so the detail page never errors. */
export function getTicket(id: string | null): Promise<Ticket> {
  return withDelay(ALL_TICKETS.find((t) => t.id === id) ?? TICKET_WALLET.next)
}

export function getManageBooking(): Promise<ManageBooking> {
  return withDelay(MANAGE_BOOKING)
}

export function askAssistant(message: string): Promise<string> {
  return withDelay(ASSISTANT_REPLIES[message] ?? ASSISTANT_FALLBACK, 500)
}

/** Pretends to submit a refund request. Always accepted so the flow never gets stuck. */
export function requestRefund(
  bookingCode: string,
): Promise<{ bookingCode: string; status: 'submitted' }> {
  return withDelay({ bookingCode, status: 'submitted' as const }, 500)
}
