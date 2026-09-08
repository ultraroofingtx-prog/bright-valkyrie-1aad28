import { Phone, CheckCircle, Shield, Award, Calculator } from 'lucide-react';
import SEO from './SEO';
import SchemaMarkup from './SchemaMarkup';
import { Link } from 'react-router-dom';

interface CityPageProps {
  cityName: string;
  citySlug: string;
  stateName?: string;
  heroImage?: string;
  serviceImage?: string;
  additionalContent?: string;
}

export default function CityPageTemplate({
  cityName,
  citySlug,
  stateName = 'Texas',
  heroImage = 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1920',
  serviceImage = 'https://images.pexels.com/photos/259593/pexels-photo-259593.jpeg?auto=compress&cs=tinysrgb&w=800',
  additionalContent
}: CityPageProps) {
  const canonicalUrl = `https://ultraroofingtx.net/service-areas/${citySlug}`;
  return (
    <>
      <SEO
        title={`Roofing Contractor ${cityName}, TX | Roof Repair & Replacement | Ultra Roofing`}
        description={`Ultra Roofing is a licensed, insured roofing contractor serving ${cityName}, ${stateName}. Expert roof replacement, hail damage repair, and free inspections. Trusted local roofer in ${cityName}.`}
        keywords={`roofing contractor ${cityName} TX, roof repair ${cityName}, roof replacement ${cityName}, roofer near me ${cityName}, hail damage roof repair ${cityName}, licensed roofer ${cityName} Texas, free roof inspection ${cityName}, storm damage roofing ${cityName}, local roofing company ${cityName} TX`}
        canonicalUrl={canonicalUrl}
      />
      <SchemaMarkup type="city" cityName={cityName} citySlug={citySlug} />

      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C2A39]/90 to-[#1C2A39]/70 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Roofing Company in {cityName}, TX
          </h1>
          <p className="text-xl text-gray-200">
            Local Roofing Experts You Can Trust
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1C2A39] mb-6">
                Residential & Commercial Roofing Services in {cityName}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Ultra Roofing proudly serves the residents and businesses of {cityName}, {stateName}, providing high-quality roofing services built for North Texas weather. From shingle replacements and metal roofing to TPO systems and storm restoration, our Aggie-owned team delivers durable craftsmanship and honest service every time.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether your roof has suffered hail damage, developed leaks, or simply reached the end of its lifespan, our experts provide transparent inspections and reliable repair or replacement options. We use only premium materials from GAF, IKO, and Owens Corning — built to last under Texas heat and storms.
              </p>
              {additionalContent && (
                <p className="text-lg text-gray-700 mb-6">{additionalContent}</p>
              )}
            </div>
            <div>
              <img
                src={serviceImage}
                alt={`Roof repair and replacement in ${cityName} Texas`}
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C2A39] mb-8 text-center">
              Storm Damage, Hail Repair & Insurance Claim Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#F5F5F5] p-6 rounded-lg">
                <Shield className="h-12 w-12 text-[#FFC107] mb-4" />
                <h3 className="text-xl font-bold text-[#1C2A39] mb-3">Roof Replacement & Repair Specialists</h3>
                <p className="text-gray-700">Complete roof replacements and expert repairs using premium materials designed for {cityName} weather conditions.</p>
              </div>
              <div className="bg-[#F5F5F5] p-6 rounded-lg">
                <Award className="h-12 w-12 text-[#FFC107] mb-4" />
                <h3 className="text-xl font-bold text-[#1C2A39] mb-3">Certified, Insured, and Texas-Proud Team</h3>
                <p className="text-gray-700">Fully licensed and insured roofing contractors with certifications from leading manufacturers.</p>
              </div>
              <div className="bg-[#F5F5F5] p-6 rounded-lg">
                <CheckCircle className="h-12 w-12 text-[#FFC107] mb-4" />
                <h3 className="text-xl font-bold text-[#1C2A39] mb-3">Protecting Homes Across {cityName} and Surrounding Areas</h3>
                <p className="text-gray-700">Fast response times and exceptional service for {cityName} homeowners and businesses.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1C2A39] text-white p-8 sm:p-12 rounded-lg">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why {cityName} Homeowners Choose Ultra Roofing
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#FFC107] mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg">Local expertise with deep knowledge of {cityName} weather patterns and building codes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#FFC107] mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg">Aggie-owned and operated with Texas values of integrity and excellence</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#FFC107] mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg">Free roof inspections and transparent pricing with no hidden fees</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#FFC107] mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg">Direct insurance coordination for storm damage claims</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#FFC107] mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg">Premium materials from GAF, IKO, and Owens Corning</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#FFC107]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C2A39] mb-6">
            Schedule Your Free Roof Inspection
          </h2>
          <p className="text-xl text-[#1C2A39] mb-8">
            Protect your {cityName} property with a trusted roofing team that puts Texans first. Get your free inspection today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="flex items-center bg-[#1C2A39] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#2A3A49] transition-colors shadow-lg"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Get a Quote Today
            </Link>
            <a
              href="tel:8333567233"
              className="flex items-center bg-white text-[#1C2A39] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (833) 356-7233
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
