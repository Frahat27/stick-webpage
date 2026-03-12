export interface BeforeAfterCase {
  id: string;
  title: string;
  description?: string;
  tags: string[];
  imageBefore: string;
  imageAfter: string;
  durationMonths: number;
  category: 'apiñamiento' | 'espacios' | 'mordida' | 'general';
}

// Mock data – reemplazar con casos reales. Las imágenes se cargan desde /public/images/before-after/
export const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: 'case-01',
    title: 'Apiñamiento moderado – zona frontal',
    description: 'Corrección de apiñamiento en sector anterior en 6 meses.',
    tags: ['apiñamiento', 'adulto', '6 meses'],
    imageBefore: '/images/before-after/placeholder-before.jpg',
    imageAfter: '/images/before-after/placeholder-after.jpg',
    durationMonths: 6,
    category: 'apiñamiento',
  },
  {
    id: 'case-02',
    title: 'Diastema central',
    description: 'Cierre de espacio central superior.',
    tags: ['diastema', 'adulto', '4 meses'],
    imageBefore: '/images/before-after/placeholder-before.jpg',
    imageAfter: '/images/before-after/placeholder-after.jpg',
    durationMonths: 4,
    category: 'espacios',
  },
  {
    id: 'case-03',
    title: 'Apiñamiento severo – segunda etapa',
    description: 'Caso con dos etapas de tratamiento. Resultado final al mes 10.',
    tags: ['apiñamiento', 'dos etapas', '10 meses'],
    imageBefore: '/images/before-after/placeholder-before.jpg',
    imageAfter: '/images/before-after/placeholder-after.jpg',
    durationMonths: 10,
    category: 'apiñamiento',
  },
  {
    id: 'case-04',
    title: 'Mordida cruzada leve',
    description: 'Corrección de mordida cruzada anterior leve.',
    tags: ['mordida cruzada', 'adulto', '7 meses'],
    imageBefore: '/images/before-after/placeholder-before.jpg',
    imageAfter: '/images/before-after/placeholder-after.jpg',
    durationMonths: 7,
    category: 'mordida',
  },
  {
    id: 'case-05',
    title: 'Corrección general con rediseño',
    description: 'Caso que requirió rediseño en mes 3. Resultado final excelente.',
    tags: ['general', 'rediseño', 'adulto', '8 meses'],
    imageBefore: '/images/before-after/placeholder-before.jpg',
    imageAfter: '/images/before-after/placeholder-after.jpg',
    durationMonths: 8,
    category: 'general',
  },
  {
    id: 'case-06',
    title: 'Apiñamiento leve – caso rápido',
    description: 'Caso leve resuelto en 4 meses.',
    tags: ['apiñamiento leve', 'adulto', '4 meses'],
    imageBefore: '/images/before-after/placeholder-before.jpg',
    imageAfter: '/images/before-after/placeholder-after.jpg',
    durationMonths: 4,
    category: 'apiñamiento',
  },
];
