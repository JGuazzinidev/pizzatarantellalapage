export const WHATSAPP_NUMBER = '56937191121'
export const WHATSAPP_DISPLAY = '+569 3719 1121'

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const messages = {
  evento: 'Hola Tarantella! Quiero cotizar pizzas y pastas para un evento.',
  matrimonio: 'Hola Tarantella! Quiero cotizar el servicio para mi matrimonio.',
  corporativo:
    'Hola Tarantella! Quiero cotizar un servicio para un evento corporativo o festival.',
  cumpleanos:
    'Hola Tarantella! Quiero cotizar el servicio para un cumpleanos o celebracion privada.',
  carta: 'Hola Tarantella! Me gustaria conocer la carta y los precios.',
  pedido: 'Hola Tarantella! Quiero hacer un pedido.',
}
