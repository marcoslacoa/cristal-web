import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const fotos = [
  { src: '/images/gallery/equipo.png', alt: 'Equipo Cristal & Co' },
  { src: '/images/gallery/operario.png', alt: 'Operario en planta' },
  { src: '/images/gallery/produccion.png', alt: 'Línea de producción' },
  { src: '/images/gallery/maquina.png', alt: 'Máquina de procesado' },
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
          Una muestra de lo que fabricamos. Próximamente más proyectos.
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
