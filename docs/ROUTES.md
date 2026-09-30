# Routes

Run `npm run dev` and open http://localhost:5173. The in-app index lives at `/sitemap`.
Every route opens directly by URL; there are no guards or redirects to login.
Source of truth: `src/routes/routes.ts`.

| Route | Screen | Branch | Status |
|---|---|---|---|
| `/` | Home | feature/home | done |
| `/sign-in` | Sign in | feature/auth | done |
| `/search` | Search journey | feature/trip-search | done |
| `/search/results` | Search results | feature/trip-search | done |
| `/trip` | Trip detail | feature/trip-search | done |
| `/booking/seats` | Seat selection | feature/booking-flow | done |
| `/booking/passenger` | Passenger details | feature/booking-flow | done |
| `/booking/review` | Review booking | feature/booking-flow | done |
| `/payment` | Payment | feature/payment | done |
| `/payment/success` | Booking confirmed | feature/payment | done |
| `/tickets` | My tickets | feature/my-tickets | done |
| `/tickets/detail` | Ticket detail | feature/my-tickets | done |
| `/tickets/manage` | Manage booking | feature/my-tickets | done |
| `/tracking` | Live trip tracking | feature/live-tracking | done |
| `/explore` | Explore river journeys | feature/explore | placeholder |
| `/sitemap` | All routes | feature/foundation | done |
