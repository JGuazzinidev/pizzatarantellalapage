function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 text-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.45)), url('/media/equipo-tarantella.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-vignette absolute inset-0" />
      <div className="ambient-orb left-[10%] top-[18%] h-44 w-44 bg-[#d69e2e]/30" />
      <div className="ambient-orb right-[12%] top-[58%] h-52 w-52 bg-[#c53030]/25 [animation-delay:1.2s]" />

      <div className="glass-panel reveal relative z-10 mx-auto max-w-4xl rounded-3xl px-6 py-10 shadow-2xl md:px-10 md:py-14">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#d69e2e]">
          Eventos Pizza Tarantella
        </p>
        <h1 className="font-serif text-4xl leading-tight text-[#fdfcf8] md:text-6xl">
          La Auténtica Pizza a la Piedra y Pastas Artesanales en tu Evento
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-[#fdfcf8]/90 md:text-xl">
          Desde Buenos Aires hasta Santiago: recetas de familia y cocina en
          vivo para tu celebración.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-flex rounded-full bg-[#d69e2e] px-7 py-3 text-sm font-semibold text-[#111111] shadow-[0_12px_30px_rgba(214,158,46,0.35)] transition hover:translate-y-[-2px] hover:bg-[#c58f25]"
        >
          Solicita tu Fecha
        </a>
      </div>
    </section>
  )
}

export default Hero
