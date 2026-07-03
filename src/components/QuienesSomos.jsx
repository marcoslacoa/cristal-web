const metrics = [
  { value: 'DVH', label: 'Fabricación propia' },
  { value: 'CNC', label: 'Corte de precisión' },
  { value: '100%', label: 'Calidad garantizada' },
  { value: 'A medida', label: 'Cada proyecto' },
]

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="section section--cream">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(2.5rem, 6vw, 5rem)', alignItems: 'center' }}>

          {/* Texto */}
          <div className="reveal">
            <p className="kicker">Quiénes somos</p>
            <h2 className="h2" style={{ marginBottom: '1.5rem' }}>
              La única fábrica de DVH de la Costa Atlántica
            </h2>
            <p className="lead" style={{ marginBottom: '1.2rem' }}>
              Somos <strong style={{ color: 'var(--brand)' }}>Cristal &amp; Co</strong>, nacimos con el compromiso de ofrecer vidrios de la más alta calidad, combinando tecnología de vanguardia con el trabajo de un equipo local apasionado.
            </p>
            <p style={{ fontSize: '1.02rem', color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: '2.4rem' }}>
              Desde nuestra planta en Ruta 11, fabricamos y procesamos vidrios para aberturas, mamparas, barandas y proyectos a medida. Nuestra maquinaria CNC de precisión permite cortar vidrio con exactitud milimétrica.
            </p>

            {/* Métricas */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              {metrics.map((m, i) => (
                <div
                  key={m.label}
                  className="reveal"
                  data-delay={String(i + 1)}
                  style={{
                    padding: '1.4rem 1.6rem',
                    background: '#fff',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(74,139,135,0.15)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--brand)', lineHeight: 1 }}>
                    {m.value}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--ink-soft)', marginTop: '0.3rem', fontWeight: 500 }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Media grid */}
          <div className="reveal" data-delay="1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <img
              src="/images/webp/IMG_7533.webp"
              alt="Equipo Cristal & Co trabajando con vidrios"
              style={{ borderRadius: 'var(--radius)', objectFit: 'cover', width: '100%', height: 220, gridColumn: '1 / -1' }}
            />
            <video
              src="/images/videos/lavadora.mp4"
              autoPlay loop muted playsInline
              style={{ borderRadius: 'var(--radius-sm)', objectFit: 'cover', width: '100%', height: 280 }}
            />
            <img
              src="/images/webp/IMG_7551.webp"
              alt="Equipo con cascos en planta Cristal & Co"
              style={{ borderRadius: 'var(--radius-sm)', objectFit: 'cover', width: '100%', height: 280 }}
            />
          </div>

        </div>
      </div>
    </section>
  )
}
