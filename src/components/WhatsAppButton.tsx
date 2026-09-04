import WhatsAppIcon from './WhatsAppIcon'
import { messages, whatsappLink } from '../lib/whatsapp'

function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(messages.evento)}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactanos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}

export default WhatsAppButton
