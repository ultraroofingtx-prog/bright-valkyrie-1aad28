import { Phone, CheckCircle, Shield, Award, Calculator } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const services = [
    {
      title: 'Residential Roofing',
      description: 'Asphalt shingles and metal systems for long-lasting protection of your Dallas\u2013Fort Worth home.',
      features: [
        'Asphalt shingle installation and replacement',
        'Metal roofing systems',
        'Tile and slate roofing',
        'Roof leak repair and emergency services',
        'Attic ventilation and insulation',
        'Gutter installation and repair'
      ],
      icon: '🏠'
    },
    {
      title: 'Commercial Roofing',
      description: 'TPO, coatings, and flat roof systems with high performance and low maintenance for DFW businesses.',
      features: [
        'TPO and EPDM flat roofing systems',
        'Metal commercial roofing',
        'Built-up roofing (BUR)',
        'Modified bitumen systems',
        'Commercial roof coatings',
        'Preventative maintenance programs'
      ],
      icon: '🏢'
    },
    {
      title: 'Storm Damage & Insurance Claims',
      description: 'Emergency tarping, detailed inspections, and insurance claim support for Dallas–Fort Worth storm damage.',
      features: [
        'Free storm damage inspections',
        'Insurance claim assistance and documentation',
        'Direct insurance company coordination',
        'Emergency tarp and board-up services',
        '24/7 emergency response in DFW',
        'Comprehensive damage assessment reports'
      ],
      icon: '⛈️'
    },
    {
      title: 'Roof Coatings & Preventative Maintenance',
      description: 'Professional coatings and preventative care to extend your roof’s life and prevent leaks.',
      features: [
        'Silicone and acrylic roof coatings',
        'Elastomeric coating systems',
        'Reflective cool roof coatings',
        'Bi-annual roof inspections',
        'Debris removal and gutter cleaning',
        'Minor repair services'
      ],
      icon: '🛡️'
    }
  ];

  return (
    <>
      <SEO
        title="Roofing Services Dallas Fort Worth | Repair, Replacement & Commercial | Ultra Roofing"
        description="Full-service roofing contractor for DFW homes and businesses. Residential roof replacement, hail and storm damage repair, commercial TPO and flat roofing, and insurance claim assistance. Licensed & insured."
        keywords="roofing services Dallas Fort Worth, residential roofing DFW, roof replacement Dallas TX, hail damage repair DFW, commercial roofing Fort Worth, TPO roofing Dallas, flat roof repair DFW, storm damage roofing North Texas, roof leak repair Dallas, asphalt shingles DFW, metal roofing North Texas, insurance claim roof repair Texas, emergency roof repair DFW, roof contractor near me"
      />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C2A39]/90 to-[#1C2A39]/70 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Roofing Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200">
            Full-service residential and commercial roofing for Dallas–Fort Worth
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C2A39] mb-4">
              Complete Roofing Solutions for DFW
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Ultra Roofing provides complete roofing services across Dallas–Fort Worth. Whether you're dealing with storm damage, leaks, or an aging roof, our experienced team delivers tailored solutions for Texas conditions.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="text-4xl sm:text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-3xl font-bold text-[#1C2A39] mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-[#FFC107] mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    loading="lazy"
                    src={`https://images.pexels.com/photos/${index === 0 ? '2724749' : index === 1 ? '323705' : index === 2 ? '1249611' : '186461'}/pexels-photo-${index === 0 ? '2724749' : index === 1 ? '323705' : index === 2 ? '1249611' : '186461'}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                    alt={`${service.title} in Dallas-Fort Worth`}
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Inspections Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C2A39] mb-6">
                Free Roof Inspections
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Not sure about the condition of your roof? Ultra Roofing provides complimentary roof inspections throughout the Dallas-Fort Worth area. Our certified roofing experts will assess your roof's condition and provide detailed recommendations.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#FFC107] mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Comprehensive visual inspection of all roofing components</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#FFC107] mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Detailed written report with photos and recommendations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#FFC107] mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Transparent pricing with no obligation to proceed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#FFC107] mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Storm damage assessment and insurance documentation</span>
                </li>
              </ul>
              <a
                href="/#book-inspection"
                className="inline-flex items-center bg-[#FFC107] text-[#1C2A39] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#FFD54F] transition-colors"
              >
                <Calculator className="h-5 w-5 mr-2" />
                Schedule Free Inspection
              </a>
            </div>
            <div>
              <img
                loading="lazy"
                src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Free roof inspection Dallas-Fort Worth"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#1C2A39] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Why Choose Ultra Roofing Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Experience, expertise, and a commitment to excellence make us the preferred roofing contractor in Dallas-Fort Worth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-16 w-16 text-[#FFC107] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Fully Insured</h3>
              <p className="text-gray-300">Professional roofing contractors with comprehensive insurance coverage for your protection.</p>
            </div>
            <div className="text-center">
              <Award className="h-16 w-16 text-[#FFC107] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Quality Materials</h3>
              <p className="text-gray-300">We use only premium roofing materials from trusted manufacturers with comprehensive warranties.</p>
            </div>
            <div className="text-center">
              <Phone className="h-16 w-16 text-[#FFC107] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">24/7 Emergency Service</h3>
              <p className="text-gray-300">Round-the-clock emergency response for storm damage throughout the DFW metroplex.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FFC107]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C2A39] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#1C2A39] mb-8">
            Contact Ultra Roofing today for expert roofing services across Dallas-Fort Worth. Free inspections and instant quotes available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#book-inspection"
              className="flex items-center bg-[#1C2A39] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#2A3A49] transition-colors shadow-lg"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Schedule Free Inspection
            </a>
            <a
              href="tel:8333567233"
              className="flex items-center bg-white text-[#1C2A39] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (833) 356-7233
            </a>
          </div>
          <div className="mt-8">
            <Link
              to="/maintenance"
              className="text-[#1C2A39] hover:underline font-semibold"
            >
              Learn about our UltraCare™ Maintenance Program →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
