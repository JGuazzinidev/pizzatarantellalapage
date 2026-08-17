const serviceItems = [
  {
    title: 'Eventos Privados',
    description:
      'Una experiencia culinaria en vivo para cumpleaños, aniversarios y celebraciones íntimas con sello artesanal.',
  },
  {
    title: 'Corporativos y Festivales',
    description:
      'Servicio gastronómico de alto estándar para reuniones ejecutivas, lanzamientos, activaciones de marca y festivales.',
  },
  {
    title: 'Matrimonios',
    description:
      'Propuesta elegante y romántica diseñada para sorprender a tus invitados en uno de los días más importantes.',
  },
]

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#111111] py-20"
    >
      <div className="ambient-orb left-[-60px] top-[25%] h-48 w-48 bg-[#d69e2e]/20" />
      <div className="ambient-orb right-[-60px] top-[60%] h-52 w-52 bg-[#c53030]/20 [animation-delay:1.6s]" />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#d69e2e]">
            Experiencias Exclusivas
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[#fdfcf8] md:text-5xl">
            Diseñadas para Cada Ocasión
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {serviceItems.map((item) => (
            <article
              key={item.title}
              className="premium-card reveal rounded-2xl border border-[#d69e2e]/30 p-7 text-left transition duration-300 hover:-translate-y-2 hover:border-[#d69e2e] hover:shadow-[0_20px_45px_rgba(0,0,0,0.5)]"
            >
              <h3 className="relative z-10 font-serif text-2xl text-[#fdfcf8]">
                {item.title}
              </h3>
              <p className="relative z-10 mt-4 leading-relaxed text-[#fdfcf8]/80">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
