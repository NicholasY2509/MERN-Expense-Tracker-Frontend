import React, { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, className, ...props }, ref) => {
        return (
            <div className='flex flex-col gap-1.5'>
                <label className='text-sm font-medium text-slate-700'>
                    {label}
                </label>
                <input
                    ref={ref}
                    className={`
                        px-3 py-2 rounded-md border text-sm outline-hidden transition-all
                        ${error
                            ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                            : 'border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary'
                        }
                        disabled:opacity-50 disabled:cursor-not-allowed
                        ${className}
                    `}
                    {...props}
                />
                {error && (
                    <span className='text-xs text-red-500'>{error}</span>
                )}
            </div>
        )
    }
)

Input.displayName = 'Input'

export default Input
