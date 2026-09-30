import { Icon } from '../../../components/ui'
import type { Seat, SeatMap } from '../types'

interface SeatMapViewProps {
  seatMap: SeatMap
  selectedId: string
  onSelect: (id: string) => void
}

function SeatButton({
  seat,
  selected,
  onSelect,
}: {
  seat: Seat
  selected: boolean
  onSelect: (id: string) => void
}) {
  const occupied = seat.status === 'occupied'

  return (
    <div className="relative">
      {seat.window && (
        <span
          className={`absolute -right-1 -top-1 z-10 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold text-white ${
            occupied ? 'bg-outline' : 'bg-sky-aqua'
          }`}
        >
          W
        </span>
      )}
      {selected && (
        <span className="absolute -top-2 left-1/2 z-10 -translate-x-1/2 rounded bg-signal-amber px-1 text-[8px] font-bold uppercase text-deep-river">
          Selected
        </span>
      )}
      <button
        type="button"
        disabled={occupied}
        aria-pressed={selected}
        aria-label={`Seat ${seat.id}${seat.window ? ', window' : ''}${
          occupied ? ', occupied' : ''
        }`}
        onClick={() => onSelect(seat.id)}
        className={`flex h-[46px] w-[62px] flex-col items-center justify-center rounded-lg border-2 text-[11px] font-semibold transition-all ${
          selected
            ? 'border-teal-flow bg-teal-flow text-white shadow-md'
            : occupied
            ? 'cursor-not-allowed border-transparent bg-outline-variant/50 text-outline'
            : 'border-teal-flow/40 bg-white text-deep-river hover:border-teal-flow hover:bg-sand-light'
        }`}
      >
        <Icon name="airline_seat_recline_normal" className="text-[16px]" />
        {seat.id}
      </button>
    </div>
  )
}

export function SeatLegend() {
  return (
    <div className="flex flex-wrap items-center gap-space-md text-xs text-on-surface-variant">
      <span className="flex items-center gap-1.5">
        <span className="flex h-5 w-5 items-center justify-center rounded border-2 border-teal-flow/40 bg-white text-[8px] font-bold text-deep-river">
          A1
        </span>
        Available
      </span>
      <span className="flex items-center gap-1.5 font-semibold text-deep-river">
        <span className="flex h-5 w-5 items-center justify-center rounded bg-teal-flow text-[8px] font-bold text-white">
          A2
        </span>
        Selected
      </span>
      <span className="flex items-center gap-1.5">
        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-sky-aqua bg-sky-aqua/20">
          <span className="h-2 w-2 rounded-full bg-sky-aqua" />
        </span>
        Window River View
      </span>
      <span className="flex items-center gap-1.5">
        <span className="flex h-5 w-5 items-center justify-center rounded bg-outline-variant/50 text-outline">
          <Icon name="block" className="text-[13px]" />
        </span>
        Occupied
      </span>
    </div>
  )
}

/** Top-down cabin plan: 6 rows, seats A-B | aisle | C-D, bow at the top and gangway at the stern. */
export default function SeatMapView({ seatMap, selectedId, onSelect }: SeatMapViewProps) {
  const seatAt = (row: number, column: Seat['column']) =>
    seatMap.seats.find((s) => s.row === row && s.column === column) as Seat

  return (
    <div className="relative overflow-hidden rounded-2xl border border-teal-flow/20 bg-gradient-to-b from-[#E0F2F5] via-[#EBF7F8] to-[#E3EFF3] p-space-lg">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#147a7e_1px,transparent_1px)] opacity-30 [background-size:18px_18px]" />
      <div className="pointer-events-none absolute inset-y-8 left-4 hidden w-4 rounded-full bg-teal-flow/30 md:block" />
      <div className="pointer-events-none absolute inset-y-8 right-4 hidden w-4 rounded-full bg-teal-flow/30 md:block" />

      <div className="relative mx-auto max-w-sm rounded-t-[80px] rounded-b-3xl border border-outline-variant/40 bg-white px-space-md pb-space-md pt-space-lg shadow-lg">
        <div className="mx-auto mb-space-sm flex w-fit items-center gap-2 rounded-full border border-outline-variant/40 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-deep-river shadow-sm">
          <Icon name="navigation" className="text-[14px]" />
          Forward / Bow • River Cruise Direction
        </div>
        <div className="mx-auto mb-space-md w-fit rounded-full border border-teal-flow/30 bg-teal-flow/10 px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-flow">
          Wrap-Around Cockpit Bridge Glass
        </div>

        <div className="mb-2 flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-teal-flow">
          <span className="flex items-center gap-1">
            <Icon name="waves" className="text-[13px]" /> Portside Panoramic Window
          </span>
          <span className="flex items-center gap-1">
            Starboard Window <Icon name="waves" className="text-[13px]" />
          </span>
        </div>
        <div className="grid grid-cols-[repeat(2,62px)_28px_repeat(2,62px)] justify-center gap-x-2 text-center text-[10px] font-semibold text-on-surface-variant">
          <span>Port A</span>
          <span>Aisle B</span>
          <span className="flex items-center justify-center">
            <Icon name="keyboard_double_arrow_down" className="text-[12px]" />
          </span>
          <span>Aisle C</span>
          <span>Starboard D</span>
        </div>

        <div className="mt-2 space-y-3">
          {seatMap.rows.map((row) => (
            <div
              key={row}
              className="grid grid-cols-[repeat(2,62px)_28px_repeat(2,62px)] items-center justify-center gap-x-2"
            >
              {(['A', 'B'] as const).map((c) => (
                <SeatButton
                  key={c}
                  seat={seatAt(row, c)}
                  selected={selectedId === `${c}${row}`}
                  onSelect={onSelect}
                />
              ))}
              <span className="flex h-6 items-center justify-center rounded bg-mist text-[9px] font-bold text-outline">
                R{row}
              </span>
              {(['C', 'D'] as const).map((c) => (
                <SeatButton
                  key={c}
                  seat={seatAt(row, c)}
                  selected={selectedId === `${c}${row}`}
                  onSelect={onSelect}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-space-md flex items-center gap-2 border-t border-dashed border-outline-variant pt-space-md text-[11px] font-semibold text-on-surface-variant">
          <span className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-outline-variant/40 bg-mist px-2 py-2">
            <Icon name="luggage" className="text-[15px]" /> Luggage Compartment
          </span>
          <span className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-outline-variant/40 bg-mist px-2 py-2">
            <Icon name="door_open" className="text-[15px] text-signal-amber" /> Stern Boarding Gate
            / Entry
          </span>
        </div>
        <div className="mt-2 flex items-center justify-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-teal-flow">
          <Icon name="arrow_downward" className="text-[12px]" />
          Aft Gangway • Disembarkation Point
          <Icon name="arrow_downward" className="text-[12px]" />
        </div>
      </div>
    </div>
  )
}
