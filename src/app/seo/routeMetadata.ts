export interface RouteMeta {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noindex?: boolean;
  schemaType?: 'organization' | 'service' | 'faq' | 'city';
  cityName?: string;
  citySlug?: string;
}

const SITE_URL = 'https://ultraroofingtx.com';
const DEFAULT_OG_IMAGE = 'https://ultraroofingtx.com/ULTRA%20ROOFING%20logo%20(1).png';

export const routes: Record<string, RouteMeta> = {
  '/': {
    title: 'Fort Worth Roofing Contractor | Ultra Roofing',
    description: 'Fort Worth roofing contractor for residential & commercial roofs. Free drone inspections, insurance claim help, shingle, metal & TPO experts. Call today.',
    keywords: 'roofing contractor Dallas Fort Worth, roofer near me DFW, roof repair Dallas, roof replacement Fort Worth, hail damage roof repair DFW, storm damage roofing Texas, licensed roofing contractor North Texas, free roof inspection Dallas, emergency roof repair DFW, residential roofing Dallas, commercial roofing Fort Worth, roof replacement cost DFW, insurance claim roofing Texas, GAF certified roofer DFW, local roofing company North Texas',
    ogTitle: 'Fort Worth Roofing Contractor | Ultra Roofing',
    ogDescription: 'Fort Worth roofing contractor for residential & commercial roofs. Free drone inspections, insurance claim help, shingle, metal & TPO experts. Call today.',
    ogImage: DEFAULT_OG_IMAGE,
    canonicalUrl: SITE_URL,
    schemaType: 'organization',
  },
  '/about': {
    title: 'About Ultra Roofing | DFW Roofing Company',
    description: 'Locally owned roofing company serving Fort Worth and the DFW metro. Meet the Ultra Roofing team and see how we handle repairs, replacements, and storm claims.',
    keywords: 'about Ultra Roofing, family owned roofing company DFW, licensed roofing contractor Dallas, insured roofer Fort Worth, GAF certified roofing DFW, Owens Corning preferred contractor Texas, local roofer North Texas, trusted roofing company Dallas Fort Worth, roofing company 10 years experience DFW',
    ogTitle: 'About Ultra Roofing | DFW Roofing Company',
    ogDescription: 'Locally owned roofing company serving Fort Worth and the DFW metro. Meet the Ultra Roofing team and see how we handle repairs, replacements, and storm claims.',
    ogImage: DEFAULT_OG_IMAGE,
    canonicalUrl: `${SITE_URL}/about`,
  },
  '/services': {
    title: 'Roofing Services DFW | Residential & Commercial Roofing | Ultra Roofing',
    description: 'Complete roofing services for Dallas-Fort Worth: residential roof replacement, commercial TPO/EPDM, storm damage repair, insurance claim assistance, and maintenance plans. Free inspections.',
    keywords: 'roofing services Dallas Fort Worth, residential roofing DFW, commercial roofing Dallas, storm damage repair Fort Worth, roof replacement Dallas TX, TPO roofing DFW, EPDM roofing Fort Worth, roof maintenance plans DFW, insurance claim roofing Texas, roof leak repair Dallas',
    canonicalUrl: `${SITE_URL}/services`,
    schemaType: 'service',
  },
  '/maintenance': {
    title: 'Roof Maintenance Plans DFW | Residential & Commercial | Ultra Roofing',
    description: 'Preventative roof maintenance plans for DFW homes and businesses. Annual inspections, gutter cleaning, minor repairs, and priority storm scheduling. Extend your roof life with Ultra Roofing.',
    keywords: 'roof maintenance plan DFW, residential roof maintenance Dallas, commercial roof maintenance Fort Worth, preventative roofing Texas, annual roof inspection DFW, gutter cleaning Dallas, roof upkeep plan Fort Worth, roof maintenance program Texas',
    canonicalUrl: `${SITE_URL}/maintenance`,
  },
  '/team': {
    title: 'Meet the Ultra Roofing Team | Certified DFW Roofing Experts',
    description: 'Meet the licensed, certified roofing professionals at Ultra Roofing — serving Dallas-Fort Worth with precision craftsmanship. GAF trained, insurance claim specialists, and local North Texas experts.',
    keywords: 'Ultra Roofing team DFW, certified roofing professionals Dallas, licensed roofers Fort Worth, roofing experts North Texas, GAF trained roofers DFW, professional roofing crew Dallas',
    canonicalUrl: `${SITE_URL}/team`,
  },
  '/contact': {
    title: 'Free Roof Inspection Dallas Fort Worth | Get a Quote | Ultra Roofing',
    description: "Schedule your free roof inspection with Ultra Roofing — licensed DFW roofing contractor. Fast response, no-obligation estimates, and expert insurance claim guidance across all Dallas-Fort Worth cities.",
    keywords: 'free roof inspection Dallas, free roof estimate Fort Worth, contact roofer DFW, roof inspection near me, same-day roof inspection Dallas, hail damage estimate DFW, roof repair quote North Texas, emergency roofer near me DFW, schedule roofing inspection Texas, get roof replaced DFW',
    canonicalUrl: `${SITE_URL}/contact`,
  },
  '/blog': {
    title: 'Roofing Blog | Tips, Guides & Advice for DFW Homeowners | Ultra Roofing',
    description: 'Expert roofing articles for Dallas-Fort Worth homeowners. Learn about roof replacement costs, hail damage, insurance claims, maintenance, and choosing the right roofing contractor in DFW.',
    keywords: 'DFW roofing blog, roofing tips Dallas Fort Worth, roof repair advice Texas, hail damage roof blog, roof replacement guide DFW, roofing contractor tips Dallas, roof maintenance blog Fort Worth',
    canonicalUrl: `${SITE_URL}/blog`,
  },
  '/service-areas': {
    title: 'Roofing Contractor Near Me | DFW Service Areas | Ultra Roofing',
    description: 'Ultra Roofing serves 27+ cities across Dallas-Fort Worth including Dallas, Fort Worth, Plano, Frisco, McKinney, Arlington, and more. Local roofers, free inspections, licensed & insured.',
    keywords: 'roofing contractor near me DFW, local roofer Dallas Fort Worth, roofer near me North Texas, roofing company Plano TX, roof repair Frisco TX, roofing McKinney TX, roofer Arlington TX, roofing Garland TX, roof replacement Irving TX, Denton roofing contractor, Lewisville roofer, roofing service areas DFW, North Texas roofing company',
    canonicalUrl: `${SITE_URL}/service-areas`,
  },

  // Blog posts
  '/blog/texas-heat-impacts-roof-lifespan': {
    title: 'How Texas Summer Heat Damages Your Roof | Prepare Now | Ultra Roofing DFW',
    description: 'With Texas summer temperatures approaching 100°F, now is the time to prepare your roof. Learn how extreme heat and UV exposure shorten roof life in DFW and how to protect your investment.',
    keywords: 'Texas summer heat roof damage, roof lifespan DFW summer, UV roof protection Dallas, prepare roof for summer Texas, heat resistant roofing DFW, summer roof damage prevention, roof ventilation Texas heat, energy efficient roofing Dallas',
    canonicalUrl: `${SITE_URL}/blog/texas-heat-impacts-roof-lifespan`,
  },
  '/blog/what-to-do-after-hailstorm-dfw': {
    title: 'What to Do After a Hailstorm in DFW | Free Roof Inspection | Ultra Roofing',
    description: 'Spring storm season is active across Dallas-Fort Worth. If hail hit your roof, act fast — get a free same-day inspection, document damage, and file your insurance claim with Ultra Roofing\'s help.',
    keywords: 'what to do after hailstorm DFW, hail damage roof inspection Dallas, spring hail roof repair, emergency roof inspection Fort Worth, hail roof insurance claim Texas, storm damage assessment DFW, roof damage after storm Texas, hail damage roofer near me',
    canonicalUrl: `${SITE_URL}/blog/what-to-do-after-hailstorm-dfw`,
  },
  '/blog/best-roofing-materials-dfw-homes': {
    title: 'Best Roofing Materials for DFW Homes | Asphalt, Metal & More | Ultra Roofing',
    description: 'Compare asphalt shingles, metal roofing, and impact-resistant materials built for Texas weather. Find the best roofing system for your Dallas-Fort Worth home with Ultra Roofing.',
    keywords: 'best roofing materials DFW, asphalt shingles Dallas TX, metal roofing vs asphalt DFW, impact resistant shingles Texas, Class 4 shingles DFW, roofing systems North Texas, CertainTeed shingles Dallas, GAF shingles DFW, Owens Corning roofing Texas, roofing material comparison Dallas Fort Worth',
    canonicalUrl: `${SITE_URL}/blog/best-roofing-materials-dfw-homes`,
  },
  '/blog/why-roof-maintenance-saves-money': {
    title: 'Spring Roof Maintenance Checklist for DFW Homeowners | Ultra Roofing',
    description: 'Spring is the best time to check for storm damage, clear debris, and prepare your roof for the Texas summer. A maintenance visit now can prevent thousands in repairs later. Ultra Roofing serves all DFW cities.',
    keywords: 'spring roof maintenance checklist DFW, post-storm roof checkup Dallas, roof maintenance saves money Texas, seasonal roof inspection Fort Worth, prevent summer roof damage DFW, spring roof inspection near me, roof upkeep Texas, annual roof checkup Dallas',
    canonicalUrl: `${SITE_URL}/blog/why-roof-maintenance-saves-money`,
  },
  '/blog/roof-coatings-commercial-roof-life': {
    title: 'Commercial Roof Coatings DFW | Extend Flat Roof Life | Ultra Roofing',
    description: 'Silicone and elastomeric roof coatings can add 10-15 years to your commercial roof. Ultra Roofing applies TPO coatings, roof restoration systems, and waterproof coatings across all of Dallas-Fort Worth.',
    keywords: 'commercial roof coating DFW, flat roof coating Dallas, TPO roof coating Fort Worth, silicone roof coating North Texas, roof restoration Dallas TX, commercial roofing repair DFW, elastomeric roof coating Texas, extend roof life DFW, commercial roofer Dallas Fort Worth, roof waterproofing Texas',
    canonicalUrl: `${SITE_URL}/blog/roof-coatings-commercial-roof-life`,
  },
  '/blog/signs-replace-roof-north-texas': {
    title: '5 Signs You Need a New Roof | Roof Replacement DFW | Ultra Roofing',
    description: 'Curling shingles, persistent leaks, or a roof over 20 years old? Learn the 5 warning signs that mean it\'s time for a roof replacement in Dallas-Fort Worth — and get a free inspection from Ultra Roofing.',
    keywords: 'signs need new roof DFW, roof replacement Dallas TX, when to replace roof North Texas, old roof damage signs, shingle damage Dallas, roof replacement Fort Worth, aging roof warning signs Texas, roof replacement cost DFW, roof lifespan Texas, need new roof Dallas',
    canonicalUrl: `${SITE_URL}/blog/signs-replace-roof-north-texas`,
  },
  '/blog/roof-replacement-cost-dallas-fort-worth': {
    title: 'How Much Does a Roof Replacement Cost in Dallas-Fort Worth? | Ultra Roofing',
    description: 'Learn about roof replacement costs in Dallas-Fort Worth. Get pricing estimates, cost factors, and tips for budgeting your roofing project from Ultra Roofing.',
    keywords: 'roof replacement cost, roof replacement price Dallas, Fort Worth roof replacement cost, new roof cost DFW, roofing prices Texas',
    canonicalUrl: `${SITE_URL}/blog/roof-replacement-cost-dallas-fort-worth`,
    schemaType: 'faq',
  },
  '/blog/spring-roof-inspection-checklist-dfw': {
    title: 'Spring Roof Inspection Checklist for DFW Homeowners | Ultra Roofing',
    description: 'Use this spring roof inspection checklist to catch storm damage, leaks, and wear before the Texas summer heat arrives. Ultra Roofing serves all Dallas-Fort Worth cities.',
    keywords: 'spring roof inspection checklist DFW, roof inspection after winter Texas, spring roof maintenance Dallas, pre-summer roof check Fort Worth, roof inspection tips Texas homeowners',
    canonicalUrl: `${SITE_URL}/blog/spring-roof-inspection-checklist-dfw`,
  },
  '/blog/roof-ventilation-texas-summer': {
    title: 'Roof Ventilation for Texas Summer Heat | Lower Energy Bills | Ultra Roofing DFW',
    description: 'Proper roof ventilation is critical before the Texas summer. Learn how attic heat buildup destroys shingles, spikes energy costs, and how to fix it. Serving all DFW cities.',
    keywords: 'roof ventilation Texas summer, attic ventilation DFW, reduce energy bills roof Dallas, attic heat damage shingles Fort Worth, roof ventilation upgrade Texas, soffit ridge vent DFW',
    canonicalUrl: `${SITE_URL}/blog/roof-ventilation-texas-summer`,
  },
  '/blog/how-to-file-roof-insurance-claim-texas': {
    title: 'How to File a Roof Insurance Claim in Texas | Step-by-Step Guide | Ultra Roofing',
    description: 'Texas homeowners: learn exactly how to file a roof insurance claim after hail or wind damage. Ultra Roofing walks you through every step and works directly with your adjuster.',
    keywords: 'roof insurance claim Texas, how to file roof claim DFW, hail damage insurance claim Dallas, roof claim process Fort Worth, insurance adjuster roof inspection Texas, denied roof claim help DFW',
    canonicalUrl: `${SITE_URL}/blog/how-to-file-roof-insurance-claim-texas`,
  },
  '/blog/metal-roofing-dfw-pros-cons-cost': {
    title: 'Is Metal Roofing Worth It in DFW? Pros, Cons & Costs | Ultra Roofing',
    description: 'Considering a metal roof for your Dallas-Fort Worth home? Learn how metal roofing holds up against Texas hail, heat, and storms — and whether it\'s worth the cost.',
    keywords: 'metal roofing DFW, metal roof vs shingles Texas, metal roof hail resistance Dallas, standing seam metal roof Fort Worth, metal roof cost DFW, metal roofing benefits Texas',
    canonicalUrl: `${SITE_URL}/blog/metal-roofing-dfw-pros-cons-cost`,
  },
  '/blog/how-to-choose-roofing-contractor-dfw': {
    title: 'How to Choose a Roofing Contractor in DFW | Avoid Storm Chasers | Ultra Roofing',
    description: 'Storm season brings unreliable contractors to your door. Learn exactly what to look for when hiring a roofing company in Dallas-Fort Worth — and the red flags to avoid.',
    keywords: 'how to choose roofer DFW, avoid storm chaser roofers Texas, licensed roofing contractor Dallas, reputable roofer Fort Worth, roofing contractor red flags Texas, best roofing company DFW',
    canonicalUrl: `${SITE_URL}/blog/how-to-choose-roofing-contractor-dfw`,
  },

  // Commercial pages
  '/commercial-roofing-systems-dfw': {
    title: 'TPO vs EPDM vs Metal Roofing DFW — Commercial Roofing Guide | Ultra Roofing',
    description: 'Comparing TPO, EPDM, and metal roofing for your Dallas-Fort Worth commercial property? Ultra Roofing breaks down cost, lifespan, and which system fits your building. Free inspection available.',
    keywords: 'commercial roofing systems DFW, TPO vs EPDM Dallas Fort Worth, metal roofing commercial DFW, TPO roofing contractor Fort Worth, EPDM roofing Dallas TX, standing seam metal roof DFW, commercial flat roof system comparison Texas, TPO roof cost Dallas, commercial roofing guide DFW, roofing contractor Irving TX',
    canonicalUrl: `${SITE_URL}/commercial-roofing-systems-dfw`,
    ogTitle: 'TPO vs EPDM vs Metal Roofing DFW — Commercial Roofing Guide | Ultra Roofing',
    schemaType: 'faq',
  },
  '/commercial-roof-insurance-claim-texas': {
    title: 'How to File a Commercial Roof Insurance Claim in Texas | Ultra Roofing DFW',
    description: 'Step-by-step guide to filing a commercial roof insurance claim in Texas after hail or storm damage. Ultra Roofing serves Dallas-Fort Worth property owners through the entire claims process. Free inspections available.',
    keywords: 'commercial roof insurance claim Texas, hail damage commercial roof claim DFW, storm damage roofing insurance Fort Worth, TPO roof insurance claim Dallas, commercial property insurance claim Texas, roof insurance adjuster DFW, hail damage documentation Texas, insurance claim roofing contractor Irving TX',
    canonicalUrl: `${SITE_URL}/commercial-roof-insurance-claim-texas`,
    ogTitle: 'How to File a Commercial Roof Insurance Claim in Texas | Ultra Roofing DFW',
    schemaType: 'faq',
  },
  '/commercial-roofing-cost-dfw': {
    title: 'Commercial Roofing Cost Guide DFW 2025-2026 | Ultra Roofing Dallas Fort Worth',
    description: 'Real commercial roofing costs for the Dallas-Fort Worth market in 2025-2026. TPO, EPDM, metal, and modified bitumen pricing per square foot. Free estimates from Ultra Roofing.',
    keywords: 'commercial roofing cost DFW, TPO roof replacement cost Dallas Fort Worth, commercial roof cost per square foot Texas, EPDM roof installation cost DFW, flat roof replacement cost Dallas, commercial roofing estimate Fort Worth, roof coating cost Texas, commercial roof repair cost Irving TX, 2025 2026 roofing prices DFW',
    canonicalUrl: `${SITE_URL}/commercial-roofing-cost-dfw`,
    ogTitle: 'Commercial Roofing Cost Guide DFW 2025-2026 | Ultra Roofing Dallas Fort Worth',
    schemaType: 'faq',
  },
  '/dfw-hail-season-commercial-roofing-guide': {
    title: 'DFW Hail Season Commercial Roofing Guide 2026 | Ultra Roofing Irving TX',
    description: 'Dallas-Fort Worth averages 6-8 damaging hail events per year. Ultra Roofing\'s guide covers hail season timing, damage thresholds, and how to protect your commercial property before and after a storm.',
    keywords: 'DFW hail season 2026, hail damage commercial roof Dallas Fort Worth, commercial roof hail damage Texas, hail season roofing DFW, when is hail season Dallas, commercial property hail damage Texas, hail damage TPO roof DFW, storm damage commercial roofing Irving TX, post-storm roof inspection DFW',
    canonicalUrl: `${SITE_URL}/dfw-hail-season-commercial-roofing-guide`,
    ogTitle: 'DFW Hail Season Commercial Roofing Guide 2026 | Ultra Roofing Irving TX',
    schemaType: 'faq',
  },
  '/how-to-choose-commercial-roofing-contractor-dfw': {
    title: 'How to Choose a Commercial Roofing Contractor in DFW | Ultra Roofing Irving TX',
    description: '7 things every DFW commercial property owner should verify before hiring a roofing contractor. Expert guide from Ultra Roofing, serving the Dallas-Fort Worth metroplex.',
    keywords: 'how to choose commercial roofing contractor DFW, commercial roofing contractor Dallas Fort Worth, verify roofing contractor Texas, licensed roofing contractor Irving TX, commercial roofer credentials Texas, storm chaser warning DFW, roofing contractor insurance Texas, TDLR roofing license Texas',
    canonicalUrl: `${SITE_URL}/how-to-choose-commercial-roofing-contractor-dfw`,
    schemaType: 'faq',
  },
};

// City pages — generated from the city list
const cityRoutes: { slug: string; name: string }[] = [
  { slug: 'dallas', name: 'Dallas' },
  { slug: 'fort-worth', name: 'Fort Worth' },
  { slug: 'irving', name: 'Irving' },
  { slug: 'arlington', name: 'Arlington' },
  { slug: 'plano', name: 'Plano' },
  { slug: 'frisco', name: 'Frisco' },
  { slug: 'mckinney', name: 'McKinney' },
  { slug: 'denton', name: 'Denton' },
  { slug: 'lewisville', name: 'Lewisville' },
  { slug: 'flower-mound', name: 'Flower Mound' },
  { slug: 'grapevine', name: 'Grapevine' },
  { slug: 'carrollton', name: 'Carrollton' },
  { slug: 'richardson', name: 'Richardson' },
  { slug: 'garland', name: 'Garland' },
  { slug: 'mesquite', name: 'Mesquite' },
  { slug: 'allen', name: 'Allen' },
  { slug: 'the-colony', name: 'The Colony' },
  { slug: 'coppell', name: 'Coppell' },
  { slug: 'southlake', name: 'Southlake' },
  { slug: 'keller', name: 'Keller' },
  { slug: 'rockwall', name: 'Rockwall' },
  { slug: 'mansfield', name: 'Mansfield' },
  { slug: 'weatherford', name: 'Weatherford' },
  { slug: 'waxahachie', name: 'Waxahachie' },
  { slug: 'burleson', name: 'Burleson' },
  { slug: 'prosper', name: 'Prosper' },
  { slug: 'wylie', name: 'Wylie' },
  { slug: 'grand-prairie', name: 'Grand Prairie' },
  { slug: 'north-richland-hills', name: 'North Richland Hills' },
  { slug: 'colleyville', name: 'Colleyville' },
];

for (const city of cityRoutes) {
  const path = `/service-areas/${city.slug}`;

  if (city.slug === 'dallas') {
    routes[path] = {
      title: 'Dallas Roofing Contractor | Roof Repair & Replacement Dallas TX | Ultra Roofing',
      description: "Ultra Roofing is Dallas's trusted, licensed roofing contractor. Expert roof replacement, hail damage repair, commercial roofing, and free inspections across all Dallas neighborhoods. Call for a same-day estimate.",
      keywords: 'roofing contractor Dallas TX, roof repair Dallas, roof replacement Dallas, roofer near me Dallas, hail damage roof repair Dallas, licensed roofing contractor Dallas, Dallas roofing company, commercial roofing Dallas, free roof inspection Dallas, storm damage roofing Dallas, residential roofer Dallas TX, best roofing company Dallas',
      canonicalUrl: `${SITE_URL}/service-areas/dallas`,
      schemaType: 'city',
      cityName: 'Dallas',
      citySlug: 'dallas',
    };
  } else if (city.slug === 'colleyville') {
    routes[path] = {
      title: 'Commercial & Residential Roofing Contractor Colleyville, TX | Ultra Roofing',
      description: 'Ultra Roofing is a licensed commercial and residential roofing contractor serving Colleyville, TX. Expert TPO roofing, storm damage repair, hail damage inspection, and insurance claim assistance. Free inspection.',
      keywords: 'roofing contractor Colleyville TX, commercial roofing Colleyville, roof repair Colleyville Texas, roof replacement Colleyville, hail damage roof Colleyville, TPO roofing Colleyville TX, licensed roofer Colleyville, storm damage roofing Colleyville Texas, free roof inspection Colleyville',
      canonicalUrl: `${SITE_URL}/service-areas/colleyville`,
      schemaType: 'city',
      cityName: 'Colleyville',
      citySlug: 'colleyville',
    };
  } else if (city.slug === 'grand-prairie') {
    routes[path] = {
      title: 'Commercial & Residential Roofing Contractor Grand Prairie, TX | Ultra Roofing',
      description: 'Ultra Roofing is a licensed commercial and residential roofing contractor serving Grand Prairie, TX. Expert TPO roofing, storm damage repair, hail damage inspection, and insurance claim assistance. Free inspection.',
      keywords: 'roofing contractor Grand Prairie TX, commercial roofing Grand Prairie, roof repair Grand Prairie Texas, roof replacement Grand Prairie, hail damage roof Grand Prairie, TPO roofing Grand Prairie TX, licensed roofer Grand Prairie, storm damage roofing Grand Prairie Texas, free roof inspection Grand Prairie',
      canonicalUrl: `${SITE_URL}/service-areas/grand-prairie`,
      schemaType: 'city',
      cityName: 'Grand Prairie',
      citySlug: 'grand-prairie',
    };
  } else if (city.slug === 'north-richland-hills') {
    routes[path] = {
      title: 'Commercial & Residential Roofing Contractor North Richland Hills, TX | Ultra Roofing',
      description: 'Ultra Roofing is a licensed commercial and residential roofing contractor serving North Richland Hills, TX. Expert TPO roofing, storm damage repair, hail damage inspection, and insurance claim assistance. Free inspection.',
      keywords: 'roofing contractor North Richland Hills TX, commercial roofing North Richland Hills, roof repair North Richland Hills Texas, roof replacement North Richland Hills, hail damage roof North Richland Hills, TPO roofing North Richland Hills TX, licensed roofer North Richland Hills, storm damage roofing North Richland Hills Texas, free roof inspection North Richland Hills',
      canonicalUrl: `${SITE_URL}/service-areas/north-richland-hills`,
      schemaType: 'city',
      cityName: 'North Richland Hills',
      citySlug: 'north-richland-hills',
    };
  } else {
    routes[path] = {
      title: `Roofing Contractor ${city.name}, TX | Roof Repair & Replacement | Ultra Roofing`,
      description: `Ultra Roofing is a licensed, insured roofing contractor serving ${city.name}, Texas. Expert roof replacement, hail damage repair, and free inspections. Trusted local roofer in ${city.name}.`,
      keywords: `roofing contractor ${city.name} TX, roof repair ${city.name}, roof replacement ${city.name}, roofer near me ${city.name}, hail damage roof repair ${city.name}, licensed roofer ${city.name} Texas, free roof inspection ${city.name}, storm damage roofing ${city.name}, local roofing company ${city.name} TX`,
      canonicalUrl: `${SITE_URL}/service-areas/${city.slug}`,
      schemaType: 'city',
      cityName: city.name,
      citySlug: city.slug,
    };
  }
}

// Service pages
routes['/roof-replacement'] = {
  title: 'Roof Replacement Fort Worth TX | Ultra Roofing',
  description: 'Full roof replacement in Fort Worth & DFW. Shingle, metal, and flat roof experts. Free drone inspections and insurance claim help. Call for a free estimate.',
  canonicalUrl: `${SITE_URL}/roof-replacement`,
  schemaType: 'faq',
};
routes['/roof-repair'] = {
  title: 'Roof Repair Fort Worth TX | Ultra Roofing',
  description: 'Fast, affordable roof repair in Fort Worth. Leak repair, missing shingles, storm damage fixes. Licensed & insured. Call for same-day service.',
  canonicalUrl: `${SITE_URL}/roof-repair`,
  schemaType: 'faq',
};
routes['/storm-hail-damage'] = {
  title: 'Storm & Hail Damage Repair | Ultra Roofing',
  description: 'Hail and storm damage roof repair in DFW. Free inspections, insurance claim assistance, and fast turnarounds. Call Ultra Roofing today.',
  canonicalUrl: `${SITE_URL}/storm-hail-damage`,
  schemaType: 'faq',
};
routes['/commercial-roofing'] = {
  title: 'Commercial Roofing Fort Worth TX | Ultra Roofing',
  description: 'Commercial roofing in Fort Worth — TPO single-ply, flat roofs, and metal systems. Free inspections for property managers. Call for a quote.',
  canonicalUrl: `${SITE_URL}/commercial-roofing`,
  schemaType: 'faq',
};
routes['/metal-roofing'] = {
  title: 'Metal Roofing Fort Worth TX | Ultra Roofing',
  description: 'Standing seam and R-panel metal roofing in Fort Worth & DFW. Durable, energy-efficient, and hail-resistant. Request a free estimate today.',
  canonicalUrl: `${SITE_URL}/metal-roofing`,
  schemaType: 'faq',
};
routes['/roof-inspections'] = {
  title: 'Free Roof Inspections Fort Worth | Ultra Roofing',
  description: 'Free drone-assisted roof inspections in Fort Worth and DFW. Detailed reports for insurance claims and maintenance. Schedule yours today.',
  canonicalUrl: `${SITE_URL}/roof-inspections`,
  schemaType: 'faq',
};

// New city pages
routes['/fort-worth-roofing'] = {
  title: 'Fort Worth Roofing Contractor | Ultra Roofing',
  description: 'Local Fort Worth roofing contractor for repairs, replacements, and storm damage. Free inspections, insurance help. Call Ultra Roofing today.',
  canonicalUrl: `${SITE_URL}/fort-worth-roofing`,
  schemaType: 'faq',
};
routes['/rhome-roofing'] = {
  title: 'Rhome TX Roofing Contractor | Ultra Roofing',
  description: 'Roofing contractor in Rhome, TX — our home base. Repairs, replacements, metal roofing, and storm damage. Free inspections. Call today.',
  canonicalUrl: `${SITE_URL}/rhome-roofing`,
  schemaType: 'faq',
};
routes['/saginaw-roofing'] = {
  title: 'Saginaw TX Roofing Contractor | Ultra Roofing',
  description: 'Trusted roofing contractor in Saginaw, TX. Roof repair, replacement, hail damage, and free inspections. Call Ultra Roofing for a quote.',
  canonicalUrl: `${SITE_URL}/saginaw-roofing`,
  schemaType: 'faq',
};
routes['/haslet-roofing'] = {
  title: 'Haslet TX Roofing Contractor | Ultra Roofing',
  description: 'Haslet TX roofing services — repairs, replacements, storm damage, and metal roofing. Free drone inspections. Call Ultra Roofing today.',
  canonicalUrl: `${SITE_URL}/haslet-roofing`,
  schemaType: 'faq',
};

// /roofing/[city-slug] pages
const roofingCityMeta: Record<string, { title: string; description: string }> = {
  dallas: {
    title: 'Dallas TX Roofing Contractor | Ultra Roofing',
    description: 'Licensed roofing contractor in Dallas, TX. Residential and commercial roof repair, replacement, and storm damage. Free inspections. Call today.',
  },
  'fort-worth': {
    title: 'Fort Worth TX Roofing Contractor | Ultra Roofing',
    description: 'Fort Worth roofing contractor for repairs, replacements, and hail damage. Insurance claim help and free drone inspections. Call Ultra Roofing.',
  },
  irving: {
    title: 'Irving TX Roofing Contractor | Ultra Roofing',
    description: 'Trusted roofing contractor in Irving, TX. Shingle, metal, and TPO roofing. Storm damage repair and free inspections. Call for a quote.',
  },
  arlington: {
    title: 'Arlington TX Roofing Contractor | Ultra Roofing',
    description: 'Arlington roofing services: roof repair, replacement, and hail damage restoration. Licensed and insured. Free inspections across Arlington.',
  },
  plano: {
    title: 'Plano TX Roofing Contractor | Ultra Roofing',
    description: 'Roofing contractor serving Plano, TX. Impact-resistant shingles, metal roofing, and storm damage repair. Free inspections. Call today.',
  },
  frisco: {
    title: 'Frisco TX Roofing Contractor | Ultra Roofing',
    description: 'Frisco roofing contractor for new construction and existing homes. Hail damage repair, metal roofing, and free inspections. Call now.',
  },
  mckinney: {
    title: 'McKinney TX Roofing Contractor | Ultra Roofing',
    description: 'McKinney roofer for repairs, replacements, and storm damage. IKO Dynasty shingles and metal roofing. Free inspections. Call Ultra Roofing.',
  },
  denton: {
    title: 'Denton TX Roofing Contractor | Ultra Roofing',
    description: 'Denton roofing contractor: residential and commercial roof services. Hail damage, TPO, and metal roofing. Free inspections. Call today.',
  },
  lewisville: {
    title: 'Lewisville TX Roofing Contractor | Ultra Roofing',
    description: 'Lewisville roof repair and replacement. Impact-resistant shingles, storm damage restoration, and insurance help. Free inspections available.',
  },
  'flower-mound': {
    title: 'Flower Mound TX Roofing | Ultra Roofing',
    description: 'Flower Mound roofing contractor for hail damage, roof replacement, and metal roofing. Licensed and insured. Free drone inspections.',
  },
  grapevine: {
    title: 'Grapevine TX Roofing Contractor | Ultra Roofing',
    description: 'Grapevine roofer for residential and commercial properties. Shingle, metal, and flat roof experts. Free inspections. Call Ultra Roofing.',
  },
  carrollton: {
    title: 'Carrollton TX Roofing Contractor | Ultra Roofing',
    description: 'Carrollton roof repair, replacement, and storm damage. IKO Dynasty shingles and TPO commercial roofing. Free inspections. Call today.',
  },
  richardson: {
    title: 'Richardson TX Roofing Contractor | Ultra Roofing',
    description: 'Richardson roofing services: repairs, replacements, and hail damage. Serving the Telecom Corridor area. Free inspections. Call now.',
  },
  garland: {
    title: 'Garland TX Roofing Contractor | Ultra Roofing',
    description: 'Garland roofer for storm damage, roof replacement, and commercial TPO roofing. Licensed and insured. Free inspections across Garland.',
  },
  mesquite: {
    title: 'Mesquite TX Roofing Contractor | Ultra Roofing',
    description: 'Mesquite roofing contractor for hail damage repair, full replacements, and metal roofing. Free inspections. Call Ultra Roofing today.',
  },
  allen: {
    title: 'Allen TX Roofing Contractor | Ultra Roofing',
    description: 'Allen roof repair and replacement services. Impact-resistant shingles, storm damage help, and free inspections. Call for a quote today.',
  },
  'the-colony': {
    title: 'The Colony TX Roofing | Ultra Roofing',
    description: 'The Colony roofing contractor: repairs, replacements, and wind damage restoration. Free drone inspections. Call Ultra Roofing today.',
  },
  coppell: {
    title: 'Coppell TX Roofing Contractor | Ultra Roofing',
    description: 'Coppell roofer for residential roof replacement, hail damage, and metal roofing. Licensed and insured. Free inspections available.',
  },
  southlake: {
    title: 'Southlake TX Roofing Contractor | Ultra Roofing',
    description: 'Southlake roofing for estate homes and commercial properties. Premium shingles, standing seam metal, and storm damage. Free inspections.',
  },
  keller: {
    title: 'Keller TX Roofing Contractor | Ultra Roofing',
    description: 'Keller roofing contractor for repairs, replacements, and hail damage. Insurance claim assistance and free inspections. Call today.',
  },
  rockwall: {
    title: 'Rockwall TX Roofing Contractor | Ultra Roofing',
    description: 'Rockwall roofer for wind and hail damage, roof replacement, and metal roofing. Free inspections across Rockwall County. Call now.',
  },
  mansfield: {
    title: 'Mansfield TX Roofing Contractor | Ultra Roofing',
    description: 'Mansfield roof repair, replacement, and storm damage restoration. IKO Dynasty shingles and TPO roofing. Free inspections available.',
  },
  weatherford: {
    title: 'Weatherford TX Roofing | Ultra Roofing',
    description: 'Weatherford roofing contractor for homes, ranches, and commercial buildings. Metal roofing and storm damage repair. Free inspections.',
  },
  waxahachie: {
    title: 'Waxahachie TX Roofing | Ultra Roofing',
    description: 'Waxahachie roofing services: roof repair, replacement, and hail damage. Historic and modern homes. Free inspections. Call today.',
  },
  burleson: {
    title: 'Burleson TX Roofing Contractor | Ultra Roofing',
    description: 'Burleson roofer for hail damage, roof replacement, and metal roofing. Licensed and insured. Free drone inspections. Call now.',
  },
  prosper: {
    title: 'Prosper TX Roofing Contractor | Ultra Roofing',
    description: 'Prosper roofing contractor for new builds and existing homes. Storm damage repair and premium shingles. Free inspections. Call today.',
  },
  wylie: {
    title: 'Wylie TX Roofing Contractor | Ultra Roofing',
    description: 'Wylie roof repair, replacement, and storm damage restoration. Impact-resistant shingles and metal roofing. Free inspections available.',
  },
};

for (const [slug, meta] of Object.entries(roofingCityMeta)) {
  routes[`/roofing/${slug}`] = {
    ...meta,
    canonicalUrl: `${SITE_URL}/roofing/${slug}`,
    schemaType: 'faq',
  };
}

export const allRoutePaths = Object.keys(routes);
export { SITE_URL, DEFAULT_OG_IMAGE };
