import React from 'react'
import type { ButtonHTMLAttributes } from 'react'
import type { BaseComponentProps } from '../types'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  variants: {
    variant: {
      primary: 'bg-primary-600 text-white hover:bg-primary-700',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700',
      outline: 'border border-gray-300 bg-transparent hover:bg-gray-50',
      ghost: 'hover:bg-gray-100'
    },
    size: {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 py-2',
      lg: 'h-12 px-6 text-lg'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})

export interface ButtonProps 
  extends BaseComponentProps, 
          ButtonHTMLAttributes<HTMLButtonElement>,
          VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <button className={button({ variant, size, className })} {...props}>
      {children}
    </button>
  )
}