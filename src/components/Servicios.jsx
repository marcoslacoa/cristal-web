const servicios = [
  {
    titulo: 'DVH — Doble Vidriado Hermético',
    descripcion:
      'Somos la única fábrica de DVH en la Costa Atlántica. El doble vidriado hermético mejora el aislamiento térmico y acústico, reduciendo el consumo energético y el ruido exterior.',
    video: '/images/videos/dvh.mp4',
    tag: 'Exclusivo región',
  },
  {
    titulo: 'Vidrios para aberturas y mamparas',
    descripcion:
      'Producimos vidrios laminados, templados y espejos para todo tipo de aberturas y mamparas de baño. Trabajamos con carpinterías de aluminio, PVC y madera en medidas estándar y a medida.',
    imagen: '/images/webp/IMG_7112.webp',
    alt: 'Vidrios terminados en rack para aberturas',
    tag: 'Alta calidad',
  },
  {
    titulo: 'Barandas, balcones y escaleras',
    descripcion:
      'Fabricamos barandas y vidrios estructurales para balcones y escaleras en vidrio templado o laminado. Soluciones seguras, estéticas y modernas para proyectos residenciales y comerciales.',
    imagen: '/images/webp/baranda.avif',
    alt: 'Vidrio templado para barandas y balcones',
    tag: 'Diseño y seguridad',
  },
  {
    titulo: 'Corte CNC de precisión',
    descripcion:
      'Nuestras máquinas CNC permiten cortar vidrio con precisión milimétrica en cualquier forma: rectangulares, curvos, con muescas o biseles. Ideal para proyectos de diseño y arquitectura.',
    imagen: '/images/webp/IMG_3637.webp',
    alt: 'Mesa de corte CNC DISAI en planta Cristal & Co',
    tag: 'Tecnología de punta',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="section">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="kicker" style={{ justifyContent: 'center' }}>Nuestros servicios</p>
          <h2 className="h2" style={{ marginBottom: '1rem' }}>
            Calidad y tecnología para cada proyecto
          </h2>
          <p className="lead">
            Desde la fabricación hasta la entrega, cubrimos todo lo que tu obra necesita.
          </p>
        </div>

        {/* Grid 2×2 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
          gap: '1.5rem',
        }}>
          {servicios.map((s, i) => (
            <article
              key={s.titulo}
              className="card reveal"
              data-delay={String((i % 2) + 1)}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {/* Media */}
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius) var(--radius) 0 0' }}>
                {s.video ? (
                  <video
                    src={s.video}
                    autoPlay loop muted playsInline
                    style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }}
                  />
                ) : (
                  <img
                    src={s.imagen}
                    alt={s.alt}
                    style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block', transition: 'transform 0.5s var(--ease)' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                )}
                {/* Tag */}
                {s.tag && (
                  <span style={{
                    position: 'absolute', top: '1rem', left: '1rem',
                    background: 'var(--brand)', color: '#fff',
                    fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '0.35rem 0.85rem', borderRadius: 999,
                  }}>
                    {s.tag}
                  </span>
                )}
              </div>

              {/* Texto */}
              <div style={{ padding: '1.8rem 2rem 2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.25rem', color: 'var(--dark)', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                  {s.titulo}
                </h3>
                <p style={{ fontSize: '0.97rem', color: 'var(--ink-soft)', lineHeight: 1.7, flex: 1 }}>
                  {s.descripcion}
                </p>

                {/* Línea decorativa */}
                <div style={{ marginTop: '1.4rem', height: 3, width: 48, borderRadius: 3, background: 'var(--brand)', opacity: 0.5 }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
