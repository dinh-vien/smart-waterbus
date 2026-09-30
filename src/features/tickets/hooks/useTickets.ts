import { useFetch } from '../../../hooks'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { getManageBooking, getTicket, getTicketWallet } from '../services/ticketService'
import { selectTicket } from '../ticketsSlice'
import type { ManageBooking, TicketWallet } from '../types'

/** The wallet, with the ticket just booked (if any) shown as the next departure. */
export function useTicketWallet() {
  const dispatch = useAppDispatch()
  const booked = useAppSelector((s) => s.tickets.booked)
  const fetched = useFetch(getTicketWallet)

  // Newest booking is the next departure; older ones and the sample trips follow.
  const wallet: TicketWallet | undefined =
    fetched.data && booked.length > 0
      ? {
          ...fetched.data,
          next: booked[0],
          later: [...booked.slice(1), fetched.data.next, ...fetched.data.later],
        }
      : fetched.data

  return {
    wallet,
    loading: fetched.loading,
    error: fetched.error,
    retry: fetched.retry,
    openTicket: (id: string) => dispatch(selectTicket(id)),
  }
}

export function useTicketDetail() {
  const id = useAppSelector((s) => s.tickets.selectedTicketId)
  const booked = useAppSelector((s) => s.tickets.booked)
  const fetched = useFetch(() => getTicket(id))

  const bookedMatch = booked.find((t) => t.id === id)
  return {
    ticket: bookedMatch ?? fetched.data,
    loading: !bookedMatch && fetched.loading,
    error: bookedMatch ? undefined : fetched.error,
    retry: fetched.retry,
  }
}

/** Booking-management data, pointed at the ticket just booked when there is one. */
export function useManageBooking() {
  const booked = useAppSelector((s) => s.tickets.booked)
  const fetched = useFetch(getManageBooking)

  const manage: ManageBooking | undefined =
    fetched.data && booked.length > 0
      ? { ...fetched.data, bookingCode: booked[0].bookingRef, ticket: booked[0] }
      : fetched.data

  return { manage, loading: fetched.loading, error: fetched.error, retry: fetched.retry }
}
