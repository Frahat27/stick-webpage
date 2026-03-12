export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  detail?: string;
  duration?: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Consulta inicial y escaneo',
    description:
      'Primera cita donde realizamos el escaneo digital 3D de tu boca. Sin moldes ni incomodidades. El proceso dura unos 15 minutos.',
    detail:
      'El escáner intraoral captura un modelo digital preciso de tu dentición. Con esa información el ortodoncista diseña tu plan de tratamiento.',
    duration: 'Turno ~30 min',
    icon: '🦷',
  },
  {
    id: 2,
    title: 'Diagnóstico y diseño',
    description:
      'El ortodoncista analiza tu escaneo y diseña el movimiento paso a paso de cada diente. En aproximadamente 7 días tenés tu simulación lista.',
    detail:
      'El diseño incluye la secuencia completa de alineadores y, si aplica, la planificación de attachments para movimientos específicos.',
    duration: '~7 días',
    icon: '📐',
  },
  {
    id: 3,
    title: 'Simulación y aprobación',
    description:
      'Compartimos la simulación 3D de tu tratamiento para que puedas ver el resultado esperado antes de comenzar. Lo revisamos juntos y, si estás de acuerdo, coordinamos el inicio.',
    detail:
      'Es importante que entiendas qué va a pasar en cada etapa. Respondemos todas tus preguntas antes de confirmar.',
    duration: 'Revisión y aprobación',
    icon: '✅',
  },
  {
    id: 4,
    title: 'Consulta de inicio',
    description:
      'Primera cita activa del tratamiento (~60 min). Colocamos los attachments si corresponde, entregamos los primeros 2 alineadores, el kit de higiene y te explicamos todo lo que necesitás saber para usar correctamente los alineadores.',
    detail:
      'Los alineadores se cambian cada 15 días. En esta visita te enseñamos cómo colocarlos, retirarlos y cuidarlos.',
    duration: '~60 min',
    icon: '🎯',
  },
  {
    id: 5,
    title: 'Controles mensuales',
    description:
      'Cada mes revisamos cómo evolucionan los movimientos dentales. Evaluamos si el tratamiento avanza según lo planeado y hacemos los ajustes necesarios. Si detectamos desvíos, realizamos un rediseño.',
    detail:
      'El seguimiento mensual es lo que diferencia a STICK. No fabricamos y olvidamos; acompañamos cada paso.',
    duration: 'Mensual',
    icon: '📊',
  },
  {
    id: 6,
    title: 'Finalización',
    description:
      'Al completar todos los alineadores, retiramos los attachments, tomamos fotos del resultado final y entregamos las contenciones para mantener tu nueva sonrisa.',
    detail:
      'También emitimos el certificado de tratamiento completado. Las contenciones son clave para mantener el resultado a largo plazo.',
    duration: '6 a 10 meses',
    icon: '🏆',
  },
];

export const secondStageSteps: ProcessStep[] = [
  {
    id: 7,
    title: 'Re-escaneo',
    description:
      'Si el caso requiere una segunda etapa, realizamos un nuevo escaneo para capturar la posición actual de los dientes y diseñar la continuación del tratamiento.',
    duration: '~15 min',
    icon: '🔄',
  },
  {
    id: 8,
    title: 'Inicio etapa 2',
    description:
      'En aproximadamente 3 días coordinamos la consulta de inicio de la segunda etapa. Entregamos alineadores 1 y 2 de la nueva etapa.',
    duration: '~3 días desde re-escaneo',
    icon: '▶️',
  },
  {
    id: 9,
    title: 'Controles hasta finalizar',
    description:
      'Continuamos con controles mensuales hasta completar la segunda etapa y lograr el resultado final.',
    duration: 'Mensual',
    icon: '🎯',
  },
];
