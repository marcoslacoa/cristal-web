const ventajas = [
  'Precisión milimétrica en cada corte',
  'Cualquier forma: rectángulos, curvas, biseles, muescas',
  'Mínimo desperdicio de material',
  'Ideal para proyectos de arquitectura y diseño de interiores',
  'Tiempos de producción reducidos',
]

export default function CorteCNC() {
  return (
    <section className="section section--dark" style={{ overflow: 'hidden' }}>
      {/* Glow decorativo */}
      <div style={{
        position: 'absolute', bottom: -80, right: -80,
        width: 420, height: 420, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(74,139,135,0.18), transparent 70%)',
        filter: 'blur(8px)', pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', gap: 'clamp(2.5rem, 6vw, 5rem)', alignItems: 'center' }}>

          {/* Texto */}
          <div className="reveal">
            <p className="kicker kicker--light">Tecnología de punta</p>
            <h2 className="h2" style={{ color: '#fff', marginBottom: '1.2rem' }}>
              Corte CNC de precisión
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', color: 'rgba(255,255,255,0.78)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Nuestras máquinas de Control Numérico Computarizado nos permiten procesar vidrio con una exactitud que no tiene comparación. Sin importar la complejidad de la forma, garantizamos un acabado perfecto.
            </p>
            <ul style={{ display: 'grid', gap: '0.85rem' }}>
              {ventajas.map((v) => (
                <li key={v} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <span style={{
                    flexShrink: 0, width: 26, height: 26,
                    display: 'grid', placeItems: 'center',
                    borderRadius: '50%',
                    background: 'rgba(74,139,135,0.25)',
                    color: 'var(--brand)',
                    fontSize: '0.85rem', fontWeight: 700,
                  }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.97rem', lineHeight: 1.5, paddingTop: '0.2rem' }}>{v}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Imágenes */}
          <div className="reveal" data-delay="1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <img
              src="/images/webp/IMG_3641.webp"
              alt="Máquina CNC DISAI en planta"
              style={{ borderRadius: 'var(--radius-sm)', width: '100%', objectFit: 'cover', height: 240, boxShadow: 'var(--shadow-lg)' }}
            />
            <img
              src="/images/webp/IMG_3640.webp"
              alt="Operario en consola CNC Cristal & Co"
              style={{ borderRadius: 'var(--radius-sm)', width: '100%', objectFit: 'cover', height: 240, boxShadow: 'var(--shadow-lg)' }}
            />
            <img
              src="/images/webp/IMG_3637.webp"
              alt="Vista general mesa CNC en planta"
              style={{ borderRadius: 'var(--radius-sm)', width: '100%', objectFit: 'cover', height: 160, gridColumn: '1 / -1', boxShadow: 'var(--shadow-lg)' }}
            />
          </div>

        </div>
      </div>
    </section>
  )
}
