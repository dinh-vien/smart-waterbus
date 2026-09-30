import { bookingReference, seatPosition } from '../booking/utils'
import type { PassengerForm, Seat } from '../booking/types'
import type { TripDetail } from '../trips/types'
import type { Ticket } from './types'

interface BuildTicketInput {
  trip: TripDetail
  seat: Seat | undefined
  seatId: string
  passenger: PassengerForm
  totalVnd: number
}

/** Turns the finished booking into a wallet ticket (mock: the backend will issue the real one). */
export function buildBookedTicket({
  trip,
  seat,
  seatId,
  passenger,
  totalVnd,
}: BuildTicketInput): Ticket {
  const bookingRef = bookingReference(seatId)
  return {
    id: `tkt-${trip.id}-${seatId.toLowerCase()}`,
    tripCode: trip.vesselCode,
    lineName: `Smart Waterbus • ${trip.lineLabel}`,
    routeTag: 'Central Route',
    bookingRef,
    ticketCode: `TKT-${trip.vesselCode.replace('-', '')}-0842-${seatId}`,
    status: 'Confirmed',
    departTime: trip.departTime,
    departPier: trip.originPierName,
    departDistrict: trip.originDistrict,
    arriveTime: trip.arriveTime,
    arrivePier: trip.destinationPierName,
    arriveDistrict: trip.destinationDistrict,
    durationMins: trip.durationMins,
    dateLabel: `${trip.dateLabel.replace(/^[A-Za-z]+, /, '')}, 2025`,
    passenger: passenger.fullName,
    seat: `Seat ${seatId}`,
    seatNote: `${seatPosition(seat)} • Main Deck`,
    fareVnd: totalVnd,
    vesselNote: `${trip.vesselName} ${trip.vesselCode}`,
    gate: trip.originGate,
  }
}
