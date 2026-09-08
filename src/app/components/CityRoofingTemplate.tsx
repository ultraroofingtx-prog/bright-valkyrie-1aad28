import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import { cityData } from '../data/roofingCityData';
import SEO from './SEO';
import SchemaMarkup from './SchemaMarkup';

interface Props {
  citySlug: string;
}

export default function CityRoofingTemplate({ citySlug }: Props) {
  const city = cityData[citySlug];

  if (!city) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-800">City not found</h1>
      </div>
    );
  }

  const serviceLinks = [
    { to: '/roof-replacement', label: 'Roof Replacement' },
    { to: '/roof-repair', label: 'Roof Repair' },
    { to: '/storm-hail-damage', label: 'Storm & Hail Damage' },
    { to: '/commercial-roofing', label: 'Commercial Roofing' },
    { to: '/metal-roofing', label: 'Metal Roofing' },
    { to: '/roof-inspections', label: 'Roof Inspections' },
  ];

  return (
    <>
      <SEO
        title={`${city.name} Roofing Contractor | Roof Repair & Replacement | Ultra Roofing`}
        description={`Ultra Roofing is a licensed roofing contractor serving ${city.name}, TX. Expert roof replacement, hail damage repair, commercial roofing, and free inspections across ${city.county}. Call for a same-day estimate.`}
        keywords={`roofing contractor ${city.name} TX, roof repair ${city.name}, roof replacement ${city.name}, roofer near me ${city.name}, hail damage roof repair ${city.name}, licensed roofer ${city.name} Texas, free roof inspection ${city.name}, storm damage roofing ${city.name}`}
        canonicalUrl={`https://ultraroofingtx.net/service-areas/${city.slug}`}
      />
      <SchemaMarkup type="city" cityName={city.name} citySlug={city.slug} />

      <div className="bg-white">
        {/* Hero */}
        <section className="bg-[#1C2A39] text-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="flex items-center justify-center gap-2 text-[#FFC107] mb-4">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wide">Serving {city.name}, TX</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {city.name} Roofing Contractor
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {city.intro}
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">
              Why Homeowners in {city.name} Choose Us
            </h2>
            <div className="space-y-4">
              {[
                'We install IKO Dynasty Class 3 impact-resistant shingles rated for North Texas hail storms',
                'Free roof inspections with detailed photo documentation of any damage found',
                `Direct experience working with insurance adjusters on ${city.county} storm claims`,
                'TPO single-ply membrane and standing seam metal options for flat and commercial roofs',
                'Clear written estimates with no hidden fees or surprise charges after work begins',
                '2-year workmanship warranty on every project we complete',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#FFC107] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Residential Roofing */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-6">
              Residential Roofing in {city.name}
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">{city.residential}</p>
            <h3 className="text-xl font-bold text-[#1C2A39] mb-4 mt-10">
              Commercial Roofing in {city.name}
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">{city.commercial}</p>
            <h3 className="text-xl font-bold text-[#1C2A39] mb-4 mt-10">
              Storm & Hail Damage in {city.county}
            </h3>
            <p className="text-gray-700 leading-relaxed">{city.storm}</p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">
              Roofing Services in {city.name}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-[#FFC107]/10 border border-gray-200 hover:border-[#FFC107] transition-colors group"
                >
                  <span className="font-medium text-[#1C2A39]">{label}</span>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#FFC107] transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Areas */}
        {city.neighbors.length > 0 && (
          <section className="py-12 sm:py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl font-bold text-[#1C2A39] mb-6">
                Also Serving Nearby Areas
              </h2>
              <div className="flex flex-wrap gap-3">
                {city.neighbors.map(({ slug, name }) => (
                  <Link
                    key={slug}
                    to={`/service-areas/${slug}`}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-[#1C2A39] hover:border-[#FFC107] hover:bg-[#FFC107]/5 transition-colors"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">
              {city.name} Roofing FAQ
            </h2>
            <div className="space-y-6">
              {city.faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-[#1C2A39] mb-2">{faq.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-[#1C2A39] text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need a Roofer in {city.name}?</h2>
            <p className="text-gray-300 mb-8">Call us or request a free inspection online.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:8333567233"
                className="flex items-center bg-[#FFC107] text-[#1C2A39] px-8 py-3 rounded-full font-bold hover:bg-[#FFD54F] transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />(833) 356-7233
              </a>
              <Link
                to="/contact"
                className="flex items-center bg-white text-[#1C2A39] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Request a Free Inspection<ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
