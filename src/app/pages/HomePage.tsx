import { Phone, Award, MapPin, CheckCircle, Calculator } from 'lucide-react';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import BookingForm from '../components/BookingForm';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const services = [
    {
      title: 'Roof Repair',
      description: 'Professional roof repair services for leaks, missing shingles, hail damage, and wind damage throughout DFW.',
      icon: '🔧'
    },
    {
      title: 'Roof Replacement',
      description: 'Complete roof replacement services using premium asphalt shingles and modern roofing systems.',
      icon: '🏠'
    },
    {
      title: 'Storm Damage Roofing',
      description: 'Hail and wind damage roof repair specialists assisting homeowners after severe Texas storms.',
      icon: '⛈️'
    },
    {
      title: 'Insurance Claim Assistance',
      description: 'We handle roofing insurance claims from inspection to final repair approval.',
      icon: '📋'
    }
  ];

  return (
    <>
      <SEO
        title="Roofing Contractor Dallas Fort Worth | Roof Repair & Replacement | Ultra Roofing"
        description="Ultra Roofing is a licensed, family-owned roofing company serving all of DFW. Free roof inspections, hail damage repair, and insurance claim assistance. Call now for a same-day estimate."
        keywords="roofing contractor Dallas Fort Worth, roofer near me DFW, roof repair Dallas, roof replacement Fort Worth, hail damage roof repair DFW, storm damage roofing Texas, licensed roofing contractor North Texas, free roof inspection Dallas, emergency roof repair DFW, residential roofing Dallas, commercial roofing Fort Worth, roof replacement cost DFW, insurance claim roofing Texas, GAF certified roofer DFW, local roofing company North Texas"
        ogTitle="DFW's Trusted Roofing Contractor | Free Inspections | Ultra Roofing"
        ogDescription="Storm hit your roof? Ultra Roofing offers free same-day inspections across Dallas–Fort Worth. Expert hail damage repair, insurance claim help, and fast turnarounds."
        canonicalUrl="https://ultraroofingtx.net"
      />
      <SchemaMarkup type="organization" />

      {/* Hero Section */}
      <section className="relative min-h-[500px] sm:h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C2A39]/90 to-[#1C2A39]/70 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Trusted Roofing Contractor Serving Dallas–Fort Worth
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 px-2">
            Ultra Roofing provides expert roof repair, roof replacement, and storm damage roofing services throughout the Dallas–Fort Worth Metroplex. Our licensed and insured roofing contractors deliver durable roofing systems built for Texas homes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#book-inspection"
              className="w-full sm:w-auto bg-[#FFC107] text-[#1C2A39] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-[#FFD54F] transition-colors shadow-lg text-center"
            >
              Schedule Your Free Roof Inspection
            </a>
            <a
              href="tel:8333567233"
              className="w-full sm:w-auto bg-white text-[#1C2A39] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Call (833) 356-7233
            </a>
          </div>
        </div>
      </section>

      {/* Highlight Badges */}
      <section className="bg-[#F5F5F5] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            <div className="flex items-center justify-center space-x-3 sm:space-x-4 bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <Award className="h-10 w-10 sm:h-12 sm:w-12 text-[#FFC107] flex-shrink-0" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#1C2A39]">15+</div>
                <div className="text-sm sm:text-base text-gray-600">Years Roofing Experience</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 sm:space-x-4 bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="text-[#FFC107] text-3xl sm:text-4xl flex-shrink-0">★★★★★</div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#1C2A39]">5-Star</div>
                <div className="text-sm sm:text-base text-gray-600">Rated Texas Roofing Company</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 sm:space-x-4 bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-[#FFC107] flex-shrink-0" />
              <div>
                <div className="text-lg sm:text-xl font-bold text-[#1C2A39]">Licensed & Insured</div>
                <div className="text-sm sm:text-base text-gray-600">Roofing Contractors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <img
                loading="lazy"
                src="/DJI_0328 (1).jpg"
                alt="Roof repair and roof replacement Dallas Fort Worth TX"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C2A39] mb-4 sm:mb-6">
                Your Trusted Dallas Roofing Company
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                Ultra Roofing is an Aggie-owned and operated roofing company proudly serving the Dallas-Fort Worth metroplex. We specialize in residential and commercial roofing, storm damage restoration, and preventative roof maintenance programs designed for Texas weather.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                From roof repairs to complete replacements, our team of local roofing experts delivers exceptional craftsmanship, transparent pricing, and reliable service that DFW homeowners and businesses trust.
              </p>
              <Link
                to="/about"
                className="inline-block bg-[#FFC107] text-[#1C2A39] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-[#FFD54F] transition-colors"
              >
                About Ultra Roofing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Quote CTA Section */}
      <section id="instant-quote" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#1C2A39] to-[#2A3A49]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-10 lg:p-12 border border-white/20">
            <Calculator className="h-16 w-16 sm:h-20 sm:w-20 text-[#FFC107] mx-auto mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Get Your Instant Roofing Quote
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 px-2">
              Use our advanced satellite-powered estimator to get a detailed quote in minutes without scheduling an appointment
            </p>
            <a
              href="https://app.roofr.com/instant-estimator/47d3160b-430f-4eed-a68b-24d095152394/UltraRoofing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-[#FFC107] text-[#1C2A39] px-6 sm:px-10 py-3 sm:py-5 rounded-full text-base sm:text-lg lg:text-xl font-bold hover:bg-[#FFD54F] transition-all hover:scale-105 shadow-2xl"
            >
              <Calculator className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
              Launch Quote Calculator
            </a>
            <p className="text-xs sm:text-sm text-gray-300 mt-4 sm:mt-6 px-2">
              Opens in a new window • No phone call required • Instant results
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C2A39] mb-3 sm:mb-4">
              Expert Roof Repair & Roof Replacement Services in DFW
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive roofing contractor services for Dallas–Fort Worth residential and commercial properties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{service.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1C2A39] mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10 lg:mt-12">
            <Link
              to="/services"
              className="inline-block bg-[#1C2A39] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-[#2A3A49] transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* UltraCare Maintenance Program */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C2A39] mb-4 sm:mb-6">
                UltraCare™ Maintenance Program
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                Protect your investment with our comprehensive roof maintenance subscriptions. Regular inspections and preventative care extend the life of your roof and save money on costly repairs — all for one predictable monthly price.
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#FFC107] mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-1" />
                  <span className="text-sm sm:text-base text-gray-700">Annual or bi-annual roof inspections by certified DFW professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#FFC107] mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-1" />
                  <span className="text-sm sm:text-base text-gray-700">Priority emergency service for storm damage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#FFC107] mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-1" />
                  <span className="text-sm sm:text-base text-gray-700">Minor repairs & touch-ups included</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#FFC107] mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-1" />
                  <span className="text-sm sm:text-base text-gray-700">Photo-documented reports after every visit</span>
                </li>
              </ul>
              <Link
                to="/maintenance"
                className="inline-block bg-[#FFC107] text-[#1C2A39] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-[#FFD54F] transition-colors"
              >
                Learn About UltraCare
              </Link>
            </div>
            <div>
              <img
                loading="lazy"
                src="/f794383a-9ac2-42ad-a39c-3829775174ad.jpg"
                alt="Roof tile inspection and maintenance services DFW"
                className="rounded-lg shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#1C2A39] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Why DFW Homeowners Choose Ultra Roofing
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Local expertise, reliable service, and a commitment to excellence make us the preferred roofing company in Dallas-Fort Worth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🎓</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Aggie-Owned & Operated</h3>
              <p className="text-sm sm:text-base text-gray-300">Local DFW roofing company with Texas values and a commitment to community service.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">⚡</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Fast Response Times</h3>
              <p className="text-sm sm:text-base text-gray-300">Emergency storm damage repairs available 24/7 throughout the Dallas-Fort Worth area.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">💯</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Quality Guaranteed</h3>
              <p className="text-sm sm:text-base text-gray-300">Premium materials, expert installation, and comprehensive warranties on all roofing projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="book-inspection" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingForm />
        </div>
      </section>

      {/* Alternative CTA Section */}
      <section className="py-12 sm:py-16 bg-[#1C2A39] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Prefer to talk? Call us directly
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 px-2">
            Our roofing experts are available 24/7 for emergencies
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="tel:8333567233"
              className="w-full sm:w-auto flex items-center justify-center bg-[#FFC107] text-[#1C2A39] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-[#FFD54F] transition-colors shadow-lg"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Call (833) 356-7233
            </a>
            <a
              href="https://app.roofr.com/instant-estimator/47d3160b-430f-4eed-a68b-24d095152394/UltraRoofing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center bg-white text-[#1C2A39] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Calculator className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Get Instant Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
