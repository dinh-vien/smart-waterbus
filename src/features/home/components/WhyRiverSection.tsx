import { Icon } from '../../../components/ui'
import type { FeatureCard } from '../types'

interface WhyRiverSectionProps {
  features: FeatureCard[]
}

export default function WhyRiverSection({ features }: WhyRiverSectionProps) {
  return (
    <section className="w-full border-y border-outline-variant/30 bg-sand-light/60 py-space-3xl">
      <div className="mx-auto max-w-7xl space-y-space-2xl px-margin">
        <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <div className="max-w-2xl space-y-space-xs">
            <div className="inline-flex items-center gap-space-xs text-body-sm font-bold uppercase tracking-widest text-teal-flow">
              <span className="h-2 w-2 rounded-full bg-teal-flow" />
              Why River Travel
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold tracking-tight text-deep-river">
              More Than Transportation — A New Way to See Saigon
            </h2>
          </div>
          <p className="max-w-md text-body-md text-on-surface-variant">
            From iconic skyline landmarks to hidden historical wharfs, Smart Waterbus brings you
            closer to the city’s living river heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const coral = f.tone === 'coral'
            return (
              <div
                key={f.title}
                className="group flex flex-col justify-between space-y-space-md rounded-2xl border border-[#E2E8F0] bg-surface p-space-lg shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="space-y-space-md">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border bg-mist transition-colors group-hover:text-on-primary ${
                      coral
                        ? 'border-coral-glow/30 text-coral-glow group-hover:bg-coral-glow'
                        : 'border-teal-flow/20 text-teal-flow group-hover:bg-teal-flow'
                    }`}
                  >
                    <Icon name={f.icon} className="text-[26px]" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-deep-river">{f.title}</h3>
                  <p className="text-body-md text-on-surface-variant">{f.description}</p>
                </div>
                <div
                  className={`flex items-center gap-space-xs pt-space-sm text-body-sm font-semibold ${
                    coral ? 'text-coral-glow' : 'text-teal-flow'
                  }`}
                >
                  <span>{f.footnote}</span>
                  <Icon name={f.footnoteIcon} className="text-[16px]" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
