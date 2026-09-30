/** Resolves with `value` after a short delay, mimicking network latency. */
export function withDelay<T>(value: T, ms = 150): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms))
}
