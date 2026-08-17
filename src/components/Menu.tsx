const dishes = [
  {
    name: 'Margherita',
    category: 'Pizza',
    description:
      'Salsa de tomate, mozzarella fundida, tomate cherry, aceitunas y albahaca fresca.',
    image: '/media/margherita.jpeg',
  },
  {
    name: 'Quattro Formaggi',
    category: 'Pizza',
    description:
      'Cuatro quesos seleccionados con cebolla morada y un toque de orégano.',
    image: '/media/quattro-formaggi.jpeg',
  },
  {
    name: 'Gamberetto',
    category: 'Pizza',
    description:
      'Camarones, aceitunas verdes, pimiento rojo, tomate cherry y albahaca.',
    image: '/media/gamberetto.jpeg',
  },
  {
    name: 'Fontana di Pasta',
    category: 'Pasta',
    description:
      'Bandeja para compartir con salsas bolognesa, blanca y pesto de espinaca.',
    image: '/media/fontana-di-pasta.jpeg',
  },
  {
    name: 'Gnocchi Bolognesa',
    category: 'Pasta',
    description:
      'Ñoquis caseros con salsa bolognesa de cocción lenta y parmesano en hebras.',
    image: '/media/gnocchi-bolognesa.jpeg',
  },
  {
    name: 'Canelones',
    category: 'Pasta',
    description:
      'Rellenos de espinaca o bolognesa, gratinados al horno con salsa de la casa.',
    image: '/media/canelones.jpeg',
  },
]

function Menu() {
  return (
    <section id="menu" className="relative bg-[#fdfcf8] py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#c53030]">
            Nuestra Carta
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[#111111] md:text-5xl">
            Pizza e Pasta
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#2f2f2f]">
            Preparaciones artesanales que llevamos a tu evento, tal como salen
            de nuestro horno en Tarantella.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <article
              key={dish.name}
              className="reveal group overflow-hidden rounded-3xl bg-white shadow-[0_18px_40px_rgba(0,0,0,0.10)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_55px_rgba(0,0,0,0.18)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image}
                  alt={`${dish.name} de Tarantella`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-full bg-[#111111]/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#d69e2e] backdrop-blur">
                  {dish.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl text-[#111111]">
                  {dish.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#2f2f2f]">
                  {dish.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-14 grid items-center gap-8 rounded-3xl bg-[#111111] p-6 md:grid-cols-2 md:p-10">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <video
              src="/media/tarantella-video.mp4"
              poster="/media/fachada-tarantella.jpeg"
              controls
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#d69e2e]">
              Cocina en Vivo
            </p>
            <h3 className="mt-3 font-serif text-3xl text-[#fdfcf8] md:text-4xl">
              Así se vive Tarantella
            </h3>
            <p className="mt-4 leading-relaxed text-[#fdfcf8]/80">
              Montamos nuestra estación completa en el lugar de tu evento: masa
              fresca, ingredientes seleccionados y servicio al momento para que
              cada invitado reciba su plato recién hecho.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-[#d69e2e] px-7 py-3 text-sm font-semibold text-[#111111] transition hover:translate-y-[-2px] hover:bg-[#c58f25]"
            >
              Cotiza tu Evento
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
