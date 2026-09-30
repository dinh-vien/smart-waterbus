export type DepartureStatus = 'On time' | 'Boarding' | 'Scheduled' | 'Twilight'

export type DepartureKind = 'transit' | 'sightseeing'

export interface Departure {
  id: string
  time: string
  status: DepartureStatus
  kind: DepartureKind
  /** Origin pier, or the tour name for sightseeing trips. */
  from: string
  to?: string
  vesselCode?: string
  /** Detail chips shown under the route, e.g. "12 min voyage". */
  details: string[]
  /** Line the departure runs on; used by the corridor filter. */
  line: 'line1' | 'line2' | 'sunset' | 'direct'
  priceVnd: number
}

export interface Pier {
  id: string
  name: string
  subtitle: string
  /** Position on the corridor map, in percent of the map canvas. */
  x: number
  y: number
  kind: 'hub' | 'stop' | 'terminus'
}

export interface Vessel {
  code: string
  status: string
  speedKmh: number
  nextPier: string
  /** Position on the corridor map, in percent of the map canvas. */
  x: number
  y: number
}

export interface CorridorMap {
  piers: Pier[]
  vessel: Vessel
}
