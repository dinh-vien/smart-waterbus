import type { HomeData } from '../features/home/types'
import sunsetImg from '../assets/images/home/story-sunset.jpg'
import heritageImg from '../assets/images/home/story-heritage.jpg'
import ecoImg from '../assets/images/home/story-eco.jpg'

export const HOME_DATA: HomeData = {
  heroCues: [
    {
      icon: 'radar',
      title: 'Real-time tracking',
      subtitle: 'Know where you are',
      iconClass: 'text-sky-aqua',
    },
    {
      icon: 'wb_twilight',
      title: 'Scenic journeys',
      subtitle: 'See a different side',
      iconClass: 'text-coral-glow',
    },
    {
      icon: 'confirmation_number',
      title: 'Easy booking',
      subtitle: 'Fast & secure',
      iconClass: 'text-sky-aqua',
    },
    {
      icon: 'energy_savings_leaf',
      title: 'Sustainable travel',
      subtitle: 'Greener future',
      iconClass: 'text-secondary-fixed',
    },
  ],
  features: [
    {
      icon: 'directions_boat',
      title: 'Real-time Vessel Radar',
      description:
        'Live GPS telemetry, millisecond river arrival forecasts, and accurate passenger crowd gauges at every station.',
      footnote: 'Always know where you are',
      footnoteIcon: 'sensors',
      tone: 'teal',
    },
    {
      icon: 'confirmation_number',
      title: 'Easy & Secure Booking',
      description:
        'Instant QR e-tickets, interactive deck seat selection, contactless checkout with Apple Pay, cards, and MoMo.',
      footnote: 'Book in just a few taps',
      footnoteIcon: 'touch_app',
      tone: 'teal',
    },
    {
      icon: 'anchor',
      title: 'Scenic & Cultural Routes',
      description:
        'Expansive panoramic windows, whisper-quiet electric cruising, refreshing open air deck, and curated audio stories.',
      footnote: 'See a different side',
      footnoteIcon: 'photo_camera',
      tone: 'teal',
    },
    {
      icon: 'energy_savings_leaf',
      title: 'Sustainable Urban Transit',
      description:
        'Zero tailpipe emissions along Saigon’s vital river corridor, reducing street gridlock and protecting biodiversity.',
      footnote: 'For a greener tomorrow',
      footnoteIcon: 'eco',
      tone: 'coral',
    },
  ],
  routeFilters: [
    { id: 'all', label: 'All Routes' },
    { id: 'line1', label: 'Line 1 (Express)' },
    { id: 'line2', label: 'Line 2 (Heritage)' },
    { id: 'sunset', label: 'Sunset Twilight' },
  ],
  stories: [
    {
      id: 'sunset',
      image: sunsetImg,
      badge: 'Golden Hour Special',
      badgeIcon: 'wb_sunny',
      badgeIconClass: 'text-coral-glow',
      fromPriceVnd: 45000,
      durationMins: 50,
      location: 'Bach Dang Pier',
      title: 'Twilight Sunset at Thu Thiem',
      description:
        'Watch the sunset cast copper light across Saigon’s highest skyscrapers, accompanied by bilingual ambient audio commentary.',
      trailingIcon: 'headphones',
      trailingIconClass: 'text-coral-glow',
    },
    {
      id: 'heritage',
      image: heritageImg,
      badge: 'Heritage & History',
      badgeIcon: 'museum',
      badgeIconClass: 'text-sky-aqua',
      fromPriceVnd: 35000,
      durationMins: 40,
      location: 'Cho Lon Wharf',
      title: 'Historic Waterfront & Colonial Wharfs',
      description:
        'Trace the 300-year maritime lineage of Gia Dinh, sailing past historic customs houses, ancient timber storehouses, and boat communities.',
      trailingIcon: 'auto_stories',
      trailingIconClass: 'text-teal-flow',
    },
    {
      id: 'eco',
      image: ecoImg,
      badge: 'Nature & Escapes',
      badgeIcon: 'forest',
      badgeIconClass: 'text-teal-flow',
      fromPriceVnd: 40000,
      durationMins: 65,
      location: 'Binh Quoi Pier',
      title: 'Eco-Corridor to Thanh Da Peninsula',
      description:
        'Escape into serene natural waterways framed by water palm groves and tranquil fishing hamlets tucked right inside city limits.',
      trailingIcon: 'nature_people',
      trailingIconClass: 'text-secondary',
    },
  ],
  steps: [
    {
      number: '01',
      title: 'Plan Journey',
      description: 'Pick your departure station, destination pier, and preferred schedule.',
      numberClass: 'bg-surface text-deep-river border border-outline-variant/30',
    },
    {
      number: '02',
      title: 'Choose Seat',
      description: 'Select panoramic window saloon seats or breezy open-deck viewing benches.',
      numberClass: 'bg-surface text-teal-flow border border-outline-variant/30',
    },
    {
      number: '03',
      title: 'Pay Securely',
      description: 'Instant digital payment via MoMo, VNPay, or card with zero surcharges.',
      numberClass: 'bg-surface text-sky-aqua border border-outline-variant/30',
    },
    {
      number: '04',
      title: 'Board with QR',
      description: 'Scan your e-ticket barcode at turnstiles and step aboard directly.',
      numberClass: 'bg-teal-flow text-on-primary',
    },
  ],
  techFeatures: [
    {
      icon: 'satellite_alt',
      title: 'Realtime Fleet Telemetry',
      description:
        'GPS vessel tracking with 10-second refresh cycles and dynamic arrival predictions displayed across all pier monitors.',
      metric: '99.4% On-Time Index',
    },
    {
      icon: 'translate',
      title: 'Multilingual Platform',
      description:
        'Seamless digital booking and onboard signage in Vietnamese, English, Japanese, Korean, and French for global explorers.',
      metric: '5 Supported Languages',
    },
    {
      icon: 'psychology',
      title: 'AI Route Concierge',
      description:
        'Dynamic journey recommendations tuned to hourly river tidal shifts, golden hour sunlight angles, and seat availability.',
      metric: 'Tide-Aware Planning',
    },
    {
      icon: 'podcasts',
      title: 'Immersive Audio Guide',
      description:
        'Geo-fenced automated audio storytelling that synchronizes precisely with the vessel’s GPS coordinates as you cruise past landmarks.',
      metric: '32 Geo-Trigger Points',
    },
  ],
}
