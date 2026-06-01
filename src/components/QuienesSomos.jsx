export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark text-center mb-12">
          Quiénes somos
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <p className="font-body text-gray-700 text-lg leading-relaxed mb-6">
              Somos <strong className="text-brand">Cristal & Co</strong>, la única
              fábrica de Doble Vidriado Hermético (DVH) en la Costa Atlántica.
              Nacimos con el compromiso de ofrecer vidrios de la más alta calidad,
              combinando tecnología de vanguardia con el trabajo de un equipo local
              apasionado.
            </p>
            <p className="font-body text-gray-700 text-lg leading-relaxed mb-6">
              Desde nuestra planta en Ruta 11, fabricamos y procesamos vidrios para
              aberturas, mamparas, fachadas y proyectos a medida. Contamos con
              maquinaria CNC de precisión que nos permite cortar y procesar vidrio
              con exactitud milimétrica.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { num: 'DVH', label: 'Fabricación propia' },
                { num: 'CNC', label: 'Corte de precisión' },
                { num: '100%', label: 'Calidad garantizada' },
              ].map((item) => (
                <div key={item.label} className="text-center p-4 border border-brand-light rounded-lg">
                  <div className="font-heading font-bold text-2xl text-brand">{item.num}</div>
                  <div className="font-body text-sm text-gray-600 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Grilla: foto ancha arriba + video vertical + foto */}
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/images/webp/IMG_7533.webp"
              alt="Equipo Cristal & Co trabajando con vidrios"
              className="rounded-xl object-cover w-full h-56 col-span-2"
            />
            <video
              src="/images/videos/lavadora.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-xl object-cover w-full h-72"
            />
            <img
              src="/images/webp/IMG_7551.webp"
              alt="Equipo con cascos en planta"
              className="rounded-xl object-cover w-full h-72"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
