import { useState, useEffect } from 'react'
import logo from '/images/cristalycologo.png'

const links = [
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#inicio">
          <img
            src={logo}
            alt="Cristal & Co"
            className={`h-12 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`font-body font-medium text-sm transition-colors duration-200 ${
                  scrolled
                    ? 'text-dark hover:text-brand'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className={`block h-0.5 w-6 transition-all duration-300 ${scrolled ? 'bg-dark' : 'bg-white'} ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 transition-all duration-300 ${scrolled ? 'bg-dark' : 'bg-white'} ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 transition-all duration-300 ${scrolled ? 'bg-dark' : 'bg-white'} ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer — siempre blanco */}
      {open && (
        <ul className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-dark hover:text-brand font-medium text-base"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
