import { useEffect, useState } from 'react'
import { Icon } from '../ui'

interface AudioPlayerProps {
  title: string
  durationSec: number
  startAtSec?: number
  languages: string[]
  className?: string
}

const fmt = (sec: number) =>
  `${Math.floor(sec / 60)}:${String(Math.floor(sec % 60)).padStart(2, '0')}`

/**
 * Simulated audio player: no real audio, a timer advances the progress while "playing".
 * Shared by the live tracking and explore screens.
 * Pass a `key` (the episode id) so switching episodes remounts it and restarts playback.
 */
export default function AudioPlayer({
  title,
  durationSec,
  startAtSec = 0,
  languages,
  className = '',
}: AudioPlayerProps) {
  const [position, setPosition] = useState(startAtSec)
  const [playing, setPlaying] = useState(startAtSec < durationSec)
  const [language, setLanguage] = useState(languages[0])

  useEffect(() => {
    if (!playing) return
    const timer = setInterval(() => {
      setPosition((p) => {
        if (p + 1 >= durationSec) {
          setPlaying(false)
          return durationSec
        }
        return p + 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [playing, durationSec])

  const seek = (delta: number) => setPosition((p) => Math.min(Math.max(p + delta, 0), durationSec))
  const toggle = () => {
    if (position >= durationSec) setPosition(0)
    setPlaying((v) => !v)
  }
  const percent = durationSec ? (position / durationSec) * 100 : 0

  return (
    <div
      className={`rounded-2xl border border-outline-variant/40 bg-mist/60 p-space-md ${className}`.trim()}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-teal-flow">
            Audio Guide
          </div>
          <div className="font-headline-sm text-base font-bold leading-snug text-deep-river">
            {title}
          </div>
        </div>
        <div
          className="flex shrink-0 gap-1 rounded-lg bg-white p-1 text-[11px] font-semibold"
          role="group"
          aria-label="Audio language"
        >
          {languages.map((l) => (
            <button
              key={l}
              type="button"
              aria-pressed={language === l}
              onClick={() => setLanguage(l)}
              className={`rounded px-2 py-0.5 ${
                language === l
                  ? 'bg-deep-river text-white'
                  : 'text-on-surface-variant hover:text-deep-river'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={durationSec}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label="Audio position"
        className="mt-space-md h-1.5 w-full cursor-pointer appearance-none rounded-full bg-surface-container accent-teal-flow"
        style={{
          background: `linear-gradient(to right, #147A7E ${percent}%, #e3e2e4 ${percent}%)`,
        }}
      />
      <div className="mt-1 flex justify-between text-xs font-semibold text-teal-flow">
        <span>{fmt(position)}</span>
        <span className="text-on-surface-variant">{fmt(durationSec)}</span>
      </div>

      <div className="mt-space-sm flex items-center justify-center gap-space-md">
        <button
          type="button"
          aria-label="Back 10 seconds"
          onClick={() => seek(-10)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-deep-river shadow-sm hover:bg-surface-container-low"
        >
          <Icon name="replay_10" className="text-[20px]" />
        </button>
        <button
          type="button"
          aria-label={playing ? 'Pause' : 'Play'}
          onClick={toggle}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-flow text-on-primary shadow-md hover:bg-secondary"
        >
          <Icon name={playing ? 'pause' : 'play_arrow'} className="text-[26px]" filled />
        </button>
        <button
          type="button"
          aria-label="Forward 10 seconds"
          onClick={() => seek(10)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-deep-river shadow-sm hover:bg-surface-container-low"
        >
          <Icon name="forward_10" className="text-[20px]" />
        </button>
      </div>
    </div>
  )
}
