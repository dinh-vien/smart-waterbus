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
  /** Display text, already in the active language. */
  status: string
  departTime: string
  departPier: string
  /** Short name without "Pier", e.g. "Bach Dang". */
  departShort: string
  departDistrict: string
  arriveTime: string
  arrivePier: string
  arriveShort: string
  arriveDistrict: string
  durationMins: number
  dateLabel: string
  passenger: string
  seat: string
  seatNote: string
  /** True for a window seat. */
  windowSeat: boolean
  /** True once the journey has been made. */
  completed: boolean
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
  voucherCredit: VoucherCredit[]
}

export interface ChatMessage {
  id: number
  from: 'user' | 'assistant'
  text: string
}
