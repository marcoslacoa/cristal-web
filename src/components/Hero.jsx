export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-dark opacity-50" />

      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1 className="font-heading font-bold text-4xl md:text-6xl mb-4 leading-tight drop-shadow-lg">
          Única fábrica de DVH<br />en la Costa Atlántica
        </h1>
        <p className="font-body text-lg md:text-xl mb-8 text-white/90 drop-shadow">
          Fabricamos vidrios de alta calidad para aberturas, mamparas y más.
          Tecnología de punta al servicio de tu proyecto.
        </p>
        <a
          href="#contacto"
          className="inline-block bg-white text-brand font-heading font-semibold px-8 py-3 rounded-full hover:bg-brand-light transition-colors duration-200 text-base"
        >
          Contactanos
        </a>
      </div>
    </section>
  )
}
