const ventajas = [
  'Precisión milimétrica en cada corte',
  'Cualquier forma: rectángulos, curvas, biseles, muescas',
  'Mínimo desperdicio de material',
  'Ideal para proyectos de arquitectura y diseño de interiores',
  'Tiempos de producción reducidos',
]

export default function CorteCNC() {
  return (
    <section className="py-20 bg-brand">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="text-white">
            <span className="font-heading font-semibold text-white/70 text-sm uppercase tracking-widest mb-3 block">
              Tecnología de punta
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Corte CNC de precisión
            </h2>
            <p className="font-body text-white/90 text-lg leading-relaxed mb-8">
              Nuestras máquinas de Control Numérico Computarizado (CNC) nos permiten
              procesar vidrio con una exactitud que no tiene comparación. Sin importar
              la complejidad de la forma, garantizamos un acabado perfecto.
            </p>
            <ul className="space-y-3">
              {ventajas.map((v) => (
                <li key={v} className="flex items-start gap-3 font-body text-white/90">
                  <span className="text-white font-bold mt-0.5">✓</span>
                  {v}
                </li>
              ))}
            </ul>
          </div>

          {/* Imagen */}
          <div>
            <img
              src="/images/maquina.png"
              alt="Máquina CNC Cristal & Co"
              className="rounded-2xl w-full object-cover h-96 shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
