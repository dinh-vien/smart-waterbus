import type { ComponentType } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/home/HomePage'
import SignInPage from '../pages/auth/SignInPage'
import SearchJourneyPage from '../pages/trips/SearchJourneyPage'
import SearchResultsPage from '../pages/trips/SearchResultsPage'
import TripDetailPage from '../pages/trips/TripDetailPage'
import CheckoutReviewPage from '../pages/booking/CheckoutReviewPage'
import PassengerDetailsPage from '../pages/booking/PassengerDetailsPage'
import SeatSelectionPage from '../pages/booking/SeatSelectionPage'
import BookingSuccessPage from '../pages/payment/BookingSuccessPage'
import PaymentPage from '../pages/payment/PaymentPage'
import PlaceholderPage from '../pages/placeholder/PlaceholderPage'
import SitemapPage from '../pages/sitemap/SitemapPage'
import PublicRoute from './PublicRoute'
import RouteWithLayout from './RouteWithLayout'
import { ROUTES, ROUTE_LIST } from './routes'

// Screens that already have a real page. Everything else renders a placeholder.
const PAGES: Partial<Record<string, ComponentType>> = {
  [ROUTES.home]: HomePage,
  [ROUTES.signIn]: SignInPage,
  [ROUTES.search]: SearchJourneyPage,
  [ROUTES.searchResults]: SearchResultsPage,
  [ROUTES.tripDetail]: TripDetailPage,
  [ROUTES.seatSelection]: SeatSelectionPage,
  [ROUTES.passengerDetails]: PassengerDetailsPage,
  [ROUTES.checkoutReview]: CheckoutReviewPage,
  [ROUTES.payment]: PaymentPage,
  [ROUTES.bookingSuccess]: BookingSuccessPage,
}

export default function AppRoutes() {
  return (
    <Routes>
      {ROUTE_LIST.map((route) => {
        const Page = PAGES[route.path]
        return (
          <Route
            key={route.key}
            path={route.path}
            element={
              <PublicRoute>
                <RouteWithLayout>
                  {Page ? <Page /> : <PlaceholderPage title={route.title} branch={route.branch} />}
                </RouteWithLayout>
              </PublicRoute>
            }
          />
        )
      })}
      <Route
        path={ROUTES.sitemap}
        element={
          <RouteWithLayout>
            <SitemapPage />
          </RouteWithLayout>
        }
      />
      <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
    </Routes>
  )
}
