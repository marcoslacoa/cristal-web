const badges = [
  'Única fábrica de DVH en la Costa Atlántica',
  'Corte CNC de precisión',
  'Fabricación a medida',
]

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--dark)',
        paddingTop: '6rem',
        paddingBottom: '4rem',
      }}
    >
      {/* Video */}
      <video
        src="/images/videos/hero.mp4"
        autoPlay loop muted playsInline
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          transform: 'scale(1.04)',
          animation: 'heroZoom 14s ease-out forwards',
        }}
      />

      {/* Overlay doble */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(105deg, rgba(26,26,26,0.94) 0%, rgba(26,26,26,0.82) 55%, rgba(26,26,26,0.55) 100%), linear-gradient(to top, rgba(26,26,26,0.88), transparent 55%)',
      }} />

      {/* Glow brand */}
      <div style={{
        position: 'absolute',
        width: 380, height: 380,
        top: -100, right: -80,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(74,139,135,0.22), transparent 70%)',
        filter: 'blur(6px)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Contenido */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 860 }}>
          {/* Kicker */}
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#fff',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.25)',
            padding: '0.45rem 1rem', borderRadius: 999,
            backdropFilter: 'blur(6px)',
            marginBottom: '1.6rem',
            animation: 'fadeUp 0.8s var(--ease) both',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--brand)', boxShadow: '0 0 0 4px rgba(74,139,135,0.3)', flexShrink: 0 }} />
            Cristal &amp; Co — Vidrios de alta calidad
          </span>

          <h1 className="display" style={{
            color: '#fff', marginBottom: '1.4rem', maxWidth: '14ch',
            animation: 'fadeUp 0.8s var(--ease) 0.1s both',
          }}>
            Única fábrica de DVH en la Costa Atlántica
          </h1>

          <p style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.28rem)',
            color: 'rgba(255,255,255,0.85)',
            maxWidth: '50ch',
            lineHeight: 1.7,
            marginBottom: '2.2rem',
            textShadow: '0 1px 4px rgba(0,0,0,0.8)',
            animation: 'fadeUp 0.8s var(--ease) 0.2s both',
          }}>
            Fabricamos vidrios para aberturas, mamparas, barandas y más.
            Tecnología CNC de precisión al servicio de tu proyecto.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '0.9rem',
            marginBottom: '2.4rem',
            animation: 'fadeUp 0.8s var(--ease) 0.3s both',
          }}>
            <a href="#contacto" className="btn btn--primary">Contactanos</a>
            <a href="#servicios" className="btn btn--ghost">Nuestros servicios</a>
          </div>

          {/* Badges */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '0.65rem',
            animation: 'fadeUp 0.8s var(--ease) 0.4s both',
          }}>
            {badges.map((b, i) => (
              <span key={b} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                padding: '0.5rem 1rem',
                borderRadius: 999,
                fontSize: '0.88rem', fontWeight: 600, color: '#fff',
                background: 'rgba(255,255,255,0.09)',
                border: '1px solid rgba(255,255,255,0.18)',
                backdropFilter: 'blur(8px)',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--brand)', flexShrink: 0 }} />
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '1.6rem', left: '50%',
        transform: 'translateX(-50%)',
        width: 24, height: 40,
        border: '2px solid rgba(255,255,255,0.4)',
        borderRadius: 14, zIndex: 2,
        display: 'flex', justifyContent: 'center',
        paddingTop: 7,
      }}>
        <span style={{
          width: 4, height: 8, borderRadius: 4,
          background: '#fff',
          animation: 'scrollDot 1.6s var(--ease) infinite',
        }} />
      </div>

      <style>{`
        @keyframes heroZoom { to { transform: scale(1); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: none; } }
        @keyframes scrollDot {
          0% { opacity: 0; transform: translateY(-4px); }
          40% { opacity: 1; }
          100% { opacity: 0; transform: translateY(12px); }
        }
        @media (max-width: 640px) {
          #inicio { padding-top: 7rem; align-items: flex-start; }
        }
      `}</style>
    </section>
  )
}
