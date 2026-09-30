/** 15000 -> "VND 15,000" */
export function formatVnd(amount: number): string {
  return `VND ${amount.toLocaleString('en-US')}`
}
