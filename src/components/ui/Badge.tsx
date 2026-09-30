import type { ReactNode } from 'react'

type Tone = 'teal' | 'aqua' | 'amber' | 'coral' | 'neutral'

const TONES: Record<Tone, string> = {
  teal: 'bg-secondary-container text-on-secondary-container',
  aqua: 'bg-sky-aqua/20 text-deep-river',
  amber: 'bg-signal-amber/25 text-tertiary',
  coral: 'bg-coral-glow/20 text-tertiary',
  neutral: 'bg-surface-container text-on-surface-variant',
}

interface BadgeProps {
  tone?: Tone
  className?: string
  children: ReactNode
}

export default function Badge({ tone = 'teal', className = '', children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-body-sm font-semibold ${TONES[tone]} ${className}`.trim()}
    >
      {children}
    </span>
  )
}
