import type { ComponentType, ReactNode } from 'react'
import MainLayout from '../layouts/MainLayout'

interface RouteWithLayoutProps {
  children: ReactNode
  layout?: ComponentType<{ children: ReactNode }>
}

export default function RouteWithLayout({
  children,
  layout: Layout = MainLayout,
}: RouteWithLayoutProps) {
  return <Layout>{children}</Layout>
}
