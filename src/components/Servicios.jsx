const servicios = [
  {
    titulo: 'DVH — Doble Vidriado Hermético',
    descripcion:
      'Somos la única fábrica de DVH en la Costa Atlántica. El doble vidriado hermético mejora el aislamiento térmico y acústico de cualquier abertura, reduciendo el consumo energético y el ruido exterior.',
    video: '/images/videos/dvh.mp4',
  },
  {
    titulo: 'Vidrios para aberturas y mamparas',
    descripcion:
      'Producimos vidrios laminados, templados y espejos para todo tipo de aberturas y mamparas de baño. Trabajamos con carpinterías de aluminio, PVC y madera en medidas estándar y a medida.',
    imagen: '/images/webp/IMG_7112.webp',
    alt: 'Vidrios terminados en rack para aberturas',
  },
  {
    titulo: 'Corte CNC de precisión',
    descripcion:
      'Nuestras máquinas CNC permiten cortar vidrio con precisión milimétrica en cualquier forma: rectangulares, curvos, con muescas o biseles. Ideal para proyectos de diseño y arquitectura.',
    imagen: '/images/webp/IMG_3637.webp',
    alt: 'Mesa de corte CNC DISAI en planta Cristal & Co',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 bg-brand-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark text-center mb-4">
          Nuestros servicios
        </h2>
        <p className="font-body text-gray-600 text-center mb-12 max-w-xl mx-auto">
          Calidad y tecnología para cada proyecto, desde la fabricación hasta la entrega.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {servicios.map((s) => (
            <div
              key={s.titulo}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {s.video ? (
                <video
                  src={s.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-72 object-cover"
                />
              ) : (
                <img
                  src={s.imagen}
                  alt={s.alt}
                  className="w-full h-72 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">
                  {s.titulo}
                </h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">
                  {s.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
