import { useEffect, useState } from 'react'
import { messages, whatsappLink } from '../lib/whatsapp'

const navLinks = [
  { label: 'Inicio', href: '#home' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Menú', href: '#menu' },
  { label: 'Servicios', href: '#services' },
  { label: 'Contacto', href: '#contact' },
]

function Navbar() {
  const [activeSection, setActiveSection] = useState('#home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace('#', ''))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0.01 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleMobileLinkClick = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-[#fdfcf8]/60 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-2xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 md:px-8">
        <a
          href="#home"
          className="font-serif text-2xl font-semibold tracking-wide text-[#111111]"
        >
          Tarantella
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#c53030] ${
                activeSection === link.href ? 'text-[#c53030]' : 'text-[#1a1a1a]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink(messages.evento)}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-[#c53030] px-5 py-2.5 text-sm font-semibold text-[#fdfcf8] shadow-[0_12px_26px_rgba(197,48,48,0.35)] transition hover:translate-y-[-2px] hover:bg-[#b02222] md:inline-flex"
          >
            Cotiza tu Evento
          </a>

          <button
            type="button"
            aria-label="Abrir menú de navegación"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-[#111111] md:hidden"
          >
            <span className="text-xl">{isMenuOpen ? '×' : '☰'}</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-black/10 bg-[#fdfcf8]/95 px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleMobileLinkClick}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? 'bg-[#c53030]/10 text-[#c53030]'
                    : 'text-[#1a1a1a] hover:bg-black/5'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLink(messages.evento)}
              target="_blank"
              rel="noreferrer"
              onClick={handleMobileLinkClick}
              className="mt-2 inline-flex justify-center rounded-full bg-[#c53030] px-5 py-2.5 text-sm font-semibold text-[#fdfcf8]"
            >
              Cotiza tu Evento
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar
