import { Link } from 'react-router-dom';
import SchemaMarkup from '../../components/SchemaMarkup';
import { Phone, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'On-Site Assessment',
    description:
      'We inspect your commercial roof — membrane condition, seams, penetrations, drainage, and flashing — and document everything with photos and a condition report.',
  },
  {
    title: 'System Recommendation & Bid',
    description:
      "Based on your building's needs, budget, and timeline, we recommend the right system (TPO, modified bitumen, or metal) and provide a detailed written bid.",
  },
  {
    title: 'Scheduling Around Your Operations',
    description:
      'We work with your schedule to minimize disruption. Many commercial installs happen in phases so your business stays open during the project.',
  },
  {
    title: 'Installation & Quality Checks',
    description:
      'Our crews install per manufacturer specs with documented quality checkpoints. Seam welds are tested, drainage is verified, and all penetrations are sealed.',
  },
  {
    title: 'Final Walk-Through & Warranty Package',
    description:
      'We walk the finished roof with you, provide as-built documentation, and deliver your warranty package covering both materials and workmanship.',
  },
];

const signs = [
  "Ponding water that doesn't drain within 48 hours after rain",
  'Bubbling, blistering, or splitting in the membrane',
  'Seams separating or lifting at the edges',
  'Interior water stains, especially near HVAC units or drains',
  'Visible membrane wear or exposed substrate',
  'Increased energy costs from lost insulation value',
  'Your roof is 15+ years old and has never been recovered',
];

const faqs = [
  {
    q: "What's the best commercial roofing system for North Texas?",
    a: "TPO single-ply membrane is our most popular choice for flat commercial roofs in the DFW area. It's heat-welded for watertight seams, reflects UV to lower cooling costs, and handles Texas heat well.",
  },
  {
    q: 'How long does a commercial roof installation take?',
    a: 'Timelines vary by building size and system. A typical 10,000 sq ft TPO installation takes 5–10 business days. Larger or multi-phase projects are scoped during the bid process.',
  },
  {
    q: 'Do you handle commercial roof maintenance programs?',
    a: "Yes. We offer annual maintenance contracts that include inspections, drain clearing, seam checks, and minor repairs. Regular maintenance extends your roof's life and keeps warranties valid.",
  },
  {
    q: 'Can you work on occupied buildings?',
    a: 'Absolutely. Most of our commercial projects are on occupied retail, office, and warehouse buildings. We coordinate access, manage noise, and keep debris contained.',
  },
  {
    q: 'What warranty do commercial roof systems carry?',
    a: 'TPO systems carry manufacturer warranties up to 20–30 years depending on membrane thickness and installation method. We also provide a 2-year workmanship warranty covering labor and installation defects.',
  },
];

export default function CommercialRoofingPage() {
  return (
    <div className="bg-white">
      <SchemaMarkup type="service" serviceName='Commercial Roofing' serviceDescription='Commercial roofing in Fort Worth — TPO single-ply, flat roofs, and metal systems. Free inspections for property managers. Call for a quote.' />
      <SchemaMarkup type="faq" faqItems={faqs.map(f => ({ question: f.q, answer: f.a }))} />
      {/* Hero */}
      <section className="bg-[#1C2A39] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Commercial Roofing in Fort Worth TX
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Flat roofs, low-slope systems, and large-footprint buildings require different
            materials and methods than residential work. We install and maintain TPO single-ply,
            modified bitumen, and commercial metal systems for properties across the DFW
            metroplex.
          </p>
          {/* [OWNER: fill in years in commercial roofing, certifications] */}
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">
            Our Commercial Roofing Process
          </h2>
          <ol className="space-y-6">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#FFC107] text-[#1C2A39] rounded-full flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-[#1C2A39] text-lg">{step.title}</h3>
                  <p className="text-gray-600 mt-1">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Signs */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">
            Signs Your Commercial Roof Needs Attention
          </h2>
          <ul className="space-y-4">
            {signs.map((sign, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#FFC107] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{sign}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Systems */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">
            Commercial Roofing Systems We Install
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">
                TPO Single-Ply Membrane
              </h3>
              <p className="text-gray-600">
                Thermoplastic polyolefin membrane with heat-welded seams. Energy-efficient white
                surface reflects UV, reducing cooling costs. Available in 45, 60, and 80 mil
                thicknesses for different performance and warranty levels.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">
                Modified Bitumen
              </h3>
              <p className="text-gray-600">
                Multi-ply torch-applied or self-adhered membrane for flat roofs. Durable,
                walkable, and proven in Texas heat. Good option for roofs with heavy foot
                traffic from HVAC maintenance.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">
                Standing Seam Metal
              </h3>
              <p className="text-gray-600">
                For low-slope commercial buildings that can accommodate metal. Long lifespan,
                minimal maintenance, and excellent wind ratings. Ideal for warehouses and
                industrial buildings.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">
                R-Panel Metal
              </h3>
              <p className="text-gray-600">
                Exposed-fastener metal roofing for commercial and agricultural buildings. Fast
                installation, lower material cost, and good performance for the price point.
              </p>
            </div>
          </div>
          {/* [OWNER: fill in manufacturer partnerships and certifications] */}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i}>
                <dt className="font-semibold text-[#1C2A39] text-lg">{faq.q}</dt>
                <dd className="text-gray-600 mt-2">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-[#1C2A39] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8">
            Call us for a free commercial roof assessment or request a consultation online.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8333567233"
              className="flex items-center bg-[#FFC107] text-[#1C2A39] px-8 py-3 rounded-full font-bold hover:bg-[#FFD54F] transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              (833) 356-7233
            </a>
            <Link
              to="/contact"
              className="flex items-center bg-white text-[#1C2A39] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Request a Free Inspection
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h3 className="text-lg font-semibold text-[#1C2A39] mb-4">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/metal-roofing" className="text-sm bg-gray-100 hover:bg-gray-200 text-[#1C2A39] px-4 py-2 rounded-full transition-colors">
              Metal Roofing
            </Link>
            <Link to="/roof-inspections" className="text-sm bg-gray-100 hover:bg-gray-200 text-[#1C2A39] px-4 py-2 rounded-full transition-colors">
              Roof Inspections
            </Link>
            <Link to="/roof-replacement" className="text-sm bg-gray-100 hover:bg-gray-200 text-[#1C2A39] px-4 py-2 rounded-full transition-colors">
              Roof Replacement
            </Link>
            <Link to="/" className="text-sm bg-gray-100 hover:bg-gray-200 text-[#1C2A39] px-4 py-2 rounded-full transition-colors">
              Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
