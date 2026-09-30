import type { ReactNode } from 'react'
import Icon from './Icon'

interface StatusPillProps {
  children?: ReactNode
  variant?: 'card' | 'soft'
}

/** "All River Terminals Operational • Calm River Flow" service status pill. */
export default function StatusPill({ children, variant = 'card' }: StatusPillProps) {
  const label = children ?? 'All River Terminals Operational'

  if (variant === 'soft') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-flow/20 bg-secondary-container/70 px-3 py-1.5 text-xs font-bold text-on-secondary-container">
        <Icon name="waves" className="text-[16px] text-teal-flow" />
        {label} • Calm River Flow
      </span>
    )
  }

  return (
    <div className="flex shrink-0 items-center gap-space-sm self-start rounded-xl border border-[#E2ECEE] bg-white/90 px-4 py-2.5 shadow-sm backdrop-blur-md md:self-auto">
      <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-teal-flow" />
      <div className="flex items-center gap-1.5 text-xs font-semibold text-deep-river">
        <span>{label}</span>
        <span className="text-outline-variant">•</span>
        <span className="flex items-center gap-1 font-bold text-teal-flow">
          <Icon name="waves" className="text-[15px]" /> Calm River Flow
        </span>
      </div>
    </div>
  )
}
