import { Icon } from '../../../components/ui'
import type { TechFeature } from '../types'

interface TechSectionProps {
  features: TechFeature[]
}

export default function TechSection({ features }: TechSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-deep-river py-space-3xl text-on-primary">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-10">
        <svg className="h-full w-full text-sky-aqua" fill="none" viewBox="0 0 1440 600">
          <path
            d="M-100 200 C 300 100, 600 400, 1100 250 C 1300 200, 1500 300, 1600 260"
            stroke="currentColor"
            strokeWidth="64"
          />
        </svg>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl space-y-space-2xl px-margin">
        <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <div className="max-w-xl space-y-space-xs">
            <span className="block text-body-sm font-bold uppercase tracking-wider text-sky-aqua">
              Intelligent Navigation Tech
            </span>
            <h2 className="font-headline-lg text-headline-lg font-bold tracking-tight text-on-primary">
              Next-Generation River Mobility Systems
            </h2>
          </div>
          <p className="max-w-md text-body-md text-sand-light/80">
            Behind every quiet river glide is an advanced telemetry stack coordinating vessels,
            tides, pier turnstiles, and passenger comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="space-y-space-md rounded-2xl border border-white/10 bg-ink/75 p-space-lg shadow-sm backdrop-blur-sm transition-colors hover:border-teal-flow/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal-flow/30 bg-teal-flow/20 text-sky-aqua">
                <Icon name={f.icon} className="text-[28px]" />
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-primary">
                {f.title}
              </h3>
              <p className="text-body-md text-sand-light/75">{f.description}</p>
              <div className="pt-space-xs font-numeric-md text-sm font-semibold text-sky-aqua">
                {f.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
