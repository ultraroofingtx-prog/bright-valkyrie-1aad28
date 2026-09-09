
const ALL_CITIES = [
  'Dallas', 'Fort Worth', 'Arlington', 'Plano', 'Irving', 'Frisco', 'McKinney',
  'Denton', 'Lewisville', 'Flower Mound', 'Grapevine', 'Carrollton', 'Richardson',
  'Garland', 'Mesquite', 'Allen', 'The Colony', 'Coppell', 'Southlake', 'Keller',
  'Rockwall', 'Mansfield', 'Weatherford', 'Waxahachie', 'Burleson', 'Prosper', 'Wylie',
];

const BASE_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  '@id': 'https://ultraroofingtx.com/#business',
  name: 'Ultra Roofing',
  image: 'https://ultraroofingtx.com/ultra-roofing-logo-transparent.png',
  url: 'https://ultraroofingtx.com',
  telephone: '+18333567233',
  email: 'office@ultraroofingtx.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '355 Graben Ln',
    addressLocality: 'Rhome',
    addressRegion: 'TX',
    postalCode: '76078',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.0542,
    longitude: -97.4714,
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61560269641430',
    'https://www.instagram.com/ultraroofing_tx',
  ],
};

interface BlogPostingProps {
  slug: string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}

interface SchemaMarkupProps {
  type?: 'organization' | 'service' | 'faq' | 'city' | 'blogPosting';
  faqItems?: Array<{ question: string; answer: string }>;
  cityName?: string;
  citySlug?: string;
  serviceName?: string;
  serviceDescription?: string;
  blogPosting?: BlogPostingProps;
}

export default function SchemaMarkup({
  type = 'organization',
  faqItems,
  cityName,
  citySlug,
  serviceName,
  serviceDescription,
  blogPosting,
}: SchemaMarkupProps) {
  const organizationSchema = {
    ...BASE_BUSINESS,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    areaServed: ALL_CITIES.map(city => ({ '@type': 'City', name: city })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName ?? 'Roofing Services',
    name: serviceName ? `${serviceName} | Ultra Roofing` : undefined,
    description: serviceDescription,
    provider: {
      '@type': 'RoofingContractor',
      '@id': 'https://ultraroofingtx.com/#business',
      name: 'Ultra Roofing',
      telephone: '+18333567233',
      url: 'https://ultraroofingtx.com',
    },
    areaServed: ALL_CITIES.map(city => ({ '@type': 'City', name: city })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Roofing Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Repair', description: 'Professional roof repair for leaks, missing shingles, hail damage, and wind damage throughout DFW.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Replacement', description: 'Complete roof replacement using premium asphalt shingles, metal, and modern roofing systems.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Storm Damage Repair', description: 'Hail and wind damage roof repair specialists assisting homeowners after severe Texas storms.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Insurance Claim Assistance', description: 'Expert help filing roof insurance claims from inspection to final repair approval.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Roofing', description: 'Commercial roofing services including TPO, EPDM, flat roofing, and metal roofing systems.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Maintenance', description: 'Annual roof inspection and preventative maintenance plans for DFW homeowners and businesses.' } },
      ],
    },
  };

  const citySchema = cityName && citySlug ? {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': `https://ultraroofingtx.com/service-areas/${citySlug}/#business`,
    name: 'Ultra Roofing',
    image: 'https://ultraroofingtx.com/ultra-roofing-logo-transparent.png',
    url: `https://ultraroofingtx.com/service-areas/${citySlug}`,
    telephone: '+18333567233',
    email: 'office@ultraroofingtx.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '355 Graben Ln',
      addressLocality: 'Rhome',
      addressRegion: 'TX',
      postalCode: '76078',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.0542,
      longitude: -97.4714,
    },
    areaServed: { '@type': 'City', name: cityName, containedInPlace: { '@type': 'State', name: 'Texas' } },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61560269641430',
      'https://www.instagram.com/ultraroofing_tx',
    ],
  } : null;

  const faqSchema = faqItems
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  const blogPostingSchema = blogPosting
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        mainEntityOfPage: { '@type': 'WebPage', '@id': `https://ultraroofingtx.com/blog/${blogPosting.slug}` },
        headline: blogPosting.headline,
        description: blogPosting.description,
        image: blogPosting.image,
        datePublished: blogPosting.datePublished,
        dateModified: blogPosting.dateModified ?? blogPosting.datePublished,
        author: { '@type': 'Organization', name: blogPosting.author ?? 'Ultra Roofing Team', url: 'https://ultraroofingtx.com/about' },
        publisher: {
          '@type': 'Organization',
          name: 'Ultra Roofing',
          logo: { '@type': 'ImageObject', url: 'https://ultraroofingtx.com/ultra-roofing-logo-transparent.png' },
        },
      }
    : null;

  const getSchema = () => {
    if (type === 'faq' && faqSchema) return faqSchema;
    if (type === 'city' && citySchema) return citySchema;
    if (type === 'service') return serviceSchema;
    if (type === 'blogPosting' && blogPostingSchema) return blogPostingSchema;
    return organizationSchema;
  };

  const schema = getSchema();

  // Server-rendered JSON-LD: baked into the static HTML so crawlers
  // and AI engines see it without executing JavaScript.
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
