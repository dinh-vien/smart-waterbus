import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../../../assets/images/vessel.jpg'
import { Icon } from '../../../components/ui'
import { ROUTES } from '../../../routes/routes'
import type { HeroCue } from '../types'

const SLIDE_COUNT = 3

interface HeroSectionProps {
  cues: HeroCue[]
}

export default function HeroSection({ cues }: HeroSectionProps) {
  const [slide, setSlide] = useState(1)
  const step = (delta: number) => setSlide((s) => ((s - 1 + delta + SLIDE_COUNT) % SLIDE_COUNT) + 1)

  return (
    <section className="relative flex min-h-[720px] w-full flex-col justify-between overflow-hidden bg-gradient-to-b from-mist via-[#EDF4F5] to-surface lg:h-[86vh] lg:max-h-[920px] lg:min-h-[780px]">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          alt="Smart Waterbus electric catamaran gliding across the Saigon River with the city skyline"
          className="h-full w-full object-cover object-[62%_center] saturate-[1.08] lg:object-[68%_center]"
          src={heroImage}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mist via-mist/85 to-transparent sm:via-mist/60 lg:w-[68%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-river/80 via-transparent to-transparent opacity-90 lg:opacity-75" />
        <svg
          className="absolute left-0 top-0 h-full w-full text-teal-flow opacity-20"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
          aria-hidden="true"
        >
          <path
            d="M-80 160 C 220 120, 420 320, 780 240 C 1100 170, 1320 280, 1540 220"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="32"
          />
          <path
            d="M-100 320 C 260 260, 520 440, 880 340 C 1180 260, 1380 400, 1580 330"
            stroke="currentColor"
            strokeDasharray="10 16"
            strokeWidth="16"
          />
        </svg>
      </div>

      <div className="absolute right-8 top-8 z-20 hidden items-center gap-3 rounded-full border border-white/15 bg-deep-river/85 px-4 py-2 text-on-primary shadow-[0_12px_32px_rgba(13,37,56,0.25)] backdrop-blur-md md:flex lg:right-16">
        <div className="h-2.5 w-2.5 animate-ping rounded-full bg-sky-aqua" />
        <span className="font-numeric-md text-xs font-semibold uppercase tracking-wider text-sand-light">
          WB-01 • Bach Dang → Thu Thiem
        </span>
        <span className="text-white/40">|</span>
        <span className="flex items-center gap-1 text-xs font-semibold text-sky-aqua">
          <Icon name="speed" className="text-[15px]" /> 42 km/h • On Time
        </span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-margin pt-10 sm:pt-14 lg:pt-20">
        <div className="max-w-2xl space-y-space-md">
          <span className="inline-flex items-center gap-2 font-headline-sm text-sm font-semibold uppercase tracking-widest text-teal-flow">
            City Moves Differently from the River
          </span>
          <div className="relative space-y-1">
            <div className="inline-block -rotate-3 translate-y-1 select-none font-script text-3xl font-semibold text-sky-aqua drop-shadow-sm sm:text-4xl">
              More than a ride ~
            </div>
            <h1 className="font-headline-xl text-4xl font-extrabold leading-[1.08] tracking-tight text-deep-river sm:text-5xl lg:text-headline-xl">
              A Smarter Journey,
              <br />
              <span className="text-teal-flow">A Brighter Saigon</span>
            </h1>
          </div>
          <p className="max-w-xl pt-1 text-base leading-relaxed text-ink/80 sm:text-body-lg">
            Explore the city by water with real-time updates, seamless booking and unforgettable
            experiences.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Link
              to={ROUTES.search}
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-teal-flow px-7 py-3.5 font-headline-sm text-base font-semibold text-on-primary shadow-[0_12px_24px_-8px_rgba(20,122,126,0.42)] transition-all hover:-translate-y-0.5 hover:bg-secondary hover:shadow-[0_16px_32px_-6px_rgba(20,122,126,0.55)]"
            >
              <span>Explore Routes</span>
              <Icon
                name="arrow_forward"
                className="text-[20px] transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              to={ROUTES.explore}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/60 bg-surface/90 px-7 py-3.5 font-headline-sm text-base font-semibold text-deep-river shadow-md backdrop-blur-md transition-all hover:bg-surface hover:shadow-lg"
            >
              Discover Experience
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl px-margin pb-6 pt-12 sm:pb-8">
        <div className="flex flex-col justify-between gap-4 rounded-2xl border border-white/15 bg-deep-river/75 p-4 text-on-primary shadow-[0_20px_40px_rgba(13,37,56,0.35)] backdrop-blur-xl sm:p-5 lg:flex-row lg:items-center">
          <div className="grid flex-1 grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {cues.map((cue) => (
              <div key={cue.title} className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 ${cue.iconClass}`}
                >
                  <Icon name={cue.icon} className="text-[22px]" />
                </div>
                <div className="min-w-0">
                  <div className="truncate font-headline-sm text-sm font-semibold text-white">
                    {cue.title}
                  </div>
                  <div className="truncate text-xs text-sand-light/80">{cue.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end gap-3 border-t border-white/15 pt-2 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <span className="font-numeric-md text-sm font-semibold tracking-wider text-sand-light">
              {String(slide).padStart(2, '0')} <span className="text-white/40">—</span>{' '}
              {String(SLIDE_COUNT).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                aria-label="Previous vessel"
                onClick={() => step(-1)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <Icon name="chevron_left" className="text-[16px]" />
              </button>
              <button
                type="button"
                aria-label="Next vessel"
                onClick={() => step(1)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-deep-river shadow-sm transition-colors hover:bg-sand-light"
              >
                <Icon name="chevron_right" className="text-[16px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
