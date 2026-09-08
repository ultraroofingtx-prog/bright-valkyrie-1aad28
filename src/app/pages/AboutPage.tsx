import { Phone, Shield, Award, Users, Calculator } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Ultra Roofing | Licensed Family-Owned Roofing Company in DFW"
        description="Ultra Roofing is a licensed, insured, family-owned roofing company with 10+ years serving Dallas–Fort Worth. GAF certified, Owens Corning preferred. Trusted by thousands of DFW homeowners."
        keywords="about Ultra Roofing, family owned roofing company DFW, licensed roofing contractor Dallas, insured roofer Fort Worth, GAF certified roofing DFW, Owens Corning preferred contractor Texas, local roofer North Texas, trusted roofing company Dallas Fort Worth, roofing company 10 years experience DFW"
      />

      {/* Hero Section */}
      <section className="relative min-h-[350px] sm:h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C2A39]/90 to-[#1C2A39]/70 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            About Ultra Roofing
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 px-2">
            Aggie-owned and operated. Serving the Dallas-Fort Worth community with integrity and excellence.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                loading="lazy"
                src="/MRM.Agency-7516.jpg"
                alt="Ultra Roofing team in Dallas-Fort Worth"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C2A39] mb-6">
                Built in Texas. Serving Texans.
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded on integrity, quality, and community pride, Ultra Roofing is an Aggie-owned company dedicated to protecting Texas properties one roof at a time. With over a decade of experience serving the Dallas–Fort Worth area, we've completed projects ranging from small single-family homes to large industrial warehouses.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our team takes pride in delivering superior workmanship and customer-focused service using top-rated materials from GAF, IKO, and Owens Corning. We understand what it takes to protect homes and businesses in Texas weather—because we've weathered every storm alongside our neighbors.
              </p>
              <p className="text-lg text-gray-700">
                At Ultra Roofing, we don't just build roofs—we build trust. Discover why DFW residents continue to choose us for durability, dependability, and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C2A39] mb-6">
              Commitment to Quality and Customer Satisfaction
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              To be the most trusted roofing company in Dallas–Fort Worth by delivering exceptional service, superior craftsmanship, and lasting relationships with every customer. We're not just roofing contractors—we're your neighbors, committed to protecting the homes and businesses that make our community strong.
            </p>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C2A39] mb-4">
              Our Promise to You
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              When you choose Ultra Roofing, you're choosing a DFW roofing partner dedicated to your complete satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center p-6">
              <Shield className="h-16 w-16 text-[#FFC107] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1C2A39] mb-3">Quality Workmanship</h3>
              <p className="text-gray-600">Every roof is installed or repaired to the highest industry standards with premium materials.</p>
            </div>
            <div className="text-center p-6">
              <Award className="h-16 w-16 text-[#FFC107] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1C2A39] mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">No hidden fees or surprise costs. Just honest, upfront pricing for all roofing services.</p>
            </div>
            <div className="text-center p-6">
              <Users className="h-16 w-16 text-[#FFC107] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1C2A39] mb-3">Local Expertise</h3>
              <p className="text-gray-600">Deep understanding of Texas weather and local building codes throughout the DFW area.</p>
            </div>
            <div className="text-center p-6">
              <Phone className="h-16 w-16 text-[#FFC107] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1C2A39] mb-3">Responsive Service</h3>
              <p className="text-gray-600">Quick response times and 24/7 emergency service for storm damage throughout Dallas-Fort Worth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Homeowners Trust Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#1C2A39] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Why Homeowners Trust Ultra Roofing
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence has made us a leading roofing contractor in the Dallas-Fort Worth metroplex.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-lg">
              <div className="text-4xl sm:text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-4">Aggie Values</h3>
              <p className="text-gray-300">Integrity, excellence, leadership, loyalty, respect, and selfless service guide everything we do.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-lg">
              <div className="text-4xl sm:text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-4">Experience You Can Trust</h3>
              <p className="text-gray-300">Over 10 years of combined experience and hundreds of satisfied customers across Dallas, Fort Worth, and surrounding DFW communities.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-lg">
              <div className="text-4xl sm:text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-4">Community Focused</h3>
              <p className="text-gray-300">We're not just roofing contractors—we're your neighbors, invested in the DFW community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C2A39] mb-6">
              Proudly serving Dallas Fort Worth and surrounding cities
            </h2>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FFC107]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C2A39] mb-6">
            Schedule Your Free Roof Inspection
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#1C2A39] mb-8">
            Experience the Ultra Roofing difference. Contact us today for expert roofing services in Dallas-Fort Worth.
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
        </div>
      </section>
    </>
  );
}
