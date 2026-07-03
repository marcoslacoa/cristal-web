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

  const inputStyle = {
    width: '100%',
    border: '1.5px solid rgba(26,26,26,0.12)',
    borderRadius: 'var(--radius-sm)',
    padding: '0.75rem 1rem',
    fontSize: '0.95rem',
    color: 'var(--dark)',
    background: 'var(--cream)',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    fontFamily: 'inherit',
  }

  return (
    <section id="contacto" className="section section--dark" style={{ overflow: 'hidden' }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', top: -100, left: -100,
        width: 450, height: 450, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(74,139,135,0.15), transparent 70%)',
        filter: 'blur(8px)', pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-head section-head--center reveal">
          <p className="kicker kicker--light" style={{ justifyContent: 'center' }}>Contacto</p>
          <h2 className="h2" style={{ color: '#fff', marginBottom: '1rem' }}>
            Hablemos de tu proyecto
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Escribinos y te respondemos a la brevedad.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'start' }}>

          {/* Formulario */}
          <div
            className="reveal"
            style={{
              background: '#fff',
              borderRadius: 'var(--radius)',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            {enviado ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--brand-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem', fontSize: '1.6rem', color: 'var(--brand)' }}>
                  ✓
                </div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.3rem', color: 'var(--dark)', marginBottom: '0.5rem' }}>
                  ¡Mensaje enviado!
                </h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: '0.97rem' }}>
                  Te respondemos a la brevedad.
                </p>
                <button
                  onClick={() => setEnviado(false)}
                  style={{ marginTop: '1.4rem', color: 'var(--brand)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline', textUnderlineOffset: 3 }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {[
                  { name: 'nombre', label: 'Nombre', type: 'text', placeholder: 'Tu nombre', required: true },
                  { name: 'email', label: 'Email', type: 'email', placeholder: 'tu@email.com', required: true },
                  { name: 'telefono', label: 'Teléfono', type: 'tel', placeholder: 'Tu teléfono', required: false },
                ].map((f) => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontSize: '0.83rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.4rem', letterSpacing: '0.01em' }}>
                      {f.label} {f.required && <span style={{ color: 'var(--brand)' }}>*</span>}
                    </label>
                    <input
                      type={f.type}
                      name={f.name}
                      value={form[f.name]}
                      onChange={handleChange}
                      placeholder={f.placeholder}
                      required={f.required}
                      style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = 'var(--brand)'; e.target.style.boxShadow = '0 0 0 3px rgba(74,139,135,0.12)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(26,26,26,0.12)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontSize: '0.83rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.4rem', letterSpacing: '0.01em' }}>
                    Mensaje <span style={{ color: 'var(--brand)' }}>*</span>
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="¿En qué podemos ayudarte?"
                    required
                    rows={4}
                    style={{ ...inputStyle, resize: 'none' }}
                    onFocus={e => { e.target.style.borderColor = 'var(--brand)'; e.target.style.boxShadow = '0 0 0 3px rgba(74,139,135,0.12)' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(26,26,26,0.12)'; e.target.style.boxShadow = 'none' }}
                  />
                </div>
                {error && (
                  <p style={{ color: '#e53e3e', fontSize: '0.88rem' }}>{error}</p>
                )}
                <button
                  type="submit"
                  disabled={enviando}
                  className="btn btn--primary"
                  style={{ width: '100%', justifyContent: 'center', opacity: enviando ? 0.65 : 1 }}
                >
                  {enviando ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            )}
          </div>

          {/* Info de contacto */}
          <div className="reveal" data-delay="1" style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            {INFO.map((item) => (
              <div key={item.label}>
                <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--brand)', marginBottom: '0.3rem' }}>
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--brand)'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.85)'}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>{item.value}</span>
                )}
              </div>
            ))}

            {/* CTA WhatsApp */}
            <a
              href="https://wa.me/5492254620677"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              style={{ marginTop: '0.5rem', width: 'fit-content' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escribinos por WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
