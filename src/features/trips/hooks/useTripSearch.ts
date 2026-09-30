import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { useFetch } from '../../../hooks'
import { selectTrip, setQuery } from '../../booking/bookingSlice'
import {
  getDateOptions,
  getNetworkRoutes,
  getPierOptions,
  getTripDetail,
  getTrips,
} from '../services/tripService'
import type { SearchQuery } from '../types'

export function useSearchQuery() {
  const dispatch = useAppDispatch()
  const query = useAppSelector((s) => s.booking.query)
  return { query, updateQuery: (patch: Partial<SearchQuery>) => dispatch(setQuery(patch)) }
}

export function useSearchForm() {
  const piers = useFetch(getPierOptions)
  const routes = useFetch(getNetworkRoutes)
  return {
    piers: piers.data,
    routes: routes.data,
    loading: piers.loading || routes.loading,
  }
}

export function useSearchResults() {
  const { query, updateQuery } = useSearchQuery()
  const dispatch = useAppDispatch()
  const piers = useFetch(getPierOptions)
  const dates = useFetch(getDateOptions)
  // Query never changes the mock result set, so one load on mount is enough.
  const trips = useFetch(() => getTrips(query))
  return {
    query,
    updateQuery,
    piers: piers.data,
    dates: dates.data,
    trips: trips.data,
    loading: piers.loading || dates.loading || trips.loading,
    chooseTrip: (id: string) => dispatch(selectTrip(id)),
  }
}

export function useTripDetail() {
  const query = useAppSelector((s) => s.booking.query)
  const selectedTripId = useAppSelector((s) => s.booking.selectedTripId)
  const detail = useFetch(() => getTripDetail(selectedTripId, query))
  return { detail: detail.data, loading: detail.loading }
}
