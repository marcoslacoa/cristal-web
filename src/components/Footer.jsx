import logo from '/images/cristalycologo.png'

const links = [
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start mb-8">
          {/* Logo */}
          <div>
            <img src={logo} alt="Cristal & Co" className="h-14 w-auto brightness-0 invert mb-3" />
            <p className="font-body text-white/60 text-sm">
              Única fábrica de DVH en la Costa Atlántica
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Navegación
            </h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-body text-white/60 hover:text-brand transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Seguinos
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/cristalyco"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-white/60 hover:text-brand transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/5492254620677"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-white/60 hover:text-brand transition-colors text-sm"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="font-body text-white/40 text-sm">
            © {new Date().getFullYear()} Cristal & Co. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
