import { useState } from 'react';
import { Check, FileText, Shield, TrendingUp, ChevronDown } from 'lucide-react';

export default function MaintenanceSection() {
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial'>('residential');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'residential',
    sqFt: '',
    message: ''
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

  const residentialPlans = [
    {
      name: 'Basic',
      visits: '1 visit/year',
      idealFor: 'Newer roofs / warranty upkeep',
      price: '$25/mo',
      note: 'under 2,500 sq ft',
      primary: false
    },
    {
      name: 'Premium',
      visits: '2 visits/year',
      idealFor: 'Aging roofs / storm-prone areas',
      price: '$45/mo',
      note: 'under 2,500 sq ft',
      primary: true
    },
    {
      name: 'Elite',
      visits: '4 visits/year',
      idealFor: 'Estate & high-value homes',
      price: '$85/mo',
      note: 'custom for complex roofs',
      primary: false
    }
  ];

  const commercialPlans = [
    {
      name: 'Standard',
      size: 'up to 10,000 sq ft',
      visits: '2 visits/year',
      idealFor: 'Small offices, retail, restaurants',
      price: '$85–$125/mo',
      note: 'TPO/PVC/ModBit; standard access',
      primary: false
    },
    {
      name: 'Enhanced',
      size: '10,001–25,000 sq ft',
      visits: '4 visits/year',
      idealFor: 'Mid-size industrial & strip centers',
      price: '$165–$295/mo',
      note: 'TPO/PVC/ModBit; standard access',
      primary: true
    },
    {
      name: 'Enterprise',
      size: '25,001–50,000 sq ft',
      visits: '4 visits/year',
      idealFor: 'Warehouses, multi-tenant, distribution',
      price: '$295–$595/mo',
      note: 'TPO/PVC/ModBit; standard access',
      primary: false
    },
    {
      name: 'Corporate / Portfolio',
      size: '50,001+ sq ft',
      visits: '4+ visits/year + repair credits',
      idealFor: 'Multi-property owners & REITs',
      price: 'Custom Quote',
      note: 'Custom solutions',
      primary: false
    }
  ];

  const maintenanceFaqs = [
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, 30-day notice required.'
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
    <section id="maintenance" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C2A39] mb-4">
            UltraCare™ Roof Maintenance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Predictable Protection for DFW Homes & Buildings
          </p>
          <p className="text-lg text-gray-600 mt-4 max-w-4xl mx-auto">
            Subscriptions that keep roofs storm-ready, warranties compliant, and costs predictable. Residential and commercial plans with photo reports every visit.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-[#F5F5F5] p-1">
            <button
              onClick={() => setActiveTab('residential')}
              className={`px-8 py-3 rounded-lg font-bold transition-all ${
                activeTab === 'residential'
                  ? 'bg-[#0096D7] text-white shadow-lg'
                  : 'text-[#1C2A39] hover:bg-white'
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setActiveTab('commercial')}
              className={`px-8 py-3 rounded-lg font-bold transition-all ${
                activeTab === 'commercial'
                  ? 'bg-[#0096D7] text-white shadow-lg'
                  : 'text-[#1C2A39] hover:bg-white'
              }`}
            >
              Commercial
            </button>
          </div>
        </div>

        {activeTab === 'residential' ? (
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 mb-8">
                Your roof faces Texas heat, wind, and hail. UltraCare Home keeps it in top shape with proactive inspections, cleanings, and minor repairs for one simple monthly price.
              </p>
            </div>

            <div className="bg-[#F5F5F5] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#1C2A39] mb-6 text-center">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {residentialIncludes.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-[#0096D7] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {residentialPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-8 ${
                    plan.primary
                      ? 'bg-[#0096D7] text-white shadow-2xl transform scale-105'
                      : 'bg-white border-2 border-gray-200'
                  }`}
                >
                  {plan.primary && (
                    <div className="text-center mb-4">
                      <span className="inline-block bg-white text-[#0096D7] px-4 py-1 rounded-full text-sm font-bold">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <h3 className={`text-2xl font-bold mb-2 ${plan.primary ? 'text-white' : 'text-[#1C2A39]'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.primary ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.visits}
                  </p>
                  <div className={`text-4xl font-bold mb-4 ${plan.primary ? 'text-white' : 'text-[#0096D7]'}`}>
                    {plan.price}
                  </div>
                  <p className={`text-sm mb-6 ${plan.primary ? 'text-blue-100' : 'text-gray-600'}`}>
                    Ideal For: {plan.idealFor}
                  </p>
                  <p className={`text-xs mb-6 italic ${plan.primary ? 'text-blue-100' : 'text-gray-500'}`}>
                    {plan.note}
                  </p>
                  <button
                    className={`w-full py-3 rounded-lg font-bold transition-colors ${
                      plan.primary
                        ? 'bg-white text-[#0096D7] hover:bg-gray-100'
                        : 'bg-[#0096D7] text-white hover:bg-[#0077B3]'
                    }`}
                  >
                    {plan.primary ? 'Get Premium Protection' : `Enroll in ${plan.name}`}
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-[#F5F5F5] rounded-xl p-8 text-center">
              <div className="max-w-4xl mx-auto space-y-3 text-sm text-gray-700">
                <p className="flex items-center justify-center space-x-2">
                  <Check className="h-5 w-5 text-[#0096D7]" />
                  <span>Keeps many manufacturer warranties compliant</span>
                </p>
                <p className="flex items-center justify-center space-x-2">
                  <Check className="h-5 w-5 text-[#0096D7]" />
                  <span>Extends roof lifespan by 25–40%</span>
                </p>
                <p className="flex items-center justify-center space-x-2">
                  <Check className="h-5 w-5 text-[#0096D7]" />
                  <span>Cancel anytime with 30-day notice</span>
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="#assessment-form"
                className="bg-[#0096D7] text-white px-8 py-4 rounded-full font-bold hover:bg-[#0077B3] transition-colors shadow-lg"
              >
                Get a Free Home Assessment
              </a>
              <a
                href="#maintenance"
                className="border-2 border-[#0096D7] text-[#0096D7] px-8 py-4 rounded-full font-bold hover:bg-[#0096D7] hover:text-white transition-colors"
              >
                See What's Included
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 mb-8">
                Commercial roofs fail early due to neglect. UltraCare Pro provides scheduled inspections, drain cleaning, minor repairs, photo-graded reports, and priority response — all on predictable monthly billing.
              </p>
            </div>

            <div className="bg-[#F5F5F5] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#1C2A39] mb-6 text-center">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {commercialIncludes.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-[#0096D7] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {commercialPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-6 ${
                    plan.primary
                      ? 'bg-[#0096D7] text-white shadow-2xl transform md:scale-105'
                      : 'bg-white border-2 border-gray-200'
                  }`}
                >
                  {plan.primary && (
                    <div className="text-center mb-4">
                      <span className="inline-block bg-white text-[#0096D7] px-3 py-1 rounded-full text-xs font-bold">
                        RECOMMENDED
                      </span>
                    </div>
                  )}
                  <h3 className={`text-xl font-bold mb-2 ${plan.primary ? 'text-white' : 'text-[#1C2A39]'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-3 font-semibold ${plan.primary ? 'text-blue-100' : 'text-gray-700'}`}>
                    {plan.size}
                  </p>
                  <p className={`text-xs mb-3 ${plan.primary ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.visits}
                  </p>
                  <div className={`text-2xl font-bold mb-3 ${plan.primary ? 'text-white' : 'text-[#0096D7]'}`}>
                    {plan.price}
                  </div>
                  <p className={`text-xs mb-4 ${plan.primary ? 'text-blue-100' : 'text-gray-600'}`}>
                    Ideal For: {plan.idealFor}
                  </p>
                  <p className={`text-xs mb-4 italic ${plan.primary ? 'text-blue-100' : 'text-gray-500'}`}>
                    {plan.note}
                  </p>
                  <button
                    className={`w-full py-3 rounded-lg font-bold text-sm transition-colors ${
                      plan.primary
                        ? 'bg-white text-[#0096D7] hover:bg-gray-100'
                        : 'bg-[#0096D7] text-white hover:bg-[#0077B3]'
                    }`}
                  >
                    {plan.name === 'Corporate / Portfolio' ? 'Request Portfolio Pricing' :
                     plan.name === 'Enterprise' ? 'Talk to an Advisor' :
                     plan.primary ? 'Get Enhanced Protection' : 'Start Standard Plan'}
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-[#F5F5F5] rounded-xl p-6 text-sm text-gray-600 text-center">
              <p>
                Metal, steep, high-rise, or limited-access roofs priced individually. Pricing reflects typical DFW market conditions and roof health; final quote after onsite assessment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="h-12 w-12 text-[#0096D7]" />
                </div>
                <h4 className="font-bold text-[#1C2A39] mb-2">Cut Reactive Costs</h4>
                <p className="text-gray-600">Up to 60% savings vs break-fix</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="h-12 w-12 text-[#0096D7]" />
                </div>
                <h4 className="font-bold text-[#1C2A39] mb-2">Warranty Compliance</h4>
                <p className="text-gray-600">Maintain manufacturer requirements</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Check className="h-12 w-12 text-[#0096D7]" />
                </div>
                <h4 className="font-bold text-[#1C2A39] mb-2">Longer Roof Life</h4>
                <p className="text-gray-600">Add up to 10+ years with proactive care</p>
              </div>
            </div>

            <div className="flex justify-center">
              <a
                href="#assessment-form"
                className="bg-[#0096D7] text-white px-8 py-4 rounded-full font-bold hover:bg-[#0077B3] transition-colors shadow-lg"
              >
                Schedule a Commercial Assessment
              </a>
            </div>
          </div>
        )}

        <div className="mt-16 bg-[#F5F5F5] rounded-xl p-8">
          <div className="flex justify-center gap-8 flex-wrap text-center">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-[#0096D7]" />
              <span className="font-semibold text-[#1C2A39]">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-6 w-6 text-[#0096D7]" />
              <span className="font-semibold text-[#1C2A39]">DFW Local</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-[#0096D7]" />
              <span className="font-semibold text-[#1C2A39]">Photo-Documented Reports</span>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-[#1C2A39] mb-8 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {maintenanceFaqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-[#1C2A39] text-left">{faq.question}</span>
                  <ChevronDown
                    className={`h-6 w-6 text-[#0096D7] transition-transform flex-shrink-0 ml-4 ${
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

        <div id="assessment-form" className="mt-16 bg-[#1C2A39] text-white rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-3 text-center">Ready to make roof costs predictable?</h3>
            <p className="text-xl text-gray-300 mb-8 text-center">
              Book a free assessment and lock in DFW-preferred pricing.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-[#1C2A39] focus:outline-none focus:ring-2 focus:ring-[#0096D7]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-[#1C2A39] focus:outline-none focus:ring-2 focus:ring-[#0096D7]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-[#1C2A39] focus:outline-none focus:ring-2 focus:ring-[#0096D7]"
                  />
                </div>
                <div>
                  <label htmlFor="propertyType" className="block text-sm font-semibold mb-2">Property Type</label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-[#1C2A39] focus:outline-none focus:ring-2 focus:ring-[#0096D7]"
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="sqFt" className="block text-sm font-semibold mb-2">Approximate Square Footage</label>
                <input
                  type="text"
                  id="sqFt"
                  name="sqFt"
                  value={formData.sqFt}
                  onChange={handleInputChange}
                  placeholder="e.g., 2,500 or 10,000-15,000"
                  className="w-full px-4 py-3 rounded-lg bg-white text-[#1C2A39] focus:outline-none focus:ring-2 focus:ring-[#0096D7]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white text-[#1C2A39] focus:outline-none focus:ring-2 focus:ring-[#0096D7]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0096D7] text-white px-8 py-4 rounded-full font-bold hover:bg-[#0077B3] transition-colors shadow-lg"
              >
                Request My Assessment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
