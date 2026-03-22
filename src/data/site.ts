export const whatsappUrl =
  'https://wa.me/573233661675?text=Hola%20NASA%20Auto%20Lab,%20solicito%20informacion%20sobre%20sus%20servicios.';

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
    title: 'Mantenimiento preventivo',
    desc: 'Inspeccion completa de puntos clave para prevenir averias, alargar la vida util del vehiculo y mantenerlo trabajando en optimas condiciones.',
    icon: 'activity',
    image: '/WhatsApp Image 2026-03-21 at 6.06.44 PM (1).jpeg',
    imagePosition: 'center 58%',
    details: {
      time: '60-90 MIN',
      tools: [
        'Revision general de niveles',
        'Inspeccion de filtros y correas',
        'Chequeo preventivo de seguridad',
      ],
      cost: '$80 - $140 USD',
      link: '#protocolo-01-a',
    },
  },
  {
    id: '01.B',
    title: 'Sincronizacion',
    desc: 'Ajustamos el funcionamiento del motor para lograr una marcha mas estable, mejor respuesta al acelerar y un consumo mas eficiente.',
    icon: 'zap',
    image: '/WhatsApp Image 2026-03-21 at 6.06.44 PM (2).jpeg',
    imagePosition: 'center 35%',
    details: {
      time: '90-120 MIN',
      tools: [
        'Calibracion de encendido',
        'Ajuste de mezcla y respuesta',
        'Diagnostico de funcionamiento',
      ],
      cost: '$100 - $180 USD',
      link: '#protocolo-01-b',
    },
  },
  {
    id: '01.C',
    title: 'Frenos',
    desc: 'Revisamos y corregimos el sistema de frenado para darte mayor seguridad, mejor respuesta en ruta y confianza en cada trayecto.',
    icon: 'crosshair',
    image: '/WhatsApp Image 2026-03-21 at 6.06.45 PM.jpeg',
    imagePosition: 'center 52%',
    details: {
      time: '60-120 MIN',
      tools: [
        'Revision de pastillas y discos',
        'Cambio de liquido de frenos',
        'Prueba de frenado y ajuste',
      ],
      cost: '$90 - $220 USD',
      link: '#protocolo-01-c',
    },
  },
  {
    id: '01.D',
    title: 'Cambio de aceite',
    desc: 'Renovamos aceite y filtros con el producto adecuado para cuidar el motor, reducir desgaste y conservar su rendimiento diario.',
    icon: 'shield',
    image: '/WhatsApp Image 2026-03-21 at 6.06.45 PM (1).jpeg',
    imagePosition: 'center 50%',
    details: {
      time: '30-45 MIN',
      tools: [
        'Aceite segun especificacion',
        'Filtro nuevo de calidad',
        'Revision de niveles complementarios',
      ],
      cost: '$40 - $90 USD',
      link: '#protocolo-01-d',
    },
  },
  {
    id: '01.E',
    title: 'Suspension',
    desc: 'Evaluamos y corregimos componentes de suspension para mejorar estabilidad, suavidad de manejo y control del vehiculo.',
    icon: 'shield',
    image: '/WhatsApp Image 2026-03-21 at 6.06.44 PM.jpeg',
    imagePosition: 'center 48%',
    details: {
      time: '90-150 MIN',
      tools: [
        'Revision de amortiguadores',
        'Chequeo de bujes y terminales',
        'Prueba de estabilidad y desgaste',
      ],
      cost: '$120 - $260 USD',
      link: '#protocolo-01-e',
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
