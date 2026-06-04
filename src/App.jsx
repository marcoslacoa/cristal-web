import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuienesSomos from './components/QuienesSomos'
import Servicios from './components/Servicios'
import CorteCNC from './components/CorteCNC'
import Galeria from './components/Galeria'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import WhatsappButton from './components/WhatsappButton'


export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuienesSomos />
        <Servicios />
        <CorteCNC />
        <Galeria />
        <Contacto />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  )
}
