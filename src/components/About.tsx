function About() {
  return (
    <section id="about" className="bg-[#fdfcf8] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-8">
        <div className="reveal overflow-hidden rounded-3xl shadow-2xl">
          <img
            src="/media/fachada-tarantella.jpeg"
            alt="Fachada del local Tarantella Pizza e Pasta"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="reveal">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#c53030]">
            Familia Tarantella
          </p>
          <h2 className="font-serif text-3xl text-[#111111] md:text-5xl">
            De Barrio Flores a tu Celebración
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#2f2f2f] md:text-lg">
            Nos iniciamos allá por los años 90 en Buenos Aires, Barrio Flores.
            Nuestra historia se consolidó en plena pandemia en Santiago, Barrio
            Ñuñoa —hoy nuestro local de producción— con el fin de llevar a cada
            hogar la auténtica y exquisita pizza a la piedra.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#2f2f2f] md:text-lg">
            Nos caracteriza la pasión por la cocina y la dedicación en cada
            detalle de los ingredientes. Tarantella fue creciendo gracias a la
            fidelidad y el cariño de cada uno de ustedes, y hoy nos
            especializamos en eventos y catering, llevando nuestras recetas de
            pizzas y pastas a donde nos necesites.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
