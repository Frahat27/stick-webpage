// [PENDIENTE: número WhatsApp STICK en formato internacional sin +]
export const WHATSAPP_NUMBER = '5491136897699';

// [PENDIENTE: URL del bot si aplica]
export const WHATSAPP_BOT_URL = '';

export type WhatsAppContext =
  | 'patient'
  | 'orthodontist'
  | 'local'
  | 'general'
  | 'before-after'
  | 'pricing';

export function buildWhatsAppUrl(
  context: WhatsAppContext,
  extra?: { zona?: string }
): string {
  const messages: Record<WhatsAppContext, string> = {
    patient:
      'Hola! Quiero coordinar un escaneo/consulta para alineadores STICK. Mi nombre es ____.',
    orthodontist:
      'Hola! Soy ortodoncista y quiero trabajar con STICK. Mi nombre es ____.',
    local: extra?.zona
      ? `Hola! Estoy en ${extra.zona} y quiero coordinar un escaneo con STICK. Mi nombre es ____.`
      : 'Hola! Quiero coordinar un escaneo/consulta para alineadores STICK. Mi nombre es ____.',
    general:
      'Hola! Quiero saber más sobre STICK alineadores. Mi nombre es ____.',
    'before-after':
      'Hola! Vi los resultados de STICK y quiero saber si soy candidato/a. Mi nombre es ____.',
    pricing:
      'Hola! Quiero conocer los precios y planes de STICK. Mi nombre es ____.',
  };

  const message = messages[context];
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
