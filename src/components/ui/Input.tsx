import { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, className = '', ...rest },
  ref,
) {
  const inputId = id ?? rest.name
  return (
    <div className="flex flex-col gap-space-xs">
      {label && (
        <label htmlFor={inputId} className="text-body-sm font-semibold text-on-surface-variant">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        className={`w-full rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 text-body-md text-on-surface placeholder:text-outline focus:border-teal-flow focus:ring-2 focus:ring-teal-flow/20 ${className}`.trim()}
        {...rest}
      />
    </div>
  )
})

export default Input
