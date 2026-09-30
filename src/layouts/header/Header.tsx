import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from '../../components/brand'
import { Button, Icon } from '../../components/ui'
import { ROUTES } from '../../routes/routes'

const NAV_ITEMS = [
  { label: 'Explore', to: ROUTES.explore },
  { label: 'Routes', to: ROUTES.search },
  { label: 'Experience', to: ROUTES.liveTracking },
  { label: 'About', to: ROUTES.sitemap },
]

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'text-body-lg font-semibold text-teal-flow border-b-2 border-teal-flow pb-0.5 transition-colors'
    : 'text-body-md font-medium text-on-surface-variant hover:text-deep-river transition-colors'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-surface-container/60 bg-mist/90 shadow-[0_2px_12px_rgba(13,37,56,0.03)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-space-lg px-margin">
        <div className="flex items-center gap-space-xl">
          <Link to={ROUTES.home} aria-label="Smart Waterbus home">
            <Logo className="h-9 w-auto" />
          </Link>
          <nav className="hidden items-center gap-space-xl lg:flex" aria-label="Main">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.label} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-space-md">
          <button
            type="button"
            aria-label="Search routes and piers"
            className="flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition-all hover:bg-surface-container hover:text-deep-river"
          >
            <Icon name="search" className="text-[20px]" />
          </button>
          <button
            type="button"
            className="hidden items-center gap-space-xs rounded-full px-space-sm py-space-xs text-on-surface-variant transition-colors hover:bg-surface-container hover:text-deep-river sm:flex"
          >
            <Icon name="language" className="text-[18px]" />
            <span className="text-body-sm font-semibold uppercase tracking-wider">EN</span>
            <Icon name="expand_more" className="text-[16px]" />
          </button>
          <Button to={ROUTES.signIn} variant="dark" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button to={ROUTES.search} className="hidden md:inline-flex">
            Book a Trip
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-deep-river hover:bg-surface-container lg:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-surface-container/60 bg-mist px-margin py-space-md lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-space-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-space-md py-space-sm text-body-lg font-medium text-deep-river hover:bg-surface-container"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="flex gap-space-sm pt-space-sm">
              <Button to={ROUTES.signIn} variant="dark" onClick={() => setOpen(false)}>
                Sign in
              </Button>
              <Button to={ROUTES.search} onClick={() => setOpen(false)}>
                Book a Trip
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
