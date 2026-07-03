import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const fotos = [
  { src: '/images/webp/IMG_6781.webp', alt: 'Cristal & Co — Vidrios Procesados y DVH' },
  { src: '/images/webp/IMG_3635.webp', alt: 'Stock de vidrios en planta' },
  { src: '/images/webp/IMG_6780.webp', alt: 'Máquina DVH Cristal & Co' },
  { src: '/images/webp/IMG_6790.webp', alt: 'Oficina y planta Cristal & Co' },
  { src: '/images/webp/IMG_7543.webp', alt: 'Frente máquina DVH con logo Cristal & Co' },
  { src: '/images/webp/IMG_3643.webp', alt: 'Máquina DVH en operación' },
  { src: '/images/webp/IMG_3642.webp', alt: 'Carga de vidrio en máquina DVH' },
  { src: '/images/webp/IMG_0476.webp', alt: 'Sellado de DVH — detalle de manos' },
  { src: '/images/webp/IMG_3649.webp', alt: 'Armado de DVH en mesa' },
  { src: '/images/webp/dvh_linea_01.webp', alt: 'Línea de producción DVH' },
  { src: '/images/webp/dvh_linea_02.webp', alt: 'Línea DVH — vista general' },
  { src: '/images/webp/dvh_detalle_ensamble.webp', alt: 'Detalle ensamble DVH — marco espaciador' },
  { src: '/images/webp/dvh_maquina_rodillos.webp', alt: 'Máquina DVH — sistema de rodillos' },
  { src: '/images/webp/dvh_unidades_terminadas.webp', alt: 'Unidades DVH terminadas en rack' },
  { src: '/images/webp/dvh_marcos_aluminio.webp', alt: 'DVH con marcos de aluminio negro' },
  { src: '/images/webp/dvh_planta_general.webp', alt: 'Planta DVH — vista general' },
  { src: '/images/webp/dvh_control_calidad.webp', alt: 'Control de calidad DVH' },
  { src: '/images/webp/IMG_3640.webp', alt: 'Operario en consola CNC' },
  { src: '/images/webp/IMG_3641.webp', alt: 'Máquina CNC DISAI' },
  { src: '/images/webp/IMG_7112.webp', alt: 'Vidrios terminados en rack' },
  { src: '/images/webp/IMG_7113.webp', alt: 'Línea de transportadores de vidrio' },
  { src: '/images/webp/IMG_7114.webp', alt: 'Transportadores en planta' },
  { src: '/images/webp/IMG_7554.webp', alt: 'Vidrios grandes con puente grúa' },
  { src: '/images/webp/IMG_7559.webp', alt: 'Operarios manipulando vidrios en rack' },
  { src: '/images/webp/IMG_7533.webp', alt: 'Equipo Cristal & Co' },
  { src: '/images/webp/IMG_7544.webp', alt: 'Operarios con puente grúa' },
  { src: '/images/webp/IMG_7551.webp', alt: 'Equipo en planta con cascos' },
  { src: '/images/webp/IMG_7555.webp', alt: 'Columna Cristal & Co en planta' },
  { src: '/images/webp/IMG_7560.webp', alt: 'Detalle canto de vidrio cortado' },
  { src: '/images/webp/IMG_7561.webp', alt: 'Ventosa de manipulación de vidrio' },
]

const INITIAL_COUNT = 12

export default function Galeria() {
  const [index, setIndex] = useState(-1)
  const [hovered, setHovered] = useState(-1)
  const [expanded, setExpanded] = useState(false)

  const visibles = expanded ? fotos : fotos.slice(0, INITIAL_COUNT)

  return (
    <section id="trabajos" className="section section--cream">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="kicker" style={{ justifyContent: 'center' }}>Nuestros trabajos</p>
          <h2 className="h2" style={{ marginBottom: '1rem' }}>
            Planta, maquinaria y equipo
          </h2>
          <p className="lead">
            Todo lo que hay detrás de cada vidrio que fabricamos.
          </p>
        </div>

        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '0.75rem',
          }}
        >
          {visibles.map((foto, i) => (
            <button
              key={foto.src}
              onClick={() => setIndex(i)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(-1)}
              style={{
                display: 'block',
                width: '100%',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
                border: 'none',
                padding: 0,
                background: 'none',
                aspectRatio: '4 / 3',
              }}
              aria-label={`Ver ${foto.alt}`}
            >
              <img
                src={foto.src}
                alt={foto.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s var(--ease)',
                  transform: hovered === i ? 'scale(1.06)' : 'scale(1)',
                }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'rgba(26,26,26,0.45)',
                opacity: hovered === i ? 1 : 0,
                transition: 'opacity 0.4s ease',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  border: '1.5px solid rgba(255,255,255,0.6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem', color: '#fff',
                }}>+</span>
              </div>
            </button>
          ))}
        </div>

        {!expanded && fotos.length > INITIAL_COUNT && (
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              onClick={() => setExpanded(true)}
              className="btn btn--dark"
            >
              Ver más fotos ({fotos.length - INITIAL_COUNT} restantes)
            </button>
          </div>
        )}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={fotos}
      />
    </section>
  )
}
