export function SchemaOrg() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'STICK Alineadores',
    alternateName: 'STICK',
    url: 'https://stickalineadores.com.ar',
    logo: 'https://stickalineadores.com.ar/logo.png',
    image: 'https://stickalineadores.com.ar/og-image.jpg',
    description:
      'Sistema de alineadores invisibles con seguimiento clínico real, rediseño incluido y más de 300 casos documentados. Fabricación local argentina.',
    foundingDate: '2023',
    founders: [
      {
        '@type': 'Person',
        name: 'Cynthia H.',
        jobTitle: 'Odontóloga fundadora',
        url: 'https://stickalineadores.com.ar/quienes-somos',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'Spanish',
      contactOption: 'TollFree',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Virrey del Pino 4191 3C',
      addressLocality: 'Buenos Aires',
      addressRegion: 'CABA',
      addressCountry: 'AR',
    },
    sameAs: [
      'https://www.instagram.com/stickalineadores',
      'https://stickalineadores.com.ar',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'STICK Alineadores',
    image: 'https://stickalineadores.com.ar/og-image.jpg',
    url: 'https://stickalineadores.com.ar',
    telephone: '+5491136897699',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Virrey del Pino 4191 3C',
      addressLocality: 'Buenos Aires',
      addressRegion: 'Ciudad Autónoma de Buenos Aires',
      postalCode: 'C1426',
      addressCountry: 'AR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -34.567,
      longitude: -58.465,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '08:30',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday'],
        opens: '10:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:30',
        closes: '13:00',
      },
    ],
    priceRange: '$$',
    description:
      'Alineadores invisibles con seguimiento clínico real, rediseño incluido y más de 300 casos documentados.',
    areaServed: [
      'Belgrano', 'Núñez', 'Saavedra', 'Colegiales', 'Villa Urquiza',
      'Palermo', 'Vicente López', 'Olivos', 'San Isidro',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
