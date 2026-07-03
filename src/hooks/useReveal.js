import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add('js')

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [])
}
