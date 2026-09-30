import { useFetch } from '../../../hooks'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { getManageBooking, getTicket, getTicketWallet } from '../services/ticketService'
import { selectTicket } from '../ticketsSlice'

export function useTicketWallet() {
  const dispatch = useAppDispatch()
  const wallet = useFetch(getTicketWallet)
  return {
    wallet: wallet.data,
    loading: wallet.loading,
    openTicket: (id: string) => dispatch(selectTicket(id)),
  }
}

export function useTicketDetail() {
  const id = useAppSelector((s) => s.tickets.selectedTicketId)
  const ticket = useFetch(() => getTicket(id))
  return { ticket: ticket.data, loading: ticket.loading }
}

export function useManageBooking() {
  const manage = useFetch(getManageBooking)
  return { manage: manage.data, loading: manage.loading }
}
