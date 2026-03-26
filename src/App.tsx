import { useEffect } from 'react'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Hero from './components/Hero'
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
        <Services />
        <ContactForm />
      </main>
      <footer className="relative z-10 bg-[#111111] px-4 py-8 text-center text-sm text-[#fdfcf8]/80 md:px-8">
        Eventos Pizza Tarantella · +56937191121
      </footer>
      <WhatsAppButton />
    </div>
  )
}

export default App
