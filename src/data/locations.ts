export interface Location {
  slug: string;
  zona: string;
  title: string;
  metaDescription: string;
  intro: string;
  distance: string;
  faqs: { question: string; answer: string }[];
}

export const locations: Location[] = [
  {
    slug: 'belgrano',
    zona: 'Belgrano',
    title: 'Alineadores invisibles en Belgrano | STICK',
    metaDescription:
      'Alineadores invisibles en Belgrano, CABA. Tratamiento con seguimiento real, rediseño incluido y resultados comprobados. Consultá sin cargo por WhatsApp.',
    intro:
      'Si estás en Belgrano y pensás en alineadores invisibles, nuestro consultorio en Virrey del Pino 4191 3C queda a pocos minutos. STICK combina tecnología de escaneo digital con seguimiento clínico real para que el tratamiento funcione.',
    distance: 'a 10 minutos',
    faqs: [
      {
        question: '¿Cuánto tarda el tratamiento desde Belgrano?',
        answer:
          'El proceso completo dura entre 6 y 10 meses según el caso. El primer turno es el escaneo inicial; en 7 días ya tenés la simulación.',
      },
      {
        question: '¿Cómo llego desde Belgrano al consultorio STICK?',
        answer:
          'Desde Belgrano tomás la línea de colectivo por Av. Cabildo o Monroe hacia el norte. También podés ir en subte D hasta Juramento y tomar un colectivo. La dirección es Virrey del Pino 4191 3C, CABA.',
      },
      {
        question: '¿Los alineadores STICK son invisibles de verdad?',
        answer:
          'Sí. Son de material transparente y en la mayoría de situaciones cotidianas no se notan. Algunos casos requieren attachments (botoncitos), que también son discretos.',
      },
      {
        question: '¿Qué pasa si el alineador no me ajusta bien?',
        answer:
          'Con STICK tenés controles mensuales. Si detectamos desvíos, hacemos un rediseño y reimpresión. Está incluido en el tratamiento.',
      },
    ],
  },
  {
    slug: 'nunez',
    zona: 'Núñez',
    title: 'Alineadores invisibles en Núñez | STICK',
    metaDescription:
      'Alineadores invisibles en Núñez, CABA. Consultorio a minutos de tu barrio, con seguimiento personalizado y rediseño incluido. Consultá por WhatsApp.',
    intro:
      'Desde Núñez llegás en minutos a nuestro consultorio en Virrey del Pino 4191 3C. STICK ofrece un tratamiento completo con escaneo digital, simulación, controles y rediseño si hace falta.',
    distance: 'a 5 minutos',
    faqs: [
      {
        question: '¿Cuántas veces tengo que ir al consultorio desde Núñez?',
        answer:
          'El proceso incluye: escaneo inicial, consulta de inicio (~60 min) y controles mensuales. Al quedar cerca, la logística es muy cómoda.',
      },
      {
        question: '¿Los resultados son garantizados?',
        answer:
          'STICK trabaja con seguimiento clínico real y rediseño si hay desvíos. No prometemos resultados sin evaluación, pero sí garantizamos el acompañamiento durante todo el proceso.',
      },
      {
        question: '¿Puedo usar alineadores si trabajo o estudio?',
        answer:
          'Sí, totalmente. Los alineadores son removibles para comer y cepillarte. El uso óptimo es 22 horas por día, algo perfectamente compatible con la rutina diaria.',
      },
    ],
  },
  {
    slug: 'saavedra',
    zona: 'Saavedra',
    title: 'Alineadores invisibles en Saavedra | STICK',
    metaDescription:
      'Alineadores invisibles en Saavedra, CABA. Tratamiento profesional con seguimiento y rediseño incluido. Consultá sin cargo por WhatsApp.',
    intro:
      'Desde Saavedra, nuestro consultorio en Virrey del Pino 4191 3C está a muy poca distancia. STICK es el tratamiento de alineadores con seguimiento real que funciona.',
    distance: 'a 8 minutos',
    faqs: [
      {
        question: '¿Qué es el escaneo inicial y cómo es el proceso?',
        answer:
          'El escaneo es digital, indoloro y dura unos 15 minutos. Con él diseñamos tu simulación y plan de tratamiento.',
      },
      {
        question: '¿Cuánto cuestan los alineadores en STICK?',
        answer:
          'El precio depende del diagnóstico de cada caso. Te podemos dar un rango aproximado por WhatsApp, y el valor exacto se define en la consulta inicial.',
      },
      {
        question: '¿STICK trabaja con obras sociales?',
        answer:
          'Actualmente STICK no trabaja con obras sociales. Sí ofrecemos planes de pago. Consultanos por WhatsApp para conocer las opciones.',
      },
    ],
  },
  {
    slug: 'colegiales',
    zona: 'Colegiales',
    title: 'Alineadores invisibles en Colegiales | STICK',
    metaDescription:
      'Alineadores invisibles en Colegiales, CABA. Tratamiento con tecnología digital, seguimiento mensual y rediseño incluido. Consultá por WhatsApp.',
    intro:
      'Si vivís en Colegiales y querés enderezar tu sonrisa sin brackets, STICK es tu opción. Nuestro consultorio en Virrey del Pino 4191 3C está a distancia conveniente y el proceso es 100% claro desde el primer día.',
    distance: 'a 15 minutos',
    faqs: [
      {
        question: '¿Cuál es la diferencia entre STICK y otros alineadores?',
        answer:
          'STICK incluye seguimiento clínico mensual real y rediseño si hay desvíos en la evolución. No es solo fabricar y entregar; es acompañar el tratamiento de principio a fin.',
      },
      {
        question: '¿Qué edades pueden usar alineadores?',
        answer:
          'Los alineadores son ideales para adultos y adolescentes que ya tienen todos los dientes permanentes. En la consulta inicial evaluamos si sos candidato/a.',
      },
      {
        question: '¿Qué incluye el tratamiento?',
        answer:
          'Incluye escaneo, simulación, todos los alineadores de la etapa, controles mensuales, rediseños si aplica y contenciones al finalizar.',
      },
    ],
  },
  {
    slug: 'coghlan',
    zona: 'Coghlan',
    title: 'Alineadores invisibles en Coghlan | STICK',
    metaDescription:
      'Alineadores invisibles en Coghlan, CABA. Tratamiento profesional cerca de tu barrio con seguimiento real. Consultá sin cargo.',
    intro:
      'Desde Coghlan llegás fácilmente a Virrey del Pino 4191 3C, donde funciona el consultorio de STICK. Tratamiento de alineadores con tecnología digital y seguimiento mensual incluido.',
    distance: 'a 10 minutos',
    faqs: [
      {
        question: '¿Qué pasa al finalizar el tratamiento?',
        answer:
          'Al completar el tratamiento retiramos los attachments, tomamos fotos finales y entregamos las contenciones. Todo está incluido en el precio.',
      },
      {
        question: '¿Tengo que usar contenciones para siempre?',
        answer:
          'Las contenciones fijas o removibles ayudan a mantener el resultado. El uso con el tiempo lo va definiendo el ortodoncista según la evolución de cada caso.',
      },
    ],
  },
  {
    slug: 'villa-urquiza',
    zona: 'Villa Urquiza',
    title: 'Alineadores invisibles en Villa Urquiza | STICK',
    metaDescription:
      'Alineadores invisibles en Villa Urquiza, CABA. Consultorio accesible, tratamiento con seguimiento real y resultados comprobados. Consultá por WhatsApp.',
    intro:
      'Desde Villa Urquiza, nuestro consultorio en Virrey del Pino 4191 3C te queda conveniente. STICK combina ortodoncistas con experiencia, tecnología de escaneo y un seguimiento que hace la diferencia.',
    distance: 'a 12 minutos',
    faqs: [
      {
        question: '¿Puedo ver resultados antes de decidirme?',
        answer:
          'Sí. Tenemos más de 300 casos de antes y después disponibles. Además, en la simulación podés ver cómo quedaría tu sonrisa antes de empezar.',
      },
      {
        question: '¿Cuánto tiempo debo usar los alineadores por día?',
        answer:
          'El uso óptimo es 22 horas diarias. Solo los retirás para comer, beber líquidos calientes y cepillarte.',
      },
    ],
  },
  {
    slug: 'villa-ortuzar',
    zona: 'Villa Ortúzar',
    title: 'Alineadores invisibles en Villa Ortúzar | STICK',
    metaDescription:
      'Alineadores invisibles en Villa Ortúzar, CABA. Tratamiento cercano con seguimiento personalizado. Consultá sin cargo por WhatsApp.',
    intro:
      'Si estás en Villa Ortúzar y pensás en mejorar tu sonrisa, el consultorio STICK en Virrey del Pino 4191 3C es tu punto de referencia. Proceso claro, tecnología digital y seguimiento real.',
    distance: 'a 10 minutos',
    faqs: [
      {
        question: '¿Qué es un rediseño en STICK?',
        answer:
          'Si durante el tratamiento los dientes no evolucionan como se planificó, hacemos un nuevo escaneo y diseñamos una etapa corregida. Está incluido en el tratamiento.',
      },
      {
        question: '¿Los alineadores duelen?',
        answer:
          'Es normal sentir algo de presión los primeros días de cada alineador nuevo. No es dolor intenso y pasa rápido. Nada comparable a los brackets metálicos.',
      },
    ],
  },
  {
    slug: 'palermo',
    zona: 'Palermo',
    title: 'Alineadores invisibles en Palermo | STICK',
    metaDescription:
      'Alineadores invisibles en Palermo, CABA. Consultorio en zona norte de CABA, tratamiento con seguimiento real. Consultá por WhatsApp.',
    intro:
      'Desde Palermo podés llegar fácilmente a Virrey del Pino 4191 3C para tu consulta inicial con STICK. Alineadores invisibles con proceso transparente y seguimiento mensual real.',
    distance: 'a 20 minutos',
    faqs: [
      {
        question: '¿Qué tan transparentes son los alineadores?',
        answer:
          'Muy transparentes. La mayoría de personas con las que interactuás no los nota, salvo que les avises. Es uno de los motivos principales por los que adultos los eligen.',
      },
      {
        question: '¿Cuándo se ven los primeros cambios?',
        answer:
          'Los primeros movimientos suelen notarse entre el mes 2 y 3. Depende del caso, pero el proceso es gradual y constante.',
      },
    ],
  },
  {
    slug: 'villa-crespo',
    zona: 'Villa Crespo',
    title: 'Alineadores invisibles en Villa Crespo | STICK',
    metaDescription:
      'Alineadores invisibles en Villa Crespo, CABA. Tratamiento profesional con seguimiento y rediseño incluido. Consultá sin cargo.',
    intro:
      'Desde Villa Crespo, el consultorio STICK en Virrey del Pino 4191 3C te espera. Un equipo comprometido con resultados reales y proceso clínico transparente.',
    distance: 'a 25 minutos',
    faqs: [
      {
        question: '¿Puedo comer normal con alineadores?',
        answer:
          'Sí. Los alineadores se retiran para comer. A diferencia de los brackets, podés comer lo que quieras. Solo hay que cepillarse antes de volvérselos a poner.',
      },
      {
        question: '¿Hay casos que no se pueden tratar con alineadores?',
        answer:
          'Los alineadores tienen indicaciones específicas. En la consulta inicial evaluamos si sos candidato/a. Casos muy complejos pueden requerir brackets o tratamiento combinado.',
      },
    ],
  },
  {
    slug: 'villa-devoto',
    zona: 'Villa Devoto',
    title: 'Alineadores invisibles en Villa Devoto | STICK',
    metaDescription:
      'Alineadores invisibles en Villa Devoto, CABA. Tratamiento con tecnología digital y seguimiento real. Consultá por WhatsApp.',
    intro:
      'Desde Villa Devoto podés llegar a Virrey del Pino 4191 3C para tu escaneo inicial con STICK. Proceso claro, precios transparentes y seguimiento que garantiza resultados.',
    distance: 'a 20 minutos',
    faqs: [
      {
        question: '¿Hay edad mínima para alineadores?',
        answer:
          'Para adolescentes evaluamos que la dentición permanente esté completa. En adultos no hay límite de edad.',
      },
      {
        question: '¿Cuántos alineadores se usan en un tratamiento típico?',
        answer:
          'Depende del caso. Un caso estándar puede tener entre 20 y 40 alineadores por etapa, con cambio cada 15 días.',
      },
    ],
  },
  {
    slug: 'vicente-lopez',
    zona: 'Vicente López',
    title: 'Alineadores invisibles en Vicente López | STICK',
    metaDescription:
      'Alineadores invisibles en Vicente López, GBA. Consultorio en CABA zona norte, fácil acceso. Seguimiento real y resultados comprobados.',
    intro:
      'Desde Vicente López cruzás a CABA y llegás en pocos minutos a Virrey del Pino 4191 3C. STICK es el tratamiento de alineadores con seguimiento mensual que hace la diferencia.',
    distance: 'a 15 minutos',
    faqs: [
      {
        question: '¿Puedo empezar el tratamiento viviendo en Vicente López?',
        answer:
          'Totalmente. Muchos de nuestros pacientes vienen del GBA Norte. Los controles son mensuales, así que la distancia no es un problema.',
      },
      {
        question: '¿Cómo llego desde Vicente López al consultorio?',
        answer:
          'Podés ir en auto por Av. del Libertador o Maipú hacia CABA, o en tren Mitre hasta Belgrano y luego colectivo. La dirección es Virrey del Pino 4191 3C, CABA.',
      },
    ],
  },
  {
    slug: 'olivos',
    zona: 'Olivos',
    title: 'Alineadores invisibles en Olivos | STICK',
    metaDescription:
      'Alineadores invisibles en Olivos, GBA Norte. Fácil acceso a consultorio en CABA zona norte. Tratamiento con seguimiento real y rediseño incluido.',
    intro:
      'Desde Olivos llegás a nuestro consultorio en Virrey del Pino 4191 3C en muy poco tiempo. STICK ofrece alineadores invisibles con proceso clínico real y seguimiento mensual.',
    distance: 'a 20 minutos',
    faqs: [
      {
        question: '¿Atienden sábados o solo días de semana?',
        answer:
          'Los horarios se coordinan por WhatsApp. Contamos con disponibilidad flexible para adaptarnos a distintas rutinas. Consultanos.',
      },
      {
        question: '¿Qué tan diferente es STICK de otros sistemas de alineadores?',
        answer:
          'El diferencial es el seguimiento clínico real. Cada mes evaluamos la evolución y si hay desvíos, rediseñamos. No es fabricar y olvidar.',
      },
    ],
  },
  {
    slug: 'san-isidro',
    zona: 'San Isidro',
    title: 'Alineadores invisibles en San Isidro | STICK',
    metaDescription:
      'Alineadores invisibles en San Isidro, GBA Norte. Tratamiento profesional en CABA zona norte con seguimiento real. Consultá sin cargo.',
    intro:
      'Desde San Isidro, el consultorio STICK en Virrey del Pino 4191 3C es accesible y vale la pena. Un tratamiento de alineadores con tecnología digital, seguimiento mensual y resultados reales.',
    distance: 'a 25 minutos',
    faqs: [
      {
        question: '¿Puedo pagar en cuotas desde San Isidro?',
        answer:
          'Sí, ofrecemos opciones de financiación. Los detalles se coordinan en la consulta inicial. Consultanos por WhatsApp para conocer las opciones actuales.',
      },
      {
        question: '¿Hay estacionamiento cerca del consultorio?',
        answer:
          'Sí, hay opciones de estacionamiento en la zona de Virrey del Pino. También es accesible en transporte público desde el GBA Norte.',
      },
    ],
  },
];
