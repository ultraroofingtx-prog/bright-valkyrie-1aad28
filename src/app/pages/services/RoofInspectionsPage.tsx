import { Link } from 'react-router-dom';
import SchemaMarkup from '../../components/SchemaMarkup';
import { Phone, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Schedule Your Free Inspection',
    description:
      "Call us or fill out the online form. We'll set up a time that works for you — most inspections can be scheduled within a few days.",
  },
  {
    title: 'Exterior Roof Inspection',
    description:
      'We walk your roof and inspect shingles, flashing, ridge caps, pipe boots, vents, gutters, and drip edge. Every issue is photographed and documented.',
  },
  {
    title: 'Attic & Interior Check',
    description:
      'We check the attic for daylight penetration, moisture stains, proper ventilation, and insulation condition. This reveals problems not visible from outside.',
  },
  {
    title: 'Written Report & Recommendations',
    description:
      "You receive a written report with photos, a summary of findings, and our recommendation — whether that's \"your roof is fine,\" a targeted repair, or a replacement conversation.",
  },
];

const signs = [
  'Your roof is 15+ years old and has never been inspected',
  "You're buying or selling a home and need a condition report",
  'A storm passed through and you want damage documented before filing a claim',
  "You see granules in your gutters but aren't sure how serious it is",
  "A neighbor's roof was damaged and you want to check yours",
  'You want an annual maintenance check to catch small issues early',
];

const faqs = [
  {
    q: 'Is the inspection really free?',
    a: "Yes. There's no charge and no obligation. We inspect your roof, give you an honest assessment, and you decide what to do with that information.",
  },
  {
    q: 'How long does an inspection take?',
    a: "Typically 30–60 minutes depending on roof size and complexity. We don't rush — a thorough inspection means fewer surprises later.",
  },
  {
    q: 'Do I need to be home?',
    a: "We prefer you're available so we can share findings in person and answer questions. But if your schedule doesn't allow it, we can email the report with photos and follow up by phone.",
  },
  {
    q: 'Will you get on the roof or just look from the ground?',
    a: "We physically walk the roof whenever it's safe to do so. Ground-only inspections miss critical details like soft decking, hairline shingle cracks, and flashing conditions.",
  },
  {
    q: 'Can I use your inspection report for an insurance claim?',
    a: 'Absolutely. Our reports include dated photos and detailed descriptions that insurance companies accept as supporting documentation.',
  },
];

export default function RoofInspectionsPage() {
  return (
    <div className="bg-white">
      <SchemaMarkup type="service" serviceName='Roof Inspections' serviceDescription='Free drone-assisted roof inspections in Fort Worth and DFW. Detailed reports for insurance claims and maintenance. Schedule yours today.' />
      <SchemaMarkup type="faq" faqItems={faqs.map(f => ({ question: f.q, answer: f.a }))} />
      {/* Hero */}
      <section className="bg-[#1C2A39] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Free Roof Inspections in Fort Worth TX
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Not sure what shape your roof is in? We'll tell you — for free. Our inspections'
            give you an honest assessment with photos and documentation, whether you need
            repairs, a replacement, or nothing at all.
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">
            Our Inspection Process
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
            Signs You Need a Roof Inspection
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

      {/* What We Check */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">
            What We Inspect
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">
                Shingles &amp; Surface
              </h3>
              <p className="text-gray-600">
                Cracking, curling, blistering, missing shingles, granule loss, and algae or moss
                growth. We check every slope.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">
                Flashing &amp; Penetrations
              </h3>
              <p className="text-gray-600">
                All wall flashing, chimney flashing, pipe boots, and roof-to-wall transitions.
                These are the most common leak sources.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">
                Ventilation &amp; Attic
              </h3>
              <p className="text-gray-600">
                Ridge vents, soffit vents, and attic airflow. Poor ventilation causes premature
                shingle failure and ice damming.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">
                Gutters &amp; Drainage
              </h3>
              <p className="text-gray-600">
                Gutter condition, proper slope, downspout routing, and evidence of overflow or
                fascia damage from poor drainage.
              </p>
            </div>
          </div>
          {/* [OWNER: fill in drone inspection capabilities if applicable] */}
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
            Schedule your free roof inspection today. No pressure, no obligation — just honest
            answers.
          </p>
          {/* [OWNER: fill in average response time / scheduling availability] */}
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
            <Link to="/roof-replacement" className="text-sm bg-gray-100 hover:bg-gray-200 text-[#1C2A39] px-4 py-2 rounded-full transition-colors">
              Roof Replacement
            </Link>
            <Link to="/storm-hail-damage" className="text-sm bg-gray-100 hover:bg-gray-200 text-[#1C2A39] px-4 py-2 rounded-full transition-colors">
              Storm &amp; Hail Damage
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
