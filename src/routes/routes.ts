/**
 * Single registry of every page in the app.
 * `branch` is the feature branch that owns the real screen; `built` flips to true
 * once that screen replaces its placeholder.
 */
export const ROUTES = {
  home: '/',
  signIn: '/sign-in',
  search: '/search',
  searchResults: '/search/results',
  tripDetail: '/trip',
  seatSelection: '/booking/seats',
  passengerDetails: '/booking/passenger',
  checkoutReview: '/booking/review',
  payment: '/payment',
  bookingSuccess: '/payment/success',
  myTickets: '/tickets',
  ticketDetail: '/tickets/detail',
  manageBooking: '/tickets/manage',
  liveTracking: '/tracking',
  explore: '/explore',
  sitemap: '/sitemap',
} as const

export type RouteKey = keyof typeof ROUTES

export interface RouteMeta {
  key: RouteKey
  path: string
  title: string
  branch: string
  built: boolean
}

export const ROUTE_LIST: RouteMeta[] = [
  { key: 'home', path: ROUTES.home, title: 'Home', branch: 'feature/home', built: true },
  { key: 'signIn', path: ROUTES.signIn, title: 'Sign in', branch: 'feature/auth', built: false },
  {
    key: 'search',
    path: ROUTES.search,
    title: 'Search journey',
    branch: 'feature/trip-search',
    built: false,
  },
  {
    key: 'searchResults',
    path: ROUTES.searchResults,
    title: 'Search results',
    branch: 'feature/trip-search',
    built: false,
  },
  {
    key: 'tripDetail',
    path: ROUTES.tripDetail,
    title: 'Trip detail',
    branch: 'feature/trip-search',
    built: false,
  },
  {
    key: 'seatSelection',
    path: ROUTES.seatSelection,
    title: 'Seat selection',
    branch: 'feature/booking-flow',
    built: false,
  },
  {
    key: 'passengerDetails',
    path: ROUTES.passengerDetails,
    title: 'Passenger details',
    branch: 'feature/booking-flow',
    built: false,
  },
  {
    key: 'checkoutReview',
    path: ROUTES.checkoutReview,
    title: 'Review booking',
    branch: 'feature/booking-flow',
    built: false,
  },
  {
    key: 'payment',
    path: ROUTES.payment,
    title: 'Payment',
    branch: 'feature/payment',
    built: false,
  },
  {
    key: 'bookingSuccess',
    path: ROUTES.bookingSuccess,
    title: 'Booking confirmed',
    branch: 'feature/payment',
    built: false,
  },
  {
    key: 'myTickets',
    path: ROUTES.myTickets,
    title: 'My tickets',
    branch: 'feature/my-tickets',
    built: false,
  },
  {
    key: 'ticketDetail',
    path: ROUTES.ticketDetail,
    title: 'Ticket detail',
    branch: 'feature/my-tickets',
    built: false,
  },
  {
    key: 'manageBooking',
    path: ROUTES.manageBooking,
    title: 'Manage booking',
    branch: 'feature/my-tickets',
    built: false,
  },
  {
    key: 'liveTracking',
    path: ROUTES.liveTracking,
    title: 'Live trip tracking',
    branch: 'feature/live-tracking',
    built: false,
  },
  {
    key: 'explore',
    path: ROUTES.explore,
    title: 'Explore river journeys',
    branch: 'feature/explore',
    built: false,
  },
]
