import type { DateOption } from './types'

/** "Today, Dec 16" for today's date, otherwise "Tue, Dec 17". */
export function formatDateLabel(date: DateOption): string {
  return date.isToday ? `Today, ${date.label}` : `${date.weekday}, ${date.label}`
}

/** Pier names that are stored with a district suffix, e.g. "Bach Dang Pier (D1)" -> "Bach Dang Pier". */
export function stripDistrictSuffix(name: string): string {
  return name.replace(/ \(.*\)$/, '')
}
