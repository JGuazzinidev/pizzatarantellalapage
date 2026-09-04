import WhatsAppIcon from './WhatsAppIcon'
import { WHATSAPP_DISPLAY, messages, whatsappLink } from '../lib/whatsapp'

const options = [
  {
    title: 'Matrimonios',
    description:
      'Cuéntanos la fecha y la cantidad de invitados y armamos una propuesta a tu medida.',
    message: messages.matrimonio,
  },
  {
    title: 'Corporativos y Festivales',
    description:
      'Lanzamientos, activaciones y ferias con servicio continuo para alto volumen.',
    message: messages.corporativo,
  },
  {
    title: 'Cumpleaños y Privados',
    description:
      'Celebraciones íntimas con nuestra estación de pizza a la piedra en vivo.',
    message: messages.cumpleanos,
  },
]

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#fdfcf8] py-20"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="reveal text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#c53030]">
            Contacto
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[#111111] md:text-5xl">
            Escríbenos por WhatsApp
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#2f2f2f]">
            Sin formularios ni esperas: elige tu tipo de evento y te
            respondemos directo con disponibilidad y valores.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {options.map((option) => (
            <article
              key={option.title}
              className="reveal flex flex-col rounded-3xl border border-black/10 bg-white p-7 shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_55px_rgba(0,0,0,0.15)]"
            >
              <h3 className="font-serif text-2xl text-[#111111]">
                {option.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#2f2f2f]">
                {option.description}
              </p>
              <a
                href={whatsappLink(option.message)}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_26px_rgba(37,211,102,0.3)] transition hover:translate-y-[-2px] hover:bg-[#1fb955]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Cotizar por WhatsApp
              </a>
            </article>
          ))}
        </div>

        <div className="reveal mt-12 rounded-3xl bg-[#111111] px-6 py-10 text-center md:px-10">
          <p className="text-sm uppercase tracking-[0.25em] text-[#d69e2e]">
            También puedes
          </p>
          <h3 className="mt-3 font-serif text-2xl text-[#fdfcf8] md:text-3xl">
            Pedir a domicilio o consultar la carta
          </h3>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink(messages.pedido)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-2px] hover:bg-[#1fb955] sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Hacer un pedido
            </a>
            <a
              href={whatsappLink(messages.carta)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#d69e2e] px-6 py-3 text-sm font-semibold text-[#d69e2e] transition hover:translate-y-[-2px] hover:bg-[#d69e2e] hover:text-[#111111] sm:w-auto"
            >
              Ver carta y precios
            </a>
          </div>
          <a
            href={whatsappLink(messages.evento)}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block text-lg font-semibold text-[#fdfcf8] transition hover:text-[#d69e2e]"
          >
            {WHATSAPP_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
