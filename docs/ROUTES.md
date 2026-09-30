# Routes

Run `npm run dev` and open http://localhost:5173. The in-app index lives at `/sitemap`.
Every route opens directly by URL; there are no guards or redirects to login.
Source of truth: `src/routes/routes.ts` (paths) and `src/routes/AppRoutes.tsx` (pages, lazy-loaded).

| Route | Screen |
|---|---|
| `/` | Home |
| `/sign-in` | Sign in / Create account |
| `/search` | Search journey |
| `/search/results` | Search results |
| `/trip` | Trip detail |
| `/booking/seats` | Seat selection |
| `/booking/passenger` | Passenger details |
| `/booking/review` | Review booking |
| `/payment` | Payment |
| `/payment/success` | Booking confirmed |
| `/tickets` | My tickets |
| `/tickets/detail` | Ticket detail |
| `/tickets/manage` | Manage booking |
| `/tracking` | Live trip tracking |
| `/explore` | Explore river journeys |
| `/sitemap` | All routes |

Unknown paths redirect to `/`.
