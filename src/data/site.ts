export const whatsappUrl =
  'https://wa.me/573233661675?text=Hola%20NASA%20Auto%20Lab,%20solicito%20informacion%20sobre%20sus%20servicios.';

export const siteMeta = {
  name: 'NASA Auto Lab',
  shortName: 'NASA Auto Lab',
  title: 'NASA Auto Lab | Precision automotriz en Armenia, Quindio',
  description:
    'Laboratorio automotriz en Armenia, Quindio, especializado en mantenimiento preventivo, sincronizacion, frenos, suspension y cambio de aceite con estandar profesional.',
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
    desc: 'Inspeccion integral de puntos criticos para prevenir fallas, reducir desgaste y mantener el vehiculo confiable en el dia a dia.',
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
    desc: 'Calibramos el motor para mejorar respuesta, estabilidad de marcha y eficiencia, con chequeo de parametros clave.',
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
    desc: 'Diagnostico y ajuste del sistema de frenado para garantizar seguridad, control y respuesta consistente en ruta.',
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
    desc: 'Cambio de aceite y filtro con especificacion adecuada para proteger el motor y conservar un rendimiento estable.',
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
    desc: 'Revision y correccion de suspension para recuperar estabilidad, confort de marcha y precision de maniobra.',
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

export const heroHighlights = [
  'Diagnostico profesional',
  'Estandar tecnico confiable',
  'Atencion personalizada',
] as const;

export const trustStats = [
  { value: '+8', label: 'anos de experiencia' },
  { value: '+2k', label: 'vehiculos atendidos' },
  { value: '98%', label: 'clientes recurrentes' },
] as const;

export const pillars = [
  {
    title: 'Rigor tecnico',
    desc: 'Cada servicio sigue un protocolo claro para reducir errores y garantizar resultados consistentes.',
  },
  {
    title: 'Equipo actualizado',
    desc: 'Combinamos experiencia practica con formacion continua para resolver casos reales con criterio profesional.',
  },
  {
    title: 'Confianza total',
    desc: 'Te explicamos el estado del vehiculo y las recomendaciones con transparencia, sin sorpresas.',
  },
] as const;

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
