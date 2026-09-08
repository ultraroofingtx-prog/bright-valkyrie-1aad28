import { Phone, Mail, Award, Calculator } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function TeamPage() {
  return (
    <>
      <SEO
        title="Meet the Ultra Roofing Team | Certified DFW Roofing Experts"
        description="Meet the licensed, certified roofing professionals at Ultra Roofing — serving Dallas–Fort Worth with precision craftsmanship. GAF trained, insurance claim specialists, and local North Texas experts."
        keywords="Ultra Roofing team DFW, certified roofing professionals Dallas, licensed roofers Fort Worth, roofing experts North Texas, GAF trained roofers DFW, professional roofing crew Dallas"
      />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C2A39]/90 to-[#1C2A39]/70 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Meet the Ultra Roofing Team
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200">
            Skilled roofers, local Texans, dedicated to excellence
          </p>
        </div>
      </section>

      {/* Roofing Specialists Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C2A39] mb-4">
              Certified, Trained, and Committed to Excellence
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              The Ultra Roofing team is made up of passionate Texans dedicated to precision and service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Award className="h-16 w-16 text-[#FFC107] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1C2A39] mb-3">Certified Professionals</h3>
              <p className="text-gray-600">All team members are fully insured and certified by leading roofing manufacturers.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl sm:text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-[#1C2A39] mb-3">Ongoing Training</h3>
              <p className="text-gray-600">Regular training on the latest roofing techniques, materials, and safety standards.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl sm:text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-[#1C2A39] mb-3">Quality Focused</h3>
              <p className="text-gray-600">Committed to delivering exceptional craftsmanship on every Dallas-Fort Worth roofing project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Office & Support Staff */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C2A39] mb-6">
                Office & Support Staff
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Behind every successful roofing project is a dedicated support team. Our office staff ensures smooth communication, efficient scheduling, and exceptional customer service from your first call to project completion.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                From answering your questions about roofing services to coordinating insurance claims and scheduling inspections, our team is here to make your roofing experience as stress-free as possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#FFC107] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#1C2A39]">Customer Service</p>
                    <p className="text-gray-600">Responsive, friendly support for all your roofing questions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-[#FFC107] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#1C2A39]">Project Coordination</p>
                    <p className="text-gray-600">Seamless scheduling and project management</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[#FFC107] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#1C2A39]">Insurance Assistance</p>
                    <p className="text-gray-600">Expert help navigating insurance claims and documentation</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                loading="lazy"
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ultra Roofing support staff"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#1C2A39] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Our Company Culture
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12">
              At Ultra Roofing, we're more than just roofing contractors—we're a team united by shared values and a commitment to serving the Dallas-Fort Worth community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div>
                <div className="text-4xl sm:text-5xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold mb-3">Integrity</h3>
                <p className="text-gray-300">Honest communication, transparent pricing, and ethical practices in every interaction.</p>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl mb-4">💪</div>
                <h3 className="text-2xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-300">Commitment to quality craftsmanship and continuous improvement in all we do.</p>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl mb-4">❤️</div>
                <h3 className="text-2xl font-bold mb-3">Community</h3>
                <p className="text-gray-300">Dedicated to serving and supporting our Dallas-Fort Worth neighbors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C2A39] mb-6">
            Join Our Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8">
            Ultra Roofing is growing! We're always looking for talented, dedicated roofing professionals to join our Dallas-Fort Worth team.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#FFC107] text-[#1C2A39] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#FFD54F] transition-colors"
          >
            Contact Us About Careers
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FFC107]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C2A39] mb-6">
            Work With Dallas-Fort Worth's Best Roofing Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#1C2A39] mb-8">
            Experience the Ultra Roofing difference. Contact our team today for expert roofing services.
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
