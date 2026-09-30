import type { TripDetail } from '../trips/types'
import type { Seat, Voucher } from './types'

export interface BookingTotals {
  fareVnd: number
  discountVnd: number
  totalVnd: number
}

export function computeTotals(trip: TripDetail, voucher: Voucher | null): BookingTotals {
  const discountVnd = voucher?.discountVnd ?? 0
  return {
    fareVnd: trip.fareVnd,
    discountVnd,
    totalVnd: Math.max(trip.fareVnd - discountVnd, 0),
  }
}

export function seatLabel(seat: Seat | undefined, seatId: string): string {
  return seat?.window ? `Seat ${seatId} (Window)` : `Seat ${seatId}`
}

export function seatPosition(seat: Seat | undefined): string {
  if (!seat) return 'Main Saloon'
  const side = seat.column === 'A' || seat.column === 'B' ? 'Portside' : 'Starboard'
  return `${side} ${seat.window ? 'Window' : 'Aisle'}`
}
