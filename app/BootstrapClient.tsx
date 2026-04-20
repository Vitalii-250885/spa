'use client'

import { useEffect } from 'react'

export const BootstrapClient = () => {
  useEffect(() => {
    import('bootstrap')
  }, [])

  return null
}
