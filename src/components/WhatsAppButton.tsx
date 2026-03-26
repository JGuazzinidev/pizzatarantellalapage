const whatsappMessage =
  'Hola! Me gustaría cotizar un evento con Pizza Tarantella'

const whatsappHref = `https://wa.me/56937191121?text=${encodeURIComponent(whatsappMessage)}`

function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Contáctanos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-105"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2c-5.45 0-9.87 4.42-9.87 9.87 0 1.74.46 3.45 1.33 4.95L2 22l5.32-1.39a9.8 9.8 0 0 0 4.71 1.2h.01c5.44 0 9.87-4.43 9.87-9.87a9.8 9.8 0 0 0-2.86-7.03Zm-7.02 15.22h-.01a8.14 8.14 0 0 1-4.15-1.14l-.3-.18-3.16.83.84-3.08-.2-.32a8.13 8.13 0 0 1 1.26-10.13 8.12 8.12 0 0 1 5.77-2.39c4.5 0 8.15 3.66 8.15 8.15a8.16 8.16 0 0 1-8.2 8.26Zm4.47-6.11c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.22-.72-.65-1.21-1.45-1.35-1.69-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.68 2.56 4.08 3.59.57.24 1.02.38 1.37.48.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    </a>
  )
}

export default WhatsAppButton
