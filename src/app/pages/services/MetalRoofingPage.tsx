import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Consultation & Design',
    description:
      'We discuss your goals — durability, aesthetics, budget — and help you choose the right metal profile (standing seam or R-panel), gauge, and color for your building.',
  },
  {
    title: 'Measurements & Engineering',
    description:
      'Precise measurements ensure panels are fabricated to fit. For standing seam, panels are often roll-formed on-site to eliminate end laps on long runs.',
  },
  {
    title: 'Deck Prep & Underlayment',
    description:
      'We inspect and repair the deck, install synthetic underlayment for a secondary moisture barrier, and address any ventilation or insulation needs.',
  },
  {
    title: 'Panel Installation',
    description:
      'Panels are installed with proper expansion allowances, sealed trim, and flashing at all transitions. Standing seam clips allow thermal movement without stress on fasteners.',
  },
  {
    title: 'Trim, Flashing & Final Inspection',
    description:
      'Ridge caps, valleys, eave trim, and wall flashings are installed. We do a full inspection, clean the job site, and walk you through the finished product.',
  },
];

const signs = [
  'You want a roof that lasts 40–60+ years with minimal maintenance',
  "Hail damage is a recurring problem and you're tired of re-roofing every 10–15 years",
  'You want to reduce cooling costs — metal reflects solar heat',
  "Your property's aesthetic calls for a clean, modern look",
  "You're building a barndominium, workshop, or agricultural structure",
  'You want a roof that can handle sustained high winds',
];

const faqs = [
  {
    q: "What's the difference between standing seam and R-panel?",
    a: 'Standing seam uses concealed clips — no exposed fasteners — which means no potential leak points and a cleaner look. R-panel uses exposed screws through the panel face. Standing seam costs more but lasts longer with less maintenance.',
  },
  {
    q: 'Is a metal roof louder in the rain?',
    a: "Not noticeably. With proper decking and underlayment beneath the panels, rain noise inside the home is comparable to an asphalt shingle roof. It's louder on open-frame structures like carports.",
  },
  {
    q: 'Does metal roofing attract lightning?',
    a: "No. Metal roofing does not increase the likelihood of a lightning strike. In fact, because metal is non-combustible, it's actually safer than other materials if a strike does occur.",
  },
  {
    q: 'How much does a metal roof cost compared to shingles?',
    a: 'Metal typically costs 2–3x more than architectural shingles upfront. But it lasts 2–4x longer and requires far less maintenance, so lifetime cost is often lower. We can break down the comparison for your specific project.',
  },
  {
    q: 'Can you install metal over existing shingles?',
    a: "In some cases, yes — if the deck is sound and local code allows it. However, we generally recommend a tear-off so we can inspect and repair the decking. We'll advise based on your specific situation.",
  },
];

export default function MetalRoofingPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#1C2A39] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Metal Roofing in Fort Worth TX
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Metal roofs last decades longer than shingles, stand up to Texas hail and wind, and
            lower your energy bills. We install standing seam and R-panel metal systems for
            residential and commercial properties across the DFW area.
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">
            Our Metal Roofing Process
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

      {/* Signs / Reasons */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">
            Signs Metal Roofing Is Right for You
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

      {/* Metal Systems */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">
            Metal Roofing Systems We Install
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">
                Standing Seam
              </h3>
              <p className="text-gray-600">
                Concealed-fastener panels with raised seams that interlock. Available in 24- and
                26-gauge steel or aluminum. Accommodates thermal expansion, resists wind uplift
                to 140+ mph, and offers a clean modern aesthetic.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">
                R-Panel (Exposed Fastener)
              </h3>
              <p className="text-gray-600">
                Rib-profile panels secured with self-drilling screws. Economical, fast to
                install, and available in dozens of colors. Ideal for workshops, agricultural
                buildings, and cost-conscious residential projects.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">
                Metal Shingles
              </h3>
              <p className="text-gray-600">
                Stamped metal panels that mimic the look of slate or shake. Same longevity and
                performance as panel metal with a traditional aesthetic for homes with HOA or
                historic requirements.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">
                Color &amp; Finish Options
              </h3>
              <p className="text-gray-600">
                Kynar/PVDF finishes resist fading for 30+ years. We carry a full spectrum of
                colors from matte charcoal to bright galvalume. Samples available at
                consultation.
              </p>
            </div>
          </div>
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
            Call us to discuss metal roofing options or schedule a free consultation.
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
            <Link to="/roof-replacement" className="text-sm bg-gray-100 hover:bg-gray-200 text-[#1C2A39] px-4 py-2 rounded-full transition-colors">
              Roof Replacement
            </Link>
            <Link to="/commercial-roofing" className="text-sm bg-gray-100 hover:bg-gray-200 text-[#1C2A39] px-4 py-2 rounded-full transition-colors">
              Commercial Roofing
            </Link>
            <Link to="/roof-inspections" className="text-sm bg-gray-100 hover:bg-gray-200 text-[#1C2A39] px-4 py-2 rounded-full transition-colors">
              Roof Inspections
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
