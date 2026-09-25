'use client'

import { useEffect } from 'react'

export default function CalInit() {
  useEffect(() => {
    if ((window as any).Cal) return
    ;(function (C: any, A: string, L: string) {
      const p = (a: any, ar: IArguments) => a.q.push(ar)
      const d = C.document
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal
          const ar = arguments
          if (!cal.loaded) {
            cal.ns = {}
            cal.q = cal.q || []
            d.head.appendChild(d.createElement('script')).src = A
            cal.loaded = true
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments)
            }
            const namespace = ar[1]
            api.q = api.q || []
            typeof namespace === 'string'
              ? (cal.ns[namespace] = api) && p(api, ar)
              : p(cal, ar)
            return
          }
          p(cal, ar)
        }
    })(window, 'https://app.cal.com/embed/embed.js', 'init')

    const cal = (window as any).Cal
    cal('init', { origin: 'https://cal.com' })
    cal('ui', {
      styles: { branding: { brandColor: '#D4A24C' } },
      hideEventTypeDetails: false,
      layout: 'month_view',
    })
  }, [])

  return null
}
