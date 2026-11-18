import { useState } from 'react'
import { carta } from '../data/carta'
import { messages, whatsappLink } from '../lib/whatsapp'

const pizzaSizes = [
  { label: 'Mediana', cm: 28, size: 'h-12 w-12' },
  { label: 'Familiar', cm: 38, size: 'h-16 w-16' },
  { label: 'XL', cm: 42, size: 'h-20 w-20' },
]

function TricolorStripe() {
  return (
    <div className="flex h-1.5 w-full">
      <span className="flex-1 bg-[#2f855a]" />
      <span className="flex-1 bg-[#fdfcf8]" />
      <span className="flex-1 bg-[#c53030]" />
    </div>
  )
}

function Carta() {
  const [activeId, setActiveId] = useState(carta[0].id)
  const active = carta.find((section) => section.id === activeId) ?? carta[0]

  return (
    <div className="reveal carta-board relative mt-16 overflow-hidden rounded-[2rem] text-[#fdfcf8] shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
      <TricolorStripe />

      <div className="px-5 py-10 md:px-12 md:py-14">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d69e2e]">
            Pizza e Pasta · Santiago de Chile
          </p>
          <h3 className="mt-4 font-serif text-4xl md:text-6xl">
            La Carta <span className="italic text-[#d69e2e]">Tarantella</span>
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[#fdfcf8]/70 md:text-base">
            Todo lo que sale de nuestro horno. Elige tus favoritos y
            pídelos por WhatsApp o súmalos a tu evento.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Categorías de la carta"
          className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
        >
          {carta.map((section) => {
            const isActive = section.id === active.id
            return (
              <button
                key={section.id}
                type="button"
                role="tab"
                id={`carta-tab-${section.id}`}
                aria-selected={isActive}
                aria-controls={`carta-panel-${section.id}`}
                onClick={() => setActiveId(section.id)}
                className={`group relative h-28 overflow-hidden rounded-2xl text-left transition duration-300 md:h-36 ${
                  isActive
                    ? 'ring-2 ring-[#d69e2e] ring-offset-2 ring-offset-[#141110]'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={section.image}
                  alt=""
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110 ${
                    isActive ? 'scale-105' : ''
                  }`}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                  <span className="block font-serif text-lg leading-tight md:text-2xl">
                    {section.label}
                  </span>
                  <span className="mt-0.5 hidden text-[11px] uppercase tracking-[0.18em] text-[#d69e2e] sm:block">
                    {section.tagline}
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        <div
          key={active.id}
          role="tabpanel"
          id={`carta-panel-${active.id}`}
          aria-labelledby={`carta-tab-${active.id}`}
          className="carta-in mt-12"
        >
          {active.id === 'pizzas' && (
            <div className="mb-12 flex flex-wrap items-end justify-center gap-8 md:gap-14">
              {pizzaSizes.map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-3">
                  <span
                    className={`${s.size} rounded-full border-2 border-dashed border-[#d69e2e]/70 bg-[radial-gradient(circle,rgba(197,48,48,0.55)_0_45%,rgba(214,158,46,0.35)_46%_100%)]`}
                  />
                  <span className="text-center">
                    <span className="block text-sm font-semibold uppercase tracking-[0.15em]">
                      {s.label}
                    </span>
                    <span className="text-xs text-[#fdfcf8]/60">{s.cm} cm</span>
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-12">
            {active.groups.map((group) => (
              <section key={group.title}>
                <h4 className="text-center md:text-left">
                  <span className="brush-label font-serif text-xl font-semibold uppercase tracking-[0.08em] md:text-2xl">
                    {group.title}
                  </span>
                </h4>

                {group.items.some((item) => item.description) ? (
                  <ul className="mt-6 grid gap-4 md:grid-cols-2">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#d69e2e]/60 hover:bg-white/[0.07]"
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="h-2 w-2 shrink-0 rounded-full bg-[#c53030] transition group-hover:bg-[#d69e2e]" />
                          <p className="font-serif text-xl text-[#fdfcf8]">
                            {item.name}
                          </p>
                          {item.tag && (
                            <span
                              className={`ml-auto rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                                item.tag === 'Vegano'
                                  ? 'bg-[#2f855a] text-white'
                                  : 'bg-[#d69e2e] text-[#111111]'
                              }`}
                            >
                              {item.tag}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="mt-2 pl-4 text-sm leading-relaxed text-[#fdfcf8]/70">
                            {item.description}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="rounded-full border border-[#d69e2e]/40 bg-[#d69e2e]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.1em] text-[#fdfcf8] transition hover:bg-[#d69e2e] hover:text-[#111111]"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/10 pt-10 text-center">
          <p className="font-serif text-2xl md:text-3xl">¿Se te antojó algo?</p>
          <a
            href={whatsappLink(messages.carta)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-[#c53030] px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#fdfcf8] shadow-[0_10px_30px_rgba(197,48,48,0.45)] transition hover:-translate-y-0.5 hover:bg-[#a82828]"
          >
            Consúltanos por WhatsApp
          </a>
        </div>
      </div>

      <TricolorStripe />
    </div>
  )
}

export default Carta
