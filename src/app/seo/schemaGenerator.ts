import { RouteMeta, SITE_URL, DEFAULT_OG_IMAGE } from './routeMetadata';
import { cityData } from '../data/roofingCityData';

const BASE_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  '@id': 'https://ultraroofingtx.com/#business',
  name: 'Ultra Roofing LLC',
  image: 'https://ultraroofingtx.com/ultra-roofing-logo-transparent.png',
  url: 'https://ultraroofingtx.com',
  telephone: '+18333567233',
  email: 'office@ultraroofingtx.com',
  priceRange: '$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '355 Graben Ln',
    addressLocality: 'Rhome',
    addressRegion: 'TX',
    postalCode: '76078',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 33.0542, longitude: -97.4714 },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  areaServed: [
    { '@type': 'City', name: 'Fort Worth' },
    { '@type': 'City', name: 'Rhome' },
    { '@type': 'City', name: 'Dallas' },
    { '@type': 'City', name: 'Arlington' },
    { '@type': 'City', name: 'Plano' },
    { '@type': 'City', name: 'Irving' },
    { '@type': 'City', name: 'Frisco' },
    { '@type': 'City', name: 'McKinney' },
    { '@type': 'City', name: 'Denton' },
    { '@type': 'City', name: 'Lewisville' },
    { '@type': 'City', name: 'Flower Mound' },
    { '@type': 'City', name: 'Grapevine' },
    { '@type': 'City', name: 'Carrollton' },
    { '@type': 'City', name: 'Richardson' },
    { '@type': 'City', name: 'Garland' },
    { '@type': 'City', name: 'Mesquite' },
    { '@type': 'City', name: 'Allen' },
    { '@type': 'City', name: 'The Colony' },
    { '@type': 'City', name: 'Coppell' },
    { '@type': 'City', name: 'Southlake' },
    { '@type': 'City', name: 'Keller' },
    { '@type': 'City', name: 'Rockwall' },
    { '@type': 'City', name: 'Mansfield' },
    { '@type': 'City', name: 'Weatherford' },
    { '@type': 'City', name: 'Waxahachie' },
    { '@type': 'City', name: 'Burleson' },
    { '@type': 'City', name: 'Prosper' },
    { '@type': 'City', name: 'Wylie' },
  ],
  sameAs: [
    'https://www.facebook.com/profile.php?id=61560269641430',
    'https://www.instagram.com/ultraroofing_tx',
  ],
};

const faqData: Record<string, Array<{ question: string; answer: string }>> = {
  '/blog/roof-replacement-cost-dallas-fort-worth': [
    { question: 'How much does a roof replacement cost in Dallas-Fort Worth?', answer: 'Roof replacement costs in DFW typically range from $8,000 to $25,000 depending on roof size, materials, and complexity. Most homeowners pay around $12,000-$15,000 for asphalt shingle replacement.' },
    { question: 'What factors affect roof replacement cost?', answer: 'Key factors include roof size (square footage), roofing material choice, roof pitch and complexity, removal of old roofing, and labor costs in the Dallas-Fort Worth area.' },
    { question: 'Does insurance cover roof replacement in Texas?', answer: 'Insurance typically covers roof replacement if damage results from storms, hail, wind, or other covered perils. Age-related wear or poor maintenance usually is not covered.' },
    { question: 'How long does a roof replacement take?', answer: 'Most residential roof replacements in DFW take 1-3 days depending on roof size and weather conditions. Larger or more complex roofs may take up to a week.' },
  ],
  '/commercial-roofing-systems-dfw': [
    { question: 'What is the most popular commercial roofing system in Dallas-Fort Worth?', answer: 'TPO single-ply membrane is the most widely installed commercial roofing system in DFW. Its combination of affordability, energy efficiency, and durability makes it ideal for office buildings, retail centers, and warehouses. EPDM remains popular for larger industrial facilities, and metal roofing is increasingly chosen for premium institutional properties.' },
    { question: 'How long does a TPO roof last in Texas heat?', answer: 'A properly installed TPO roof in DFW typically lasts 20-25 years. TPO membranes are engineered to withstand intense solar radiation and extreme temperature fluctuations common in North Texas summers. Lifespan depends on proper installation, regular maintenance, and roof traffic management.' },
    { question: 'Is EPDM or TPO better for hail damage resistance in DFW?', answer: "EPDM's rubber composition absorbs hail impact slightly better than TPO. However, both systems perform well when properly installed. For maximum impact resistance, Class 4-rated metal roofing provides the highest protection against the large hail stones that occasionally occur in DFW severe weather events." },
    { question: 'How much does commercial TPO roof replacement cost in Fort Worth?', answer: 'TPO installation in DFW typically runs $5.50-$9.00 per square foot installed. A 10,000-square-foot commercial roof runs approximately $55,000-$90,000 depending on insulation, tear-off, and deck condition. Ultra Roofing provides free estimates with itemized breakdowns.' },
    { question: 'Does Ultra Roofing install metal roofing on commercial buildings in DFW?', answer: 'Yes. Ultra Roofing installs standing seam metal, R-panel, and single-lock panel systems on commercial buildings across the Dallas-Fort Worth metroplex, including Irving, Fort Worth, Arlington, Grand Prairie, and surrounding cities.' },
  ],
  '/commercial-roof-insurance-claim-texas': [
    { question: 'How long do I have to file a commercial roof insurance claim in Texas after a hail storm?', answer: 'Texas law provides a two-year statute of limitations from the storm date. However, your individual policy may require notification within a shorter window. Review your policy terms and file promptly.' },
    { question: 'Does my commercial insurance cover TPO or EPDM roof replacement after hail?', answer: 'Most commercial property policies cover sudden storm damage to roofing systems including TPO and EPDM membranes. Coverage depends on your specific policy terms, your deductible type, and whether damage is classified as sudden loss versus gradual deterioration.' },
    { question: 'How much is a typical commercial wind and hail deductible in Texas?', answer: "Commercial wind and hail deductibles in Texas commonly range from 1-5% of your property's total insured value — separate from your standard deductible. On a $1 million insured property, a 2% deductible equals $20,000." },
    { question: 'What if my insurance company underpays my commercial roof claim?', answer: 'You can invoke the Appraisal clause in most Texas commercial policies, allowing both parties to select an independent appraiser. This can result in a binding award without litigation.' },
    { question: 'Does Ultra Roofing help with the insurance claims process?', answer: 'Yes. Ultra Roofing provides free post-storm commercial roof inspections, written damage reports, and works directly with your insurance adjuster on scope and documentation across the Dallas-Fort Worth area.' },
  ],
  '/commercial-roofing-cost-dfw': [
    { question: 'How much does commercial roof replacement cost in Dallas Fort Worth?', answer: 'Commercial roof replacement in DFW ranges from $8-$20 per square foot installed. A 10,000 sqft TPO replacement typically runs $55,000-$90,000. Ultra Roofing provides free estimates with itemized line-item breakdowns.' },
    { question: 'Is it cheaper to coat or replace a commercial flat roof in Texas?', answer: 'When the existing membrane is structurally sound and insulation is confirmed dry by infrared moisture scan, a roof coating system costs 30-60% less than full replacement and extends service life by 10-15 years.' },
    { question: 'How does hail damage affect commercial roofing costs in the DFW area?', answer: 'If your commercial roof sustained hail damage, your insurance policy may cover the full replacement cost minus your deductible. In that scenario, your out-of-pocket cost is your deductible — not the full replacement price.' },
    { question: 'When is the best time to schedule a commercial roof replacement in DFW?', answer: 'Fall (September-November) and late winter (January-February) offer the best combination of contractor availability and stable pricing. Avoiding the April-June hail season and its post-storm demand surge can reduce your project cost.' },
    { question: 'Does Ultra Roofing offer financing or payment terms for commercial roofing projects?', answer: 'Contact Ultra Roofing directly to discuss project financing options for commercial roofing work in the DFW area.' },
  ],
  '/dfw-hail-season-commercial-roofing-guide': [
    { question: 'When is hail season in Dallas-Fort Worth?', answer: 'DFW hail season peaks April through June (~65% of significant hail events in Tarrant County). Secondary season is October. Schedule pre-season inspections before April each year.' },
    { question: 'How do I know if my commercial roof was damaged by hail?', answer: 'Hail damage to TPO and EPDM commercial roofs is often not visible from ground level. Watch for: new interior leaks after a storm, denting on HVAC units or metal flashing, granule accumulation in drains. A professional inspection is the only reliable confirmation method.' },
    { question: 'Does hail damage commercial TPO roofs?', answer: 'Yes. Hail 1 inch and larger can cause impact marks, micro-tears, and seam stress in TPO membranes. These may not produce immediate leaks but become active failure points over following months.' },
    { question: 'How quickly should I file a hail damage claim for my commercial building in Texas?', answer: 'File as soon as your documentation is in order. Texas law gives you two years from the storm date, but individual policies may have shorter reporting requirements.' },
    { question: 'Does Ultra Roofing offer emergency roof inspections after DFW hail storms?', answer: 'Yes. Ultra Roofing provides free emergency post-storm commercial roof inspections across Irving, Fort Worth, Arlington, Dallas, Grand Prairie, and surrounding DFW cities, with written reports suitable for insurance claim submission.' },
  ],
  '/how-to-choose-commercial-roofing-contractor-dfw': [
    { question: "How do I verify a roofing contractor's license in Texas?", answer: "Search the contractor's name on the Texas Department of Licensing and Regulation (TDLR) website at tdlr.texas.gov. A valid Texas roofing registration should appear. Do not hire any contractor who cannot produce a current TDLR registration." },
    { question: 'What questions should I ask a commercial roofing contractor before hiring?', answer: 'Key questions: Are you licensed in Texas? Can I see your current Certificate of Insurance? What manufacturer certifications do you hold? Can you provide local commercial references? Does your bid include itemized scope with system specs and warranty terms?' },
    { question: 'What is an Assignment of Benefits agreement and should I sign one?', answer: 'An Assignment of Benefits (AOB) transfers your insurance claim rights directly to the contractor. This removes your control over the claims process. Ultra Roofing does not require AOB agreements — we work with your insurer on your behalf while you retain full control.' },
    { question: 'How do I know if a roofing contractor is storm chasing vs. locally based?', answer: 'Ask for a local Texas business address, TDLR registration, and references on completed commercial projects in the DFW area. A legitimate local contractor has verifiable references and no pressure to sign before the adjuster inspects.' },
    { question: 'Is Ultra Roofing a local DFW commercial roofing contractor?', answer: 'Yes. Ultra Roofing is based in Rhome, TX and serves commercial property owners across the entire Dallas-Fort Worth metroplex — including Fort Worth, Arlington, Grand Prairie, Mansfield, North Richland Hills, Keller, Grapevine, Colleyville, and Southlake.' },
  ],
  '/roof-replacement': [
    { question: 'How long does a roof replacement take in Fort Worth?', answer: 'Most residential roof replacements take 1-3 days depending on roof size, pitch, and weather. Larger or more complex roofs may take up to a week.' },
    { question: 'What roofing materials does Ultra Roofing install?', answer: 'We install IKO Dynasty Class 3 impact-resistant shingles, standing seam metal, R-panel metal, TPO single-ply membrane, and rolled roofing systems.' },
    { question: 'Will insurance cover my roof replacement?', answer: 'If your roof was damaged by hail, wind, or another covered peril, your homeowner\'s insurance typically covers replacement minus your deductible. Ultra Roofing assists with the entire claims process.' },
    { question: 'How do I know if I need a full replacement vs. a repair?', answer: 'If damage is widespread, your roof is near end of life, or multiple layers of shingles already exist, replacement is usually more cost-effective. A free inspection will determine the best path.' },
    { question: 'Does Ultra Roofing offer financing for roof replacement?', answer: 'Contact us to discuss available payment options for your roof replacement project.' },
  ],
  '/roof-repair': [
    { question: 'How quickly can Ultra Roofing respond to a repair call?', answer: 'We offer same-day and next-day service for most roof repairs in Fort Worth and surrounding areas, depending on weather and scheduling.' },
    { question: 'What types of roof repairs do you handle?', answer: 'We repair leaks, missing or damaged shingles, flashing failures, vent boot cracks, gutter damage, and storm-related issues on both residential and commercial roofs.' },
    { question: 'Is it worth repairing an old roof or should I replace it?', answer: 'If the damage is isolated and the roof still has useful life remaining, a repair is often the right choice. Our inspection will give you an honest recommendation.' },
    { question: 'Do you repair flat roofs and metal roofs?', answer: 'Yes. We repair TPO, EPDM, modified bitumen flat roofs, standing seam metal, and R-panel metal roofing systems.' },
  ],
  '/storm-hail-damage': [
    { question: 'What should I do immediately after a hailstorm hits my roof?', answer: 'Document any visible damage with photos, contact your insurance company to open a claim, and schedule a free roof inspection. Do not attempt to climb on the roof yourself.' },
    { question: 'How do I know if my roof has hail damage?', answer: 'Signs include dented gutters or vents, granule loss on shingles, cracked or bruised shingles, and dents in metal components. Many hail impacts are not visible from the ground.' },
    { question: 'Does Ultra Roofing work with insurance companies?', answer: 'Yes. We meet with your adjuster on-site, provide detailed documentation of all damage, and work directly with your insurance company throughout the claim process.' },
    { question: 'How long do I have to file a hail damage claim in Texas?', answer: 'Texas law allows two years from the storm date, but your individual policy may have shorter notification requirements. File promptly for best results.' },
    { question: 'Will my insurance premium go up if I file a hail claim?', answer: 'Hail claims are generally considered acts of nature rather than negligence. Consult your agent, but most Texas insurers do not penalize homeowners for weather-related claims.' },
  ],
  '/commercial-roofing': [
    { question: 'What commercial roofing systems does Ultra Roofing install?', answer: 'We install TPO single-ply membrane, EPDM, modified bitumen, standing seam metal, R-panel metal, and built-up roofing systems for commercial properties.' },
    { question: 'How long does a TPO commercial roof last in Texas?', answer: 'A properly installed TPO membrane typically lasts 20-25 years in the DFW climate with regular maintenance and inspections.' },
    { question: 'Do you offer commercial roof maintenance programs?', answer: 'Yes. We offer scheduled inspection and maintenance programs to extend the life of your commercial roof and catch small issues before they become costly repairs.' },
    { question: 'Can you roof an occupied commercial building?', answer: 'Yes. We coordinate work schedules to minimize disruption to your tenants and business operations, including off-hours and phased installations when needed.' },
  ],
  '/metal-roofing': [
    { question: 'How long does a metal roof last in Texas?', answer: 'A quality standing seam or R-panel metal roof typically lasts 40-70 years with minimal maintenance, far outlasting traditional asphalt shingles.' },
    { question: 'Is metal roofing more expensive than shingles?', answer: 'The upfront cost is higher, but metal roofs last 2-3 times longer and offer energy savings through solar reflectance. Over the roof\'s lifetime, total cost of ownership is often lower.' },
    { question: 'Are metal roofs noisy during rain or hail?', answer: 'Modern metal roofing installed over solid decking and underlayment is no louder than other roof types during rain. The solid substrate absorbs sound.' },
    { question: 'What is the difference between standing seam and R-panel?', answer: 'Standing seam uses concealed fasteners and interlocking panels for a sleek look and superior weather protection. R-panel uses exposed fasteners and is more budget-friendly, often used on commercial and agricultural buildings.' },
    { question: 'Does Ultra Roofing install metal roofs on existing homes?', answer: 'Yes. We install metal roofing on both new construction and existing homes. In most cases, the old roof is removed first to inspect the decking.' },
  ],
  '/roof-inspections': [
    { question: 'What does a roof inspection include?', answer: 'Our inspections cover shingles or membrane condition, flashing, vents, gutters, decking integrity, attic ventilation, and any signs of leaks or storm damage. We use drone technology for detailed aerial views.' },
    { question: 'How much does a roof inspection cost?', answer: 'Ultra Roofing offers free roof inspections for homeowners and property managers in the Fort Worth and DFW area.' },
    { question: 'How often should I have my roof inspected?', answer: 'We recommend annual inspections plus after any major storm. Regular inspections catch small problems before they become expensive repairs.' },
    { question: 'Do you provide inspection reports for insurance claims?', answer: 'Yes. We provide detailed written reports with photos documenting all damage found, formatted for insurance claim submission.' },
  ],
  '/fort-worth-roofing': [
    { question: 'What areas of Fort Worth does Ultra Roofing serve?', answer: 'We serve all of Fort Worth including downtown, the Stockyards district, TCU area, Westover Hills, Ridglea, and all surrounding neighborhoods.' },
    { question: 'How often does Fort Worth get hail damage?', answer: 'Fort Worth is in a high-frequency hail corridor. The DFW area averages multiple significant hail events per year, typically peaking April through June.' },
    { question: 'Is Ultra Roofing licensed to work in Fort Worth?', answer: 'Yes. Ultra Roofing holds all required Texas state registrations and meets Fort Worth permitting requirements for residential and commercial roofing work.' },
    { question: 'Do you offer emergency roof repair in Fort Worth?', answer: 'Yes. We provide emergency tarping and repair services for Fort Worth homeowners dealing with active leaks or storm damage.' },
  ],
  '/rhome-roofing': [
    { question: 'Where is Ultra Roofing based?', answer: 'Ultra Roofing is based in Rhome, TX at 355 Graben Ln. Rhome is our home base, so local residents get the fastest response times.' },
    { question: 'What roofing services do you offer in Rhome?', answer: 'We provide roof replacement, repair, storm damage restoration, metal roofing, and free inspections for residential and commercial properties in Rhome.' },
    { question: 'Do you handle insurance claims for Rhome homeowners?', answer: 'Yes. We assist Rhome homeowners with the full insurance claim process from inspection and documentation through final repair completion.' },
    { question: 'What roofing materials work best for Rhome homes?', answer: 'IKO Dynasty Class 3 impact-resistant shingles and standing seam metal are popular choices for Rhome homes due to hail frequency in our area.' },
  ],
  '/saginaw-roofing': [
    { question: 'How close is Ultra Roofing to Saginaw?', answer: 'Our office in Rhome is just minutes from Saginaw, making us one of the closest full-service roofing contractors available to Saginaw residents.' },
    { question: 'Does Saginaw require permits for roofing work?', answer: 'Yes. The City of Saginaw requires building permits for roof replacement. Ultra Roofing handles all permit applications on your behalf.' },
    { question: 'What is the most common roof type in Saginaw?', answer: 'Most Saginaw homes have asphalt shingle roofs. We also see growing interest in impact-resistant shingles and metal roofing due to frequent hail.' },
    { question: 'Do you offer free estimates in Saginaw?', answer: 'Yes. We provide free roof inspections and estimates for all Saginaw homeowners and property managers.' },
  ],
  '/haslet-roofing': [
    { question: 'Does Ultra Roofing serve Haslet, TX?', answer: 'Yes. Haslet is in our immediate service area — just a few miles from our Rhome office. We provide fast response times for Haslet residents.' },
    { question: 'What type of roofing is best for Haslet homes?', answer: 'Impact-resistant shingles like IKO Dynasty Class 3 are ideal for Haslet due to the area\'s hail exposure. Metal roofing is also an excellent long-term option.' },
    { question: 'Can you help with insurance claims in Haslet?', answer: 'Yes. We assist Haslet homeowners with storm damage documentation, adjuster meetings, and the full insurance claims process at no additional cost.' },
    { question: 'How do I schedule a roof inspection in Haslet?', answer: 'Call us at (833) 356-7233 or use our online contact form to schedule a free drone-assisted roof inspection at your Haslet property.' },
  ],
};

function organizationSchema() {
  return { ...BASE_BUSINESS };
}

function serviceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Roofing Services',
    provider: { '@type': 'RoofingContractor', '@id': 'https://ultraroofingtx.com/#business', name: 'Ultra Roofing', telephone: '+18333567233', url: 'https://ultraroofingtx.com' },
    areaServed: BASE_BUSINESS.areaServed,
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
}

function citySchema(cityName: string, citySlug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': `https://ultraroofingtx.com/service-areas/${citySlug}/#business`,
    name: 'Ultra Roofing',
    image: 'https://ultraroofingtx.com/ultra-roofing-logo-transparent.png',
    url: `https://ultraroofingtx.com/service-areas/${citySlug}`,
    telephone: '+18333567233',
    email: 'office@ultraroofingtx.com',
    priceRange: '$$',
    address: { '@type': 'PostalAddress', streetAddress: '355 Graben Ln', addressLocality: 'Rhome', addressRegion: 'TX', postalCode: '76078', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: 33.0542, longitude: -97.4714 },
    areaServed: { '@type': 'City', name: cityName, containedInPlace: { '@type': 'State', name: 'Texas' } },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
    sameAs: ['https://www.facebook.com/profile.php?id=61560269641430', 'https://www.instagram.com/ultraroofing_tx'],
  };
}

function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

function getFaqItems(path: string): Array<{ question: string; answer: string }> | undefined {
  if (faqData[path]) return faqData[path];
  const roofingMatch = path.match(/^\/roofing\/(.+)$/);
  if (roofingMatch) {
    const city = cityData[roofingMatch[1]];
    if (city) return city.faqs.map(f => ({ question: f.q, answer: f.a }));
  }
  return undefined;
}

export function getSchemaForRoute(path: string, meta: RouteMeta): object | object[] {
  const base = { ...BASE_BUSINESS };
  const faqItems = meta.schemaType === 'faq' ? getFaqItems(path) : undefined;
  if (faqItems) {
    return [base, faqSchema(faqItems)];
  }
  if (meta.schemaType === 'city' && meta.cityName && meta.citySlug) {
    return citySchema(meta.cityName, meta.citySlug);
  }
  if (meta.schemaType === 'service') {
    return [base, serviceSchema()];
  }
  if (meta.schemaType === 'organization' || path === '/') {
    return organizationSchema();
  }
  return base;
}

export function buildHeadTags(path: string, meta: RouteMeta): string {
  const canonical = meta.canonicalUrl || `${SITE_URL}${path}`;
  const ogImage = meta.ogImage || DEFAULT_OG_IMAGE;
  const ogTitle = meta.ogTitle || meta.title;
  const ogDesc = meta.ogDescription || meta.description;
  const robots = meta.noindex ? 'noindex, nofollow' : 'index, follow';

  const tags: string[] = [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<link rel="canonical" href="${escapeAttr(canonical)}" />`,
    `<meta property="og:title" content="${escapeAttr(ogTitle)}" />`,
    `<meta property="og:description" content="${escapeAttr(ogDesc)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:site_name" content="Ultra Roofing" />`,
    `<meta property="og:url" content="${escapeAttr(canonical)}" />`,
    `<meta property="og:image" content="${escapeAttr(ogImage)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(ogTitle)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(ogDesc)}" />`,
    `<meta name="twitter:image" content="${escapeAttr(ogImage)}" />`,
  ];

  if (meta.keywords) {
    tags.push(`<meta name="keywords" content="${escapeAttr(meta.keywords)}" />`);
  }

  const schema = getSchemaForRoute(path, meta);
  if (Array.isArray(schema)) {
    for (const s of schema) {
      tags.push(`<script type="application/ld+json">${JSON.stringify(s)}</script>`);
    }
  } else {
    tags.push(`<script type="application/ld+json">${JSON.stringify(schema)}</script>`);
  }

  return tags.join('\n    ');
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function escapeAttr(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
