import { Phone, CheckCircle, Shield, Award, Calculator, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';
import SchemaMarkup from '../../components/SchemaMarkup';
import { Link } from 'react-router-dom';

export default function NorthRichlandHillsPage() {
  return (
    <>
      <SEO
        title="Commercial & Residential Roofing Contractor North Richland Hills, TX | Ultra Roofing"
        description="Ultra Roofing is a licensed commercial and residential roofing contractor serving North Richland Hills, TX. Expert TPO roofing, storm damage repair, hail damage inspection, and insurance claim assistance. Free inspection."
        keywords="roofing contractor North Richland Hills TX, commercial roofing North Richland Hills, roof repair North Richland Hills Texas, roof replacement North Richland Hills, hail damage roof North Richland Hills, TPO roofing North Richland Hills TX, licensed roofer North Richland Hills, storm damage roofing North Richland Hills Texas, free roof inspection North Richland Hills"
        canonicalUrl="https://ultraroofingtx.net/service-areas/north-richland-hills"
      />
      <SchemaMarkup type="city" cityName="North Richland Hills" citySlug="north-richland-hills" />

      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C2A39]/90 to-[#1C2A39]/70 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Commercial & Residential Roofing Contractor in North Richland Hills, TX
          </h1>
          <p className="text-xl text-gray-200">
            Licensed, Insured, and Locally Based in DFW
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C2A39] mb-8">
            Commercial and Residential Roofing Services in North Richland Hills
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Ultra Roofing serves North Richland Hills, a Mid-Cities area suburb located between Fort Worth and Dallas along Loop 820, featuring a significant commercial corridor and dense residential neighborhoods. North Richland Hills has grown into a major retail, office, and distribution hub while maintaining strong residential communities. We serve commercial property owners, building managers, and homeowners throughout North Richland Hills with TPO roofing, EPDM systems, metal roofing, storm damage repair, hail damage inspection, and complete insurance claim assistance.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            North Richland Hills' strategic location in the DFW metroplex—positioned along major transportation corridors and in close proximity to key commercial districts—exposes properties to severe spring hail storms, summer wind events, and temperature extremes. Our team has completed hundreds of roof inspections and restorations in North Richland Hills, working with local insurance adjusters to document damage and maximize coverage. Whether your property is a commercial building in the Loop 820 corridor or a residential home in one of North Richland Hills' established neighborhoods, we understand the local weather patterns and building requirements.
          </p>

          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8 text-center">
              Our Roofing Services in North Richland Hills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#F5F5F5] p-6 rounded-lg">
                <Award className="h-12 w-12 text-[#FFC107] mb-4" />
                <h3 className="text-xl font-bold text-[#1C2A39] mb-3">Commercial Roofing</h3>
                <p className="text-gray-700">TPO single-ply membranes, EPDM rubber systems, metal roofing, modified bitumen, and roof coatings for retail, office, warehouse, and industrial properties.</p>
              </div>
              <div className="bg-[#F5F5F5] p-6 rounded-lg">
                <Shield className="h-12 w-12 text-[#FFC107] mb-4" />
                <h3 className="text-xl font-bold text-[#1C2A39] mb-3">Storm & Hail Damage Repair</h3>
                <p className="text-gray-700">Free inspections, professional damage documentation, insurance claim coordination, and complete restoration services for storm-damaged commercial and residential roofs.</p>
              </div>
              <div className="bg-[#F5F5F5] p-6 rounded-lg">
                <CheckCircle className="h-12 w-12 text-[#FFC107] mb-4" />
                <h3 className="text-xl font-bold text-[#1C2A39] mb-3">Residential Roofing</h3>
                <p className="text-gray-700">Asphalt shingle replacement, metal roofing, tile roofing, and expert repair services using premium materials designed for Texas weather.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1C2A39] text-white p-8 sm:p-12 rounded-lg">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Why Choose Ultra Roofing in North Richland Hills?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#FFC107] mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg">Licensed and registered with the Texas Department of Licensing and Regulation (TDLR)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#FFC107] mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg">Fully insured with general liability and workers' compensation coverage</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#FFC107] mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg">Serves all of North Richland Hills and surrounding Tarrant County areas</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#FFC107] mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg">Free post-storm commercial and residential inspections across North Richland Hills</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#FFC107] mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg">Commercial-focused expertise: TPO, EPDM, metal, coatings, and full system design</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#FFC107] mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg">Insurance claim assistance from inspection through final invoice and payment</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-[#FFC107]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C2A39] mb-6">
            Free Roof Inspection in North Richland Hills, TX
          </h2>
          <p className="text-lg text-[#1C2A39] mb-8">
            Schedule a free roof inspection today. Whether you're concerned about storm damage, planning a new commercial roofing system, or need routine maintenance assessment, our licensed team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8333567233"
              className="flex items-center bg-[#1C2A39] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#2A3A49] transition-colors shadow-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (833) 356-7233
            </a>
            <Link
              to="/contact"
              className="flex items-center bg-white text-[#1C2A39] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <ArrowRight className="h-5 w-5 mr-2" />
              Schedule Inspection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
