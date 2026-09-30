import { useEffect } from 'react'

const APP_NAME = 'Smart Waterbus'

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — ${APP_NAME}` : APP_NAME
  }, [title])
}
