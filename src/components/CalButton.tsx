'use client'

import { ReactNode } from 'react'

interface Props {
  className?: string
  children?: ReactNode
}

/**
 * Opens the Cal.com popup scheduler for michaelvitulano.
 * CalInit must be mounted (via RootLayout) before this renders.
 */
export default function CalButton({
  className,
  children = 'Book a Free Consultation',
}: Props) {
  return (
    <button
      data-cal-link="michaelvitulano"
      data-cal-config='{"layout":"month_view"}'
      className={`cursor-pointer ${className ?? ''}`}
    >
      {children}
    </button>
  )
}
