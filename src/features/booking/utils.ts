import { t } from '../../i18n'
import type { TripDetail } from '../trips/types'
import type { Seat, Voucher } from './types'

export interface BookingTotals {
  fareVnd: number
  discountVnd: number
  totalVnd: number
}

export function computeTotals(trip: TripDetail, voucher: Voucher | null): BookingTotals {
  const discountVnd = voucher ? Math.round((trip.fareVnd * voucher.percentOff) / 100) : 0
  return {
    fareVnd: trip.fareVnd,
    discountVnd,
    totalVnd: Math.max(trip.fareVnd - discountVnd, 0),
  }
}

/** "Seat A2 (Window)" or "Seat A2". */
export function seatLabel(seat: Seat | undefined, seatId: string): string {
  return seat?.window ? t('Seat {id} (Window)', { id: seatId }) : t('Seat {id}', { id: seatId })
}

/** "Portside Window", "Starboard Aisle"... */
export function seatPosition(seat: Seat | undefined): string {
  if (!seat) return t('Main Saloon')
  const side = seat.column === 'A' || seat.column === 'B' ? 'Portside' : 'Starboard'
  const kind = seat.window ? 'Window' : 'Aisle'
  return t(`${side} ${kind}`)
}

/** Mock booking reference, e.g. WB-2025-0842-A2. Real references will come from the backend. */
export function bookingReference(seatId: string): string {
  return `WB-2025-0842-${seatId}`
}
