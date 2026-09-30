import { Link } from 'react-router-dom'
import { Badge, Card } from '../../components/ui'
import { useDocumentTitle } from '../../hooks'
import { ROUTE_LIST } from '../../routes/routes'

export default function SitemapPage() {
  useDocumentTitle('All routes')

  return (
    <section className="mx-auto max-w-4xl px-margin py-space-2xl">
      <h1 className="font-headline-lg text-headline-lg text-deep-river">All routes</h1>
      <p className="mt-space-sm text-body-lg text-on-surface-variant">
        Every page is reachable directly by URL. Screens marked &ldquo;placeholder&rdquo; are built
        in later branches.
      </p>
      <Card className="mt-space-xl overflow-hidden">
        <ul className="divide-y divide-outline-variant/30">
          {ROUTE_LIST.map((route) => (
            <li key={route.key}>
              <Link
                to={route.path}
                className="flex flex-wrap items-center justify-between gap-space-sm px-space-lg py-space-md transition-colors hover:bg-mist"
              >
                <span>
                  <span className="block font-headline-sm text-body-lg font-semibold text-deep-river">
                    {route.title}
                  </span>
                  <code className="text-body-sm text-on-surface-variant">{route.path}</code>
                </span>
                <span className="flex items-center gap-space-sm">
                  <span className="text-body-sm text-on-surface-variant">{route.branch}</span>
                  <Badge tone={route.built ? 'teal' : 'amber'}>
                    {route.built ? 'built' : 'placeholder'}
                  </Badge>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  )
}
