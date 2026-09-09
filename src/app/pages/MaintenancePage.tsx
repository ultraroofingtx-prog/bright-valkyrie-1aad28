import { Phone, CheckCircle, Shield, DollarSign, TrendingUp, FileText, Calculator, ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MaintenancePage() {
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial'>('residential');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const residentialIncludes = [
    'Annual or bi-annual roof inspections',
    'Gutter & downspout cleaning',
    'Minor sealant & fastener touch-ups',
    'Debris & limb removal',
    'Skylight & vent re-sealing',
    'Storm-readiness check',
    'Priority scheduling',
    'Photo report after every visit'
  ];

  const commercialIncludes = [
    '2–4 walkthroughs per year',
    'Drain/scupper/gutter cleaning',
    'Flashing, seam & coping inspection',
    'Minor crack/split repairs included',
    'Photo-documented condition reports & grading',
    'Storm priority & emergency response',
    'Annual budget forecast & repair roadmap'
  ];

  const faqs = [
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, 30-day notice.'
    },
    {
      question: 'Do you service after hail?',
      answer: 'Yes, priority scheduling for active members.'
    },
    {
      question: 'Do plans keep warranties valid?',
      answer: 'Many manufacturers require documented maintenance; our reports help maintain compliance.'
    },
    {
      question: 'What if you find issues?',
      answer: 'Minor repairs are included per plan; larger items are quoted at member-discounted rates.'
    }
  ];

  return (
    <>
      <SEO
        title="Roof Maintenance Plans Dallas Fort Worth | Annual Inspections | Ultra Roofing"
        description="Protect your roof year-round with Ultra Roofing's maintenance plans for DFW homeowners and businesses. Annual inspections, gutter cleaning, storm-readiness checks. Licensed & insured."
        keywords="roof maintenance plan DFW, annual roof inspection Dallas, roof maintenance Fort Worth, preventive roof care North Texas, gutter cleaning Dallas TX, roof tune-up DFW, commercial roof maintenance Dallas, residential roof inspection program, roof upkeep North Texas, storm-ready roof DFW"
      />
      <SchemaMarkup
        type="service"
        serviceName="Roof Maintenance"
        serviceDescription="Protect your roof year-round with Ultra Roofing's maintenance plans for DFW homeowners and businesses. Annual inspections, gutter cleaning, storm-readiness checks. Licensed & insured."
      />
      <SchemaMarkup type="faq" faqItems={faqs} />

      {/* Hero Section */}
      <section className="relative min-h-[500px] sm:min-h-[550px] md:h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C2A39]/90 to-[#1C2A39]/70 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Roof Maintenance Plans
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto px-2">
            Protect your investment year-round with affordable maintenance programs for Dallas\u2013Fort Worth homes and businesses
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center text-gray-700">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-[#0096D7]" />
              <span className="font-semibold">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌟</span>
              <span className="font-semibold">DFW Local</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-[#0096D7]" />
              <span className="font-semibold">Photo-Documented Reports</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className="font-semibold">Priority Storm Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-[#F5F5F5] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-full p-2 shadow-lg">
              <button
                onClick={() => setActiveTab('residential')}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all ${
                  activeTab === 'residential'
                    ? 'bg-[#0096D7] text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Residential
              </button>
              <button
                onClick={() => setActiveTab('commercial')}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all ${
                  activeTab === 'commercial'
                    ? 'bg-[#0096D7] text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Commercial
              </button>
            </div>
          </div>

          {/* Residential Tab Content */}
          {activeTab === 'residential' && (
            <div>
              <div className="max-w-5xl mx-auto mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-4 text-center">
                  UltraCare Home
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-8">
                  Your roof faces Texas heat, wind, and hail. UltraCare Home keeps it in top shape with proactive inspections, cleanings, and minor repairs for one simple monthly price.
                </p>

                <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                  <h3 className="text-2xl font-bold text-[#1C2A39] mb-6">What's Included</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {residentialIncludes.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-[#0096D7] mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <h4 className="text-2xl font-bold text-[#1C2A39] mb-2">Basic</h4>
                    <p className="text-gray-600 mb-4">Visits/Year: 1</p>
                    <p className="text-sm text-gray-600 mb-6">Ideal For: Newer roofs / warranty upkeep</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-[#0096D7]">$25</span>
                      <span className="text-gray-600">/mo</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-6">under 2,500 sq ft; steep/tile/metal quoted separately</p>
                    <a
                      href="https://app.roofr.com/instant-estimator/47d3160b-430f-4eed-a68b-24d095152394/UltraRoofing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-gray-200 text-[#1C2A39] px-6 py-3 rounded-full font-bold hover:bg-gray-300 transition-colors"
                    >
                      Enroll in Basic
                    </a>
                  </div>

                  <div className="bg-gradient-to-br from-[#0096D7] to-[#0077B3] text-white rounded-2xl shadow-xl p-8 transform md:scale-105 hover:shadow-2xl transition-all relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FFC107] text-[#1C2A39] px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Premium</h4>
                    <p className="text-blue-100 mb-4">Visits/Year: 2</p>
                    <p className="text-sm text-blue-100 mb-6">Ideal For: Aging roofs / storm-prone areas</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">$45</span>
                      <span className="text-blue-100">/mo</span>
                    </div>
                    <p className="text-xs text-blue-100 mb-6">under 2,500 sq ft; steep/tile/metal quoted separately</p>
                    <a
                      href="https://app.roofr.com/instant-estimator/47d3160b-430f-4eed-a68b-24d095152394/UltraRoofing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-white text-[#0096D7] px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
                    >
                      Get Premium Protection
                    </a>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <h4 className="text-2xl font-bold text-[#1C2A39] mb-2">Elite</h4>
                    <p className="text-gray-600 mb-4">Visits/Year: 4</p>
                    <p className="text-sm text-gray-600 mb-6">Ideal For: Estate & high-value homes</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-[#0096D7]">$85</span>
                      <span className="text-gray-600">/mo</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-6">custom for complex roofs</p>
                    <Link
                      to="/contact"
                      className="block text-center bg-[#1C2A39] text-white px-6 py-3 rounded-full font-bold hover:bg-[#2A3A49] transition-colors"
                    >
                      Talk to a Specialist
                    </Link>
                  </div>
                </div>

                <div className="text-center text-sm text-gray-600 space-y-1 mb-8">
                  <p>• Keeps many manufacturer warranties compliant</p>
                  <p>• Extends roof lifespan by 25–40%</p>
                  <p>• Cancel anytime with 30-day notice</p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="/#book-inspection"
                    className="inline-flex items-center justify-center bg-[#0096D7] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#0077B3] transition-colors shadow-lg"
                  >
                    <Calculator className="h-5 w-5 mr-2" />
                    Schedule Free Inspection
                  </a>
                  <a
                    href="tel:8333567233"
                    className="inline-flex items-center justify-center text-[#0096D7] hover:underline font-semibold text-lg"
                  >
                    Or Call (833) 356-7233 →
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Commercial Tab Content */}
          {activeTab === 'commercial' && (
            <div>
              <div className="max-w-5xl mx-auto mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-4 text-center">
                  UltraCare Pro
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-8">
                  Commercial roofs fail early due to neglect. UltraCare Pro provides scheduled inspections, drain cleaning, minor repairs, photo-graded reports, and priority response — all on predictable monthly billing.
                </p>

                <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                  <h3 className="text-2xl font-bold text-[#1C2A39] mb-6">What's Included</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {commercialIncludes.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-[#0096D7] mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <h4 className="text-2xl font-bold text-[#1C2A39] mb-2">Standard</h4>
                    <p className="text-sm font-semibold text-[#0096D7] mb-2">up to 10,000 sq ft</p>
                    <p className="text-gray-600 mb-2">Visits/Year: 2</p>
                    <p className="text-xs text-gray-600 mb-4">Small offices, retail, restaurants</p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-[#0096D7]">$85–$125</span>
                      <span className="text-gray-600 text-sm">/mo</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-6">TPO/PVC/ModBit; standard access</p>
                    <a
                      href="https://app.roofr.com/instant-estimator/47d3160b-430f-4eed-a68b-24d095152394/UltraRoofing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-gray-200 text-[#1C2A39] px-4 py-3 rounded-full font-bold text-sm hover:bg-gray-300 transition-colors"
                    >
                      Start Standard Plan
                    </a>
                  </div>

                  <div className="bg-gradient-to-br from-[#0096D7] to-[#0077B3] text-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FFC107] text-[#1C2A39] px-4 py-1 rounded-full text-xs font-bold">
                      MOST POPULAR
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Enhanced</h4>
                    <p className="text-sm font-semibold text-blue-100 mb-2">10,001–25,000 sq ft</p>
                    <p className="text-blue-100 mb-2">Visits/Year: 4</p>
                    <p className="text-xs text-blue-100 mb-4">Mid-size industrial & strip centers</p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">$165–$295</span>
                      <span className="text-blue-100 text-sm">/mo</span>
                    </div>
                    <p className="text-xs text-blue-100 mb-6">TPO/PVC/ModBit; standard access</p>
                    <a
                      href="https://app.roofr.com/instant-estimator/47d3160b-430f-4eed-a68b-24d095152394/UltraRoofing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-white text-[#0096D7] px-4 py-3 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg"
                    >
                      Get Enhanced Protection
                    </a>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <h4 className="text-2xl font-bold text-[#1C2A39] mb-2">Enterprise</h4>
                    <p className="text-sm font-semibold text-[#0096D7] mb-2">25,001–50,000 sq ft</p>
                    <p className="text-gray-600 mb-2">Visits/Year: 4</p>
                    <p className="text-xs text-gray-600 mb-4">Warehouses, multi-tenant, distribution</p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-[#0096D7]">$295–$595</span>
                      <span className="text-gray-600 text-sm">/mo</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-6">TPO/PVC/ModBit; standard access</p>
                    <Link
                      to="/contact"
                      className="block text-center bg-[#1C2A39] text-white px-4 py-3 rounded-full font-bold text-sm hover:bg-[#2A3A49] transition-colors"
                    >
                      Talk to an Advisor
                    </Link>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-[#0096D7]">
                    <h4 className="text-2xl font-bold text-[#1C2A39] mb-2">Corporate</h4>
                    <p className="text-sm font-semibold text-[#0096D7] mb-2">50,001+ sq ft</p>
                    <p className="text-gray-600 mb-2">Visits/Year: 4+ + credits</p>
                    <p className="text-xs text-gray-600 mb-4">Multi-property owners & REITs</p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-[#0096D7]">Custom</span>
                      <span className="text-gray-600 text-sm"> Quote</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-6">Portfolio pricing available</p>
                    <Link
                      to="/contact"
                      className="block text-center bg-[#0096D7] text-white px-4 py-3 rounded-full font-bold text-sm hover:bg-[#0077B3] transition-colors"
                    >
                      Request Portfolio Pricing
                    </Link>
                  </div>
                </div>

                <div className="text-center text-xs text-gray-600 mb-8">
                  <p>Metal, steep, high-rise, or limited-access roofs priced individually. Pricing reflects typical DFW market conditions and roof health; final quote after onsite assessment.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center p-6 bg-white rounded-xl shadow-md">
                    <DollarSign className="h-12 w-12 text-[#0096D7] mx-auto mb-3" />
                    <h4 className="text-lg font-bold text-[#1C2A39] mb-2">Cut Reactive Costs</h4>
                    <p className="text-gray-600">Up to 60% savings vs break-fix</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl shadow-md">
                    <Shield className="h-12 w-12 text-[#0096D7] mx-auto mb-3" />
                    <h4 className="text-lg font-bold text-[#1C2A39] mb-2">Warranty Compliance</h4>
                    <p className="text-gray-600">Maintain manufacturer requirements</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl shadow-md">
                    <TrendingUp className="h-12 w-12 text-[#0096D7] mx-auto mb-3" />
                    <h4 className="text-lg font-bold text-[#1C2A39] mb-2">Longer Roof Life</h4>
                    <p className="text-gray-600">Add up to 10+ years with proactive care</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="/#book-inspection"
                    className="inline-flex items-center justify-center bg-[#0096D7] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#0077B3] transition-colors shadow-lg"
                  >
                    Schedule Free Inspection
                  </a>
                  <a
                    href="tel:8333567233"
                    className="inline-flex items-center justify-center text-[#0096D7] hover:underline font-semibold text-lg"
                  >
                    Or Call (833) 356-7233 →
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C2A39] mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-[#F5F5F5] transition-colors text-left"
                >
                  <span className="text-lg font-semibold text-[#1C2A39]">{faq.question}</span>
                  <ChevronDown
                    className={`h-6 w-6 text-[#0096D7] transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="p-6 bg-[#F5F5F5] border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C2A39] mb-4">
              Ready to make roof costs predictable?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Book a free assessment and lock in DFW-preferred pricing.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096D7] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096D7] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096D7] focus:border-transparent"
                    placeholder="(555) 555-5555"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Property Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096D7] focus:border-transparent">
                    <option>Residential</option>
                    <option>Commercial</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Approximate Square Footage</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096D7] focus:border-transparent"
                  placeholder="e.g., 2,500 sq ft"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096D7] focus:border-transparent"
                  placeholder="Tell us about your roof..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#0096D7] text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-[#0077B3] transition-colors shadow-lg"
                >
                  Request My Assessment
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#1C2A39] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl mb-6">
            Questions? Call us at <a href="tel:8333567233" className="text-[#FFC107] hover:underline font-bold">(833) 356-7233</a>
          </p>
          <div className="flex items-center justify-center gap-8 text-sm">
            <Link to="/services" className="text-gray-300 hover:text-[#FFC107] transition-colors">
              Our Services →
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-[#FFC107] transition-colors">
              About Ultra Roofing →
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-[#FFC107] transition-colors">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
