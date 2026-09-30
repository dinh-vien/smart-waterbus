import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '../../../components/ui'
import { BookingCard, SummaryRow, TotalRow } from '../../booking/components/SummaryParts'
import type { PassengerForm, Seat } from '../../booking/types'
import type { TripDetail } from '../../trips/types'
import { ROUTES } from '../../../routes/routes'
import { useAppDispatch } from '../../../store/hooks'
import { addBookedTicket } from '../../tickets/ticketsSlice'
import { buildBookedTicket } from '../../tickets/utils'
import { formatVnd } from '../../../utils/format'
import { confirmPayment } from '../services/paymentService'

interface PaymentOrderSummaryProps {
  trip: TripDetail
  seat: Seat | undefined
  seatId: string
  passenger: PassengerForm
  fareVnd: number
  discountVnd: number
  totalVnd: number
}

export default function PaymentOrderSummary({
  trip,
  seat,
  seatId,
  passenger,
  fareVnd,
  discountVnd,
  totalVnd,
}: PaymentOrderSummaryProps) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [busy, setBusy] = useState(false)

  // Mock: always succeeds, then moves on to the confirmation page.
  const complete = async () => {
    setBusy(true)
    await confirmPayment()
    dispatch(addBookedTicket(buildBookedTicket({ trip, seat, seatId, passenger, totalVnd })))
    navigate(ROUTES.bookingSuccess)
  }

  return (
    <BookingCard className="p-space-lg lg:sticky lg:top-24">
      <div className="mb-space-md flex items-center justify-between">
        <h2 className="font-headline-md text-headline-sm text-deep-river">Order Summary</h2>
        <span className="rounded-full bg-secondary-container px-2.5 py-0.5 text-[11px] font-bold text-teal-flow">
          Trip {trip.vesselCode}
        </span>
      </div>

      <div className="rounded-xl bg-mist/70 p-space-md">
        <div className="flex items-start justify-between text-xs font-semibold text-deep-river">
          <span>
            {trip.originPierLabel}
            <span className="block font-normal text-teal-flow">{trip.departTime}</span>
          </span>
          <Icon name="sailing" className="text-[18px] text-teal-flow" />
          <span className="text-right">
            {trip.destinationPierLabel}
            <span className="block font-normal text-teal-flow">{trip.arriveTime}</span>
          </span>
        </div>
        <div className="my-2 h-px bg-outline-variant/60" />
        <div className="flex items-center justify-between text-[11px] text-on-surface-variant">
          <span>Direct Line</span>
          <span>{trip.durationMins} min crossing</span>
          <span>Non-stop</span>
        </div>
      </div>

      <div className="mt-space-md space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-on-surface-variant">Selected Seat</span>
          <span className="rounded bg-surface-container px-2 py-0.5 text-xs font-semibold text-deep-river">
            Seat {seatId}
          </span>
        </div>
        <SummaryRow label="Passenger" value={`1 Passenger (${passenger.fullName})`} />
        <SummaryRow label="Date" value={`${trip.dateLabel}, 2025`} />
      </div>

      <div className="mt-space-md space-y-1.5 border-t border-surface-container pt-space-md">
        <SummaryRow label="Trip Fare" value={formatVnd(fareVnd)} />
        <SummaryRow label="Seat Fee" value="Included" accent />
        <SummaryRow
          label="Discount"
          value={`${discountVnd > 0 ? '−' : ''}${discountVnd.toLocaleString('en-US')} VND`}
          accent={discountVnd > 0}
        />
      </div>
      <div className="mt-space-sm border-t border-surface-container pt-space-sm">
        <TotalRow label="Total Amount" caption="All taxes & fees included" amountVnd={totalVnd} />
      </div>

      <button
        type="button"
        onClick={complete}
        disabled={busy}
        className="group mt-space-sm flex w-full items-center justify-center gap-2 rounded-xl bg-teal-flow py-3 font-headline-sm text-base font-semibold text-on-primary shadow-[0_2px_12px_rgba(20,122,126,0.25)] transition-all hover:bg-secondary disabled:opacity-70"
      >
        {busy ? 'Confirming…' : "I've Completed Payment"}
        <Icon
          name="arrow_forward"
          className="text-[18px] transition-transform group-hover:translate-x-1"
        />
      </button>
      <div className="mt-space-sm text-center">
        <Link
          to={ROUTES.checkoutReview}
          className="text-xs text-on-surface-variant hover:text-deep-river"
        >
          ← Back to Checkout
        </Link>
      </div>
      <div className="mt-space-md flex items-start gap-2 border-t border-surface-container pt-space-md text-xs text-on-surface-variant">
        <Icon name="lock" className="text-[16px] text-teal-flow" />
        Your selected seat remains reserved while you complete checkout.
      </div>
    </BookingCard>
  )
}
