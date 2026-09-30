import { useEffect, useState } from 'react'

interface FetchState<T> {
  data: T | undefined
  loading: boolean
  error: Error | undefined
}

/** Runs an async loader once on mount and tracks its state. */
export function useFetch<T>(loader: () => Promise<T>): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: undefined,
    loading: true,
    error: undefined,
  })

  useEffect(() => {
    let cancelled = false
    loader()
      .then((data) => !cancelled && setState({ data, loading: false, error: undefined }))
      .catch((error: Error) => !cancelled && setState({ data: undefined, loading: false, error }))
    return () => {
      cancelled = true
    }
    // The loader is a stable module-level function in every caller.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return state
}
