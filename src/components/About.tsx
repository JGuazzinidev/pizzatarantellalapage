function About() {
  return (
    <section id="about" className="bg-[#fdfcf8] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-8">
        <div className="reveal overflow-hidden rounded-3xl shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&q=80&w=1400"
            alt="Pizza artesanal con preparación de masa madre"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="reveal">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#c53030]">
            Legado Tarantella
          </p>
          <h2 className="font-serif text-3xl text-[#111111] md:text-5xl">
            Masa Madre, Elegancia Italiana
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#2f2f2f] md:text-lg">
            En Pizza Tarantella, cada masa fermenta lentamente con nuestra masa
            madre, respetando la técnica napolitana tradicional. Así logramos
            una corteza ligera, aroma profundo y una textura impecable.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#2f2f2f] md:text-lg">
            Llevamos esta propuesta directamente a tu evento con ingredientes
            italianos seleccionados, cocción al fuego y una puesta en escena
            cuidada para celebraciones memorables.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
