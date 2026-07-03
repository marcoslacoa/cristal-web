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
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    transition: 'background 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease',
    background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    boxShadow: scrolled ? '0 2px 24px rgba(26,26,26,0.08)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(26,26,26,0.06)' : 'none',
  }

  const linkColor = scrolled ? 'var(--dark)' : 'rgba(255,255,255,0.92)'
  const linkHoverColor = scrolled ? 'var(--brand)' : '#fff'

  return (
    <nav style={navStyle} aria-label="Navegación principal">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBlock: '0.9rem' }}>
        <a href="#inicio">
          <img
            src={logo}
            alt="Cristal & Co"
            style={{
              height: 44, width: 'auto',
              filter: scrolled ? 'none' : 'brightness(0) invert(1)',
              transition: 'filter 0.3s ease',
            }}
          />
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '2.2rem', listStyle: 'none' }} className="hidden md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  color: linkColor,
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  transition: 'color 0.2s ease',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={e => e.target.style.color = linkHoverColor}
                onMouseLeave={e => e.target.style.color = linkColor}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a href="#contacto" className="btn btn--primary hidden md:inline-flex" style={{ padding: '0.6rem 1.3rem', fontSize: '0.88rem' }}>
          Pedí presupuesto
        </a>

        {/* Hamburger mobile */}
        <button
          style={{ display: 'flex', flexDirection: 'column', gap: 5, padding: 8, borderRadius: 8 }}
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {[0,1,2].map((i) => (
            <span key={i} style={{
              display: 'block', height: 2, width: 24, borderRadius: 2,
              background: scrolled ? 'var(--dark)' : '#fff',
              transition: 'all 0.3s ease',
              transformOrigin: 'center',
              transform: open
                ? i === 0 ? 'rotate(45deg) translate(5px, 5px)' : i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'scaleX(0)'
                : 'none',
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{ background: '#fff', borderTop: '1px solid rgba(26,26,26,0.06)', padding: '1rem var(--pad-x) 1.5rem' }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{ display: 'block', padding: '0.7rem 0', color: 'var(--dark)', fontWeight: 500, fontSize: '1.05rem', borderBottom: '1px solid rgba(26,26,26,0.05)' }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li style={{ marginTop: '1rem' }}>
              <a href="#contacto" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setOpen(false)}>
                Pedí presupuesto
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
