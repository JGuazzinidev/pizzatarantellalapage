import { FormEvent, useState } from 'react'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined
      if (!endpoint) {
        throw new Error('Falta VITE_FORMSPREE_ENDPOINT')
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Fallo al enviar')
      }

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-[#fdfcf8] py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <div className="reveal mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#c53030]">
            Contacto
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[#111111] md:text-5xl">
            Cotiza tu Evento
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#2f2f2f]">
            Completa este formulario y te enviaremos una propuesta a medida
            según tipo de evento, cantidad de invitados y fecha.
          </p>
        </div>

        <form
          className="glass-panel reveal rounded-3xl border border-black/10 p-6 shadow-[0_24px_50px_rgba(0,0,0,0.12)] md:p-8"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-[#111111]">
              Nombre
              <input
                type="text"
                name="name"
                required
                placeholder="Tu nombre completo"
                className="rounded-xl border border-black/20 bg-[#fdfcf8] px-4 py-3 outline-none ring-[#c53030] transition focus:ring-2"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-[#111111]">
              Teléfono
              <input
                type="tel"
                name="phone"
                required
                placeholder="+56 ..."
                className="rounded-xl border border-black/20 bg-[#fdfcf8] px-4 py-3 outline-none ring-[#c53030] transition focus:ring-2"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-[#111111]">
              Tipo de Evento
              <input
                type="text"
                name="eventType"
                required
                placeholder="Matrimonio, corporativo, cumpleaños..."
                className="rounded-xl border border-black/20 bg-[#fdfcf8] px-4 py-3 outline-none ring-[#c53030] transition focus:ring-2"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-[#111111]">
              Fecha
              <input
                type="date"
                name="eventDate"
                required
                className="rounded-xl border border-black/20 bg-[#fdfcf8] px-4 py-3 outline-none ring-[#c53030] transition focus:ring-2"
              />
            </label>
          </div>

          <label className="mt-5 flex flex-col gap-2 text-sm font-medium text-[#111111]">
            Mensaje
            <textarea
              rows={5}
              name="message"
              required
              placeholder="Cuéntanos sobre tu evento..."
              className="rounded-xl border border-black/20 bg-[#fdfcf8] px-4 py-3 outline-none ring-[#c53030] transition focus:ring-2"
            />
          </label>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="mt-6 w-full rounded-full bg-[#c53030] px-6 py-3 font-semibold text-[#fdfcf8] transition hover:bg-[#ab2525]"
          >
            {status === 'loading' ? 'Enviando solicitud...' : 'Solicitar Cotización'}
          </button>
          {status === 'success' && (
            <p className="mt-4 text-sm font-medium text-green-700">
              ¡Listo! Recibimos tu solicitud y te contactaremos a la brevedad.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-sm font-medium text-[#c53030]">
              No pudimos enviar tu solicitud en este momento. Escríbenos
              directamente por{' '}
              <a
                href="https://wa.me/56937191121"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 hover:text-[#111111]"
              >
                WhatsApp al +569 3719 1121
              </a>{' '}
              y te respondemos al tiro.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default ContactForm
