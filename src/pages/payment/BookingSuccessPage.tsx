import { Breadcrumb } from '../../components/ui'
import { useBooking } from '../../features/booking/hooks/useBooking'
import { bookingReference } from '../../features/booking/utils'
import {
  ConfirmationHero,
  ConfirmationSteps,
  CorridorCard,
  QuickActions,
  WaterwayBanner,
  WhatsNext,
} from '../../features/payment/components/ConfirmationParts'
import { getNextSteps } from '../../features/payment/services/paymentService'
import BoardingPassCard from '../../features/tickets/components/BoardingPassCard'
import { useDocumentTitle, useFetch } from '../../hooks'
import { ROUTES } from '../../routes/routes'

export default function BookingSuccessPage() {
  useDocumentTitle('Booking Confirmed')
  const { loading, trip, seat, seatId, passenger, totals } = useBooking()
  const steps = useFetch(getNextSteps)

  if (loading || !trip || !totals || !steps.data)
    return <div className="min-h-[60vh]" aria-busy="true" />

  const reference = bookingReference(seatId)
  const pier = `${trip.originPierName} Pier`
  const nextSteps = steps.data.map((s) => ({
    ...s,
    title: s.title.replace('{pier}', pier),
    description: s.description.replace('{pier}', pier),
    chipLabel: s.chipLabel.replace('{pier}', pier),
  }))

  return (
    <div>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-space-sm px-margin py-space-sm">
        <Breadcrumb
          items={[
            { label: 'Home', to: ROUTES.home },
            { label: 'Booking', to: ROUTES.seatSelection },
            { label: 'Confirmation' },
          ]}
        />
        <ConfirmationSteps />
      </div>

      <div className="mx-auto max-w-7xl px-margin pb-space-2xl pt-space-lg">
        <ConfirmationHero reference={reference} trip={trip} />

        <div className="mt-space-2xl grid grid-cols-1 items-start gap-space-lg lg:grid-cols-12">
          <div className="lg:col-span-7">
            <BoardingPassCard
              pass={{
                tripCode: trip.vesselCode,
                lineName: 'Central Waterway Line',
                departTime: trip.departTime,
                departPier: trip.originPierName + ' Pier',
                arriveTime: trip.arriveTime,
                arrivePier: trip.destinationPierName + ' Pier',
                durationMins: trip.durationMins,
                seat: `Seat ${seatId}`,
                passenger: `1 Passenger (${passenger.fullName})`,
                status: 'Confirmed',
                totalVnd: totals.totalVnd,
                reference,
                seatNote: `Trip ${trip.vesselCode} • ${seat?.window ? 'Window' : 'Aisle'}`,
              }}
            />
          </div>
          <div className="space-y-space-md lg:col-span-5">
            <CorridorCard trip={trip} />
            <QuickActions />
          </div>
        </div>
      </div>

      <WhatsNext steps={nextSteps} />

      <div className="mx-auto max-w-7xl px-margin py-space-2xl">
        <WaterwayBanner />
      </div>
    </div>
  )
}
