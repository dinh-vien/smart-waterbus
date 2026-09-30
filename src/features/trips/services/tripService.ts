import { withDelay } from '../../../mocks/delay'
import {
  BOARDING_STEPS,
  DATE_OPTIONS,
  NETWORK_ROUTES,
  ONBOARD_AMENITIES,
  PIER_OPTIONS,
  TRIPS,
} from '../../../mocks/tripSearch'
import { addMinutes } from '../../../utils/time'
import { formatDateLabel, stripDistrictSuffix } from '../utils'
import type { DateOption, NetworkRoute, PierOption, SearchQuery, Trip, TripDetail } from '../types'

// Mock service layer: swap for real API calls later without touching the UI.
export function getPierOptions(): Promise<PierOption[]> {
  return withDelay(PIER_OPTIONS)
}

export function getNetworkRoutes(): Promise<NetworkRoute[]> {
  return withDelay(NETWORK_ROUTES)
}

export function getDateOptions(): Promise<DateOption[]> {
  return withDelay(DATE_OPTIONS)
}

/** Results ignore the pier pair in this mock; the same day's departures are always returned. */
export function getTrips(query: SearchQuery): Promise<Trip[]> {
  void query
  return withDelay(TRIPS)
}

const findPier = (id: string) => PIER_OPTIONS.find((p) => p.id === id) ?? PIER_OPTIONS[0]

/** Falls back to the first trip and the default piers, so the page never errors. */
export function getTripDetail(tripId: string | null, query: SearchQuery): Promise<TripDetail> {
  const trip = TRIPS.find((t) => t.id === tripId) ?? TRIPS[0]
  const origin = findPier(query.originId)
  const destination = findPier(query.destinationId)
  const date = DATE_OPTIONS.find((d) => d.id === query.dateId) ?? DATE_OPTIONS[2]

  const detail: TripDetail = {
    ...trip,
    originPierLabel: origin.name,
    destinationPierLabel: destination.name,
    originPierName: stripDistrictSuffix(origin.name),
    destinationPierName: stripDistrictSuffix(destination.name),
    originDistrict: origin.subtitle.split(' •')[0].replace(/ Terminal$/, ''),
    destinationDistrict: destination.subtitle.split(' •')[0].replace(/ Waterfront$/, ''),
    dateLabel: formatDateLabel(date),
    timeline: [
      {
        time: addMinutes(trip.departTime, -15),
        title: `Arrive at ${origin.shortName} Pier`,
        description:
          'Plan to arrive at the terminal pier a few minutes before scheduled departure.',
        tone: 'teal',
      },
      {
        time: addMinutes(trip.departTime, -5),
        title: 'Boarding',
        description: 'Vessel boarding begins for ticketed passengers.',
        tone: 'amber',
      },
      {
        time: trip.departTime,
        title: 'Departure',
        description: `${trip.vesselCode} departs ${origin.shortName} Pier across the river corridor.`,
        tone: 'teal',
      },
      {
        time: trip.arriveTime,
        title: `Arrival at ${destination.shortName} Pier`,
        description: `Scheduled docking at ${destination.shortName} Pier.`,
        tone: 'dark',
      },
    ],
    amenityDetails: ONBOARD_AMENITIES,
    boardingSteps: BOARDING_STEPS.map((s) => ({
      ...s,
      description: s.description.replace('{origin}', `${origin.shortName} Pier`),
    })),
  }
  return withDelay(detail)
}
