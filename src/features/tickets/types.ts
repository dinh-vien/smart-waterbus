export type TicketStatus = 'Confirmed' | 'Completed'

export interface Ticket {
  id: string
  /** Vessel/trip code, e.g. "WB-01". */
  tripCode: string
  lineName: string
  /** Short label next to the trip code, e.g. "Return Route". */
  routeTag: string
  bookingRef: string
  /** Code encoded in the boarding QR. */
  ticketCode: string
  status: TicketStatus
  departTime: string
  departPier: string
  departDistrict: string
  arriveTime: string
  arrivePier: string
  arriveDistrict: string
  durationMins: number
  dateLabel: string
  passenger: string
  seat: string
  seatNote: string
  fareVnd: number
  vesselNote: string
  gate: string
}

export interface TicketWallet {
  next: Ticket
  later: Ticket[]
  past: Ticket[]
}

export interface VoucherCredit {
  code: string
  description: string
  valueVnd: number
}

export interface ManageBooking {
  bookingCode: string
  ticket: Ticket
  alternative: { departTime: string; arriveTime: string; route: string; note: string }
  voucherCredit: VoucherCredit[]
}

export interface ChatMessage {
  id: number
  from: 'user' | 'assistant'
  text: string
}
