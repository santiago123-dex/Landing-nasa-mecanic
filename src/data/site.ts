export const whatsappUrl =
  'https://wa.me/1234567890?text=Hola%20NASA%20Auto%20Lab,%20solicito%20iniciar%20una%20secuencia%20de%20diagn%C3%B3stico.';

export const siteMeta = {
  name: 'NASA Auto Lab',
  shortName: 'NASA Auto Lab',
  title: 'NASA Auto Lab | Diagnostico automotriz avanzado en Armenia, Quindio',
  description:
    'Laboratorio automotriz en Armenia, Quindio, especializado en diagnostico computarizado, mantenimiento predictivo, calibracion laser y optimizacion de motor.',
  keywords: [
    'taller automotriz en Armenia Quindio',
    'diagnostico automotriz',
    'diagnostico computarizado',
    'mantenimiento preventivo vehicular',
    'calibracion laser',
    'optimizacion de motor',
    'servicio automotriz en Armenia',
  ],
  locale: 'es_CO',
  city: 'Armenia',
  region: 'Quindio',
  country: 'Colombia',
  address: 'Cl. 15 #21A-03, Armenia, Quindio, Colombia',
  coordinates: {
    latitude: 4.5339,
    longitude: -75.6811,
  },
  ogImage: '/og-nasa-auto-lab.svg',
} as const;

export const services = [
  {
    id: '01.A',
    title: 'Diagnostico por IA',
    desc: 'Protege tu vehiculo contra fallos mediante nuestro estricto esquema de escaneo computarizado y telemetria avanzada.',
    icon: 'activity',
    image:
      'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1200&q=80',
    details: {
      time: '45-60 MIN',
      tools: [
        'Escaner OBD2 OEM Bidireccional',
        'Osciloscopio Digital de 4 Canales',
        'Analizador de Red CAN/LIN',
      ],
      cost: '$80 - $150 USD',
      link: '#protocolo-01-a',
    },
  },
  {
    id: '01.B',
    title: 'Performance Tuning',
    desc: 'Servicio de reprogramacion y ajuste de motor para que tu auto alcance su maximo potencial y se sienta de maravilla en la pista.',
    icon: 'zap',
    image:
      'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=1200&q=80',
    details: {
      time: '2-4 HORAS',
      tools: [
        'Dinamometro de Chasis',
        'Interfaz de Reprogramacion Flash',
        'Sondas Lambda de Banda Ancha',
      ],
      cost: '$350 - $800 USD',
      link: '#protocolo-01-b',
    },
  },
  {
    id: '01.C',
    title: 'Mecanica de Precision',
    desc: 'Laboratorio equipado con la ultima tecnologia y especialistas para realizar reparaciones seguras y eficientes.',
    icon: 'crosshair',
    image:
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
    details: {
      time: '90 MIN',
      tools: [
        'Alineadora Laser 3D de Alta Precision',
        'Balanceadora Computarizada',
        'Torquimetro Digital Calibrado',
      ],
      cost: '$120 - $250 USD',
      link: '#protocolo-01-c',
    },
  },
  {
    id: '01.D',
    title: 'Mantenimiento Especializado',
    desc: 'Programas preventivos para conservar el rendimiento, la seguridad y la vida util de tu vehiculo con criterio tecnico.',
    icon: 'shield',
    image:
      'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1200&q=80',
    details: {
      time: '60-120 MIN',
      tools: [
        'Fluidos Sinteticos de Alto Rendimiento',
        'Filtros de Especificacion OEM',
        'Camaras de Inspeccion Endoscopica',
      ],
      cost: '$200 - $450 USD',
      link: '#protocolo-01-d',
    },
  },
] as const;

export const marqueeItems = [
  'Diagnostico computarizado',
  'Ingenieria inversa',
  'Mantenimiento predictivo',
  'Calibracion laser',
];

export const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#contacto', label: 'Contacto' },
];

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: siteMeta.name,
  description: siteMeta.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteMeta.address,
    addressLocality: siteMeta.city,
    addressRegion: siteMeta.region,
    addressCountry: siteMeta.country,
  },
  areaServed: [
    {
      '@type': 'City',
      name: siteMeta.city,
    },
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteMeta.coordinates.latitude,
    longitude: siteMeta.coordinates.longitude,
  },
  serviceType: services.map((service) => service.title),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Protocolos de servicio',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.desc,
      },
    })),
  },
};
