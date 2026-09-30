import { Badge, Button, Icon } from '../../components/ui'
import { useDocumentTitle } from '../../hooks'
import { ROUTES } from '../../routes/routes'

interface PlaceholderPageProps {
  title: string
  branch: string
}

/** Stand-in for a screen whose branch has not been built yet, so no link is ever dead. */
export default function PlaceholderPage({ title, branch }: PlaceholderPageProps) {
  useDocumentTitle(title)

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-space-lg px-margin py-space-3xl text-center">
      <Icon name="directions_boat" className="text-[48px] text-teal-flow" />
      <h1 className="font-headline-lg text-headline-lg text-deep-river">{title}</h1>
      <Badge tone="amber">Coming in {branch}</Badge>
      <p className="max-w-md text-body-lg text-on-surface-variant">
        This screen has not been built yet. The route already exists so links keep working.
      </p>
      <div className="flex gap-space-md">
        <Button to={ROUTES.home}>Back to home</Button>
        <Button to={ROUTES.sitemap} variant="secondary">
          All routes
        </Button>
      </div>
    </section>
  )
}
