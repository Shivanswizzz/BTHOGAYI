'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ReactNode, forwardRef } from 'react'

interface ButtonProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'outline' | 'ghost' | 'destructive'
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ 
  children, 
  className, 
  size = 'md', 
  variant = 'default',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}, ref) => {
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  const variantClasses = {
    default: 'bg-purple-600 hover:bg-purple-700 text-white',
    outline: 'border border-white/20 text-white hover:bg-white/10',
    ghost: 'text-white hover:bg-white/10',
    destructive: 'bg-red-600 hover:bg-red-700 text-white'
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2',
        sizeClasses[size],
        variantClasses[variant],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      whileHover={!disabled ? { scale: 1.02 } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      {...props}
    >
      {children}
    </motion.button>
  )
})

Button.displayName = 'Button'