'use client'

import { ReactNode } from 'react'

interface Props {
  className?: string
  children?: ReactNode
}

/**
 * Opens the booking-choice modal (BookingModal).
 * BookingModal listens for the 'open-booking-modal' event and routes
 * the user to either cal.com/michaelvitulano/coaching-consultation
 * or cal.com/michaelvitulano/therapy based on their pick.
 */
export default function CalButton({
  className,
  children = 'Book a Free Consultation',
}: Props) {
  function handleClick() {
    window.dispatchEvent(new Event('open-booking-modal'))
  }

  return (
    <button onClick={handleClick} className={`cursor-pointer ${className ?? ''}`}>
      {children}
    </button>
  )
}
