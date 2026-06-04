import { useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const INFO = [
  { label: 'Dirección', value: 'Ruta 11 Km 396 - Colectora 3 - Galpón 18 y 19' },
  { label: 'Email', value: 'cristalyco.fabricadevidrios@gmail.com', href: 'mailto:cristalyco.fabricadevidrios@gmail.com' },
  { label: 'Teléfono', value: '2254-62-0677', href: 'tel:+5492254620677' },
  { label: 'WhatsApp', value: '+54 9 2254 62-0677', href: 'https://wa.me/5492254620677' },
  { label: 'Instagram', value: '@cristalyco', href: 'https://instagram.com/cristalyco' },
]

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEnviando(true)
    setError('')
    try {
      const res = await fetch(`${API_URL}/pedidos_vidrio/contacto-web/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setEnviado(true)
        setForm({ nombre: '', email: '', telefono: '', mensaje: '' })
      } else {
        const data = await res.json()
        setError(data.error || 'Ocurrió un error. Intente más tarde.')
      }
    } catch {
      setError('No se pudo conectar con el servidor. Intente más tarde.')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section id="contacto" className="py-20 bg-brand-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark text-center mb-4">
          Contacto
        </h2>
        <p className="font-body text-gray-600 text-center mb-12 max-w-xl mx-auto">
          Escribinos y te respondemos a la brevedad.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulario */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {enviado ? (
              <div className="text-center py-12">
                <div className="text-brand text-5xl mb-4">✓</div>
                <h3 className="font-heading font-bold text-xl text-dark mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="font-body text-gray-600">
                  Te respondemos a la brevedad.
                </p>
                <button
                  onClick={() => setEnviado(false)}
                  className="mt-6 text-brand font-body font-medium underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { name: 'nombre', label: 'Nombre', type: 'text', placeholder: 'Tu nombre' },
                  { name: 'email', label: 'Email', type: 'email', placeholder: 'tu@email.com' },
                  { name: 'telefono', label: 'Teléfono', type: 'tel', placeholder: '(0000) 000-0000' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block font-body font-medium text-dark text-sm mb-1">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.name !== 'telefono'}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 font-body text-dark focus:outline-none focus:ring-2 focus:ring-brand text-sm"
                    />
                  </div>
                ))}
                <div>
                  <label className="block font-body font-medium text-dark text-sm mb-1">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="¿En qué podemos ayudarte?"
                    required
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 font-body text-dark focus:outline-none focus:ring-2 focus:ring-brand text-sm resize-none"
                  />
                </div>
                {error && (
                  <p className="font-body text-red-500 text-sm">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={enviando}
                  className="w-full bg-brand text-white font-heading font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity duration-200 disabled:opacity-60"
                >
                  {enviando ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            )}
          </div>

          {/* Info de contacto */}
          <div className="flex flex-col justify-center gap-6">
            {INFO.map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="font-heading font-semibold text-brand text-xs uppercase tracking-widest mb-0.5">
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="font-body text-dark hover:text-brand transition-colors duration-200"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="font-body text-dark">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
