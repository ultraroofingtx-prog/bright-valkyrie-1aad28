import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Free Roof Inspection',
    description:
      'We start with a thorough inspection of your existing roof, documenting damage, wear, and ventilation issues with photos and measurements.',
  },
  {
    title: 'Written Estimate & Material Selection',
    description:
      'You receive a detailed written estimate covering tear-off, decking repairs, underlayment, shingles, flashing, and ventilation. We walk you through material options including IKO Dynasty Class 3 impact-resistant shingles.',
  },
  {
    title: 'Insurance Coordination (If Applicable)',
    description:
      'If your replacement is storm-related, we meet with your adjuster on-site and provide the documentation needed to support your claim.',
  },
  {
    title: 'Tear-Off & Deck Inspection',
    description:
      'We remove existing shingles down to the decking, inspect for rot or damage, and replace any compromised plywood before installing new materials.',
  },
  {
    title: 'Installation & Final Walk-Through',
    description:
      'New underlayment, drip edge, shingles, ridge cap, and ventilation are installed per manufacturer specs. We do a final walk-through with you and handle debris removal.',
  },
];

const signs = [
  'Shingles are curling, cracking, or missing in multiple areas',
  'Your roof is 20+ years old with original shingles',
  'You see daylight through the attic decking',
  'Multiple leaks or water stains on interior ceilings',
  'Granule loss is heavy — gutters full of grit after rain',
  'Sagging or uneven roofline',
  'Your energy bills have increased noticeably',
];

const faqs = [
  {
    q: 'How long does a full roof replacement take?',
    a: 'Most residential roof replacements in Fort Worth are completed in 1–3 days depending on the size of the home and complexity of the roofline. Weather delays can add time during storm season.',
  },
  {
    q: 'What shingles do you recommend for Fort Worth weather?',
    a: 'We recommend IKO Dynasty Class 3 impact-resistant shingles for most homeowners in the DFW area. They carry a Class 3 impact rating, which qualifies for insurance discounts and holds up better against North Texas hail.',
  },
  {
    q: "Will my homeowner's insurance cover a roof replacement?",
    a: 'If your roof was damaged by a covered peril like hail or wind, your policy typically covers replacement minus your deductible. We help document the damage and can meet with your adjuster.',
  },
  {
    q: 'Do I need to be home during the replacement?',
    a: "No. We coordinate access before the project starts. Many homeowners prefer to be away during tear-off due to noise. We'll contact you for the final walk-through.",
  },
  {
    q: 'What warranty comes with a new roof?',
    a: "You receive both a manufacturer's material warranty and our 2-year workmanship warranty, which covers any labor or installation defects.",
  },
];

export default function RoofReplacementPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#1C2A39] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Roof Replacement in Fort Worth TX
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            When repairs aren't enough, a full roof replacement protects your home for decades.'
            We handle everything from tear-off to final inspection — including insurance
            paperwork if your roof was storm-damaged.
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">
            Our Roof Replacement Process
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

      {/* Signs You Need Replacement */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">
            Signs You Need a Roof Replacement
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

      {/* Materials */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">
            Roofing Materials We Install
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">
                IKO Dynasty Shingles
              </h3>
              <p className="text-gray-600">
                Class 3 impact-resistant architectural shingles with a limited lifetime warranty.
                Available in a wide range of colors. Our most popular choice for Fort Worth
                homeowners.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">Standing Seam Metal</h3>
              <p className="text-gray-600">
                Premium metal roofing with concealed fasteners and a 40–60 year lifespan.
                Excellent wind and hail resistance for Texas weather.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">R-Panel Metal</h3>
              <p className="text-gray-600">
                Cost-effective exposed-fastener metal roofing. Great for garages, barns, and
                budget-conscious whole-home installations.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">
                Rolled Roofing
              </h3>
              <p className="text-gray-600">
                An economical option for low-slope sections, porches, and outbuildings. Faster
                installation at a lower material cost.
              </p>
            </div>
          </div>
          {/* [OWNER: fill in any additional product lines or manufacturer partnerships] */}
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
            Call us or request a free inspection online. We serve Fort Worth and the surrounding
            DFW communities.
          </p>
          {/* [OWNER: fill in specific neighborhoods served] */}
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
            <Link to="/roof-repair" className="text-sm bg-gray-100 hover:bg-gray-200 text-[#1C2A39] px-4 py-2 rounded-full transition-colors">
              Roof Repair
            </Link>
            <Link to="/storm-hail-damage" className="text-sm bg-gray-100 hover:bg-gray-200 text-[#1C2A39] px-4 py-2 rounded-full transition-colors">
              Storm &amp; Hail Damage
            </Link>
            <Link to="/roof-inspections" className="text-sm bg-gray-100 hover:bg-gray-200 text-[#1C2A39] px-4 py-2 rounded-full transition-colors">
              Roof Inspections
            </Link>
            <Link to="/metal-roofing" className="text-sm bg-gray-100 hover:bg-gray-200 text-[#1C2A39] px-4 py-2 rounded-full transition-colors">
              Metal Roofing
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
