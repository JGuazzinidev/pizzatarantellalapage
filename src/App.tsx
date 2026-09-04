import { useEffect } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Services from './components/Services'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  useEffect(() => {
    document.documentElement.classList.add('reveal-enabled')
    const revealElements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    revealElements.forEach((element) => observer.observe(element))
    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('reveal-enabled')
    }
  }, [])

  return (
    <div className="premium-grain relative bg-[#fdfcf8] text-[#111111]">
      <div className="ambient-orb left-[-120px] top-[180px] z-0 h-64 w-64 bg-[#c53030]/20" />
      <div className="ambient-orb right-[-120px] top-[55%] z-0 h-72 w-72 bg-[#d69e2e]/20 [animation-delay:1.5s]" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Menu />
        <Services />
        <Contact />
      </main>
      <footer className="relative z-10 bg-[#111111] px-4 py-12 text-[#fdfcf8]/80 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center">
          <div>
            <p className="font-serif text-2xl text-[#fdfcf8]">Tarantella</p>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[#d69e2e]">
              Pizza e Pasta
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 text-sm">
            <a
              href="https://wa.me/56937191121"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#d69e2e]"
            >
              Pedidos y delivery: +569 3719 1121
            </a>
            <a
              href="#contact"
              className="transition hover:text-[#d69e2e]"
            >
              Cotiza tu evento
            </a>
          </div>

          <div className="w-full border-t border-white/10 pt-6 text-xs text-[#fdfcf8]/60">
            <p>
              © {new Date().getFullYear()} Eventos Pizza Tarantella. Todos los
              derechos reservados.
            </p>
            <p className="mt-2">
              Desarrollado por{' '}
              <a
                href="https://wa.me/56973621648"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#d69e2e] transition hover:text-[#fdfcf8]"
              >
                Jguazzini
              </a>{' '}
              ·{' '}
              <a
                href="tel:+56973621648"
                className="transition hover:text-[#d69e2e]"
              >
                +56 9 7362 1648
              </a>
            </p>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  )
}

export default App
