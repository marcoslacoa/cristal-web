import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const fotos = [
  // Planta e infraestructura
  { src: '/images/webp/IMG_6781.webp', alt: 'Cristal & Co — Vidrios Procesados y DVH' },
  { src: '/images/webp/IMG_3635.webp', alt: 'Stock de vidrios en planta' },
  { src: '/images/webp/IMG_6780.webp', alt: 'Máquina DVH Cristal & Co' },
  { src: '/images/webp/IMG_6790.webp', alt: 'Oficina y planta Cristal & Co' },
  // DVH — maquinaria y proceso
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
  // CNC
  { src: '/images/webp/IMG_3640.webp', alt: 'Operario en consola CNC' },
  { src: '/images/webp/IMG_3641.webp', alt: 'Máquina CNC DISAI' },
  // Vidrios y producción
  { src: '/images/webp/IMG_7112.webp', alt: 'Vidrios terminados en rack' },
  { src: '/images/webp/IMG_7113.webp', alt: 'Línea de transportadores de vidrio' },
  { src: '/images/webp/IMG_7114.webp', alt: 'Transportadores en planta' },
  { src: '/images/webp/IMG_7554.webp', alt: 'Vidrios grandes con puente grúa' },
  { src: '/images/webp/IMG_7559.webp', alt: 'Operarios manipulando vidrios en rack' },
  // Equipo
  { src: '/images/webp/IMG_7533.webp', alt: 'Equipo Cristal & Co' },
  { src: '/images/webp/IMG_7544.webp', alt: 'Operarios con puente grúa' },
  { src: '/images/webp/IMG_7551.webp', alt: 'Equipo en planta con cascos' },
  // Detalles / marca
  { src: '/images/webp/IMG_7555.webp', alt: 'Columna Cristal & Co en planta' },
  { src: '/images/webp/IMG_7560.webp', alt: 'Detalle canto de vidrio cortado' },
  { src: '/images/webp/IMG_7561.webp', alt: 'Ventosa de manipulación de vidrio' },
]

export default function Galeria() {
  const [index, setIndex] = useState(-1)

  return (
    <section id="trabajos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark text-center mb-4">
          Nuestros trabajos
        </h2>
        <p className="font-body text-gray-600 text-center mb-12 max-w-xl mx-auto">
          Planta, maquinaria y equipo — todo lo que hay detrás de cada vidrio que fabricamos.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {fotos.map((foto, i) => (
            <button
              key={foto.src}
              onClick={() => setIndex(i)}
              className="overflow-hidden rounded-xl group focus:outline-none focus:ring-2 focus:ring-brand"
            >
              <img
                src={foto.src}
                alt={foto.alt}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={fotos}
        />
      </div>
    </section>
  )
}
