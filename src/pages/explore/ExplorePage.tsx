import { useRef } from 'react'
import {
  CorridorSection,
  ExploreHero,
  JourneysSection,
  LandmarksSection,
  ModesSection,
  StepAboardBanner,
  StoriesSection,
} from '../../features/explore/components/ExploreSections'
import { getExploreData } from '../../features/explore/services/exploreService'
import { useDocumentTitle, useFetch } from '../../hooks'

export default function ExplorePage() {
  useDocumentTitle('Explore River Journeys')
  const { data, loading } = useFetch(getExploreData)
  const storiesRef = useRef<HTMLElement>(null)

  if (loading || !data) return <div className="min-h-[60vh]" aria-busy="true" />

  return (
    <div>
      <ExploreHero onStories={() => storiesRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <JourneysSection journeys={data.journeys} />
      <ModesSection modes={data.modes} />
      <LandmarksSection categories={data.categories} landmarks={data.landmarks} />
      <StoriesSection data={data} sectionRef={storiesRef} />
      <CorridorSection data={data} />
      <StepAboardBanner />
    </div>
  )
}
