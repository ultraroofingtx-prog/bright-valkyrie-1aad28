import { Link } from 'react-router-dom';
import SchemaMarkup from '../../components/SchemaMarkup';
import { Phone, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Inspection & Damage Assessment',
    description:
      'We inspect the damaged area from both the exterior and the attic side to identify the full scope of the problem — not just the visible symptoms.',
  },
  {
    title: 'Clear Explanation of Options',
    description:
      'We explain what we found, whether a repair will hold or a replacement makes more sense, and give you a written estimate before any work begins.',
  },
  {
    title: 'Targeted Repair',
    description:
      'We fix the problem at the source: replacing damaged shingles, resealing flashing, patching decking, or addressing ventilation failures.',
  },
  {
    title: 'Clean-Up & Documentation',
    description:
      'We photograph all completed work, clean the site, and provide documentation you can use for insurance or future reference.',
  },
];

const signs = [
  'Water stains on your ceiling or interior walls',
  'Missing, cracked, or lifted shingles after a storm',
  'Flashing is pulling away from walls or chimneys',
  'Roof is leaking around vents, pipes, or skylights',
  'Shingle granules collecting in gutters',
  'Soft or spongy spots when you walk on the roof',
];

const faqs = [
  {
    q: 'Can you repair just part of my roof?',
    a: "Yes. If the damage is limited to one section and the rest of the roof is in good shape, a localized repair is the right call. We'll tell you honestly if a full replacement would be more cost-effective.",
  },
  {
    q: 'How much does a roof repair cost?',
    a: 'Repairs range widely depending on the scope — a simple shingle replacement costs far less than a valley or flashing rebuild. We provide a written estimate after inspection so you know the exact cost before any work begins.',
  },
  {
    q: 'Do you handle emergency leak repairs?',
    a: "Yes. If you have an active leak, call us and we'll prioritize getting a tarp or temporary seal in place to prevent further interior damage while we schedule the permanent repair.",
  },
  {
    q: 'Will a repair void my roof warranty?',
    a: "Not if it's done correctly and with compatible materials. We follow manufacturer guidelines and can check your existing warranty terms before starting.",
  },
  {
    q: 'How long will a repair last?',
    a: 'A properly executed repair should last the remaining life of your roof. We use the same quality materials as a full installation — not quick-fix caulk or sealant patches.',
  },
];

export default function RoofRepairPage() {
  return (
    <div className="bg-white">
      <SchemaMarkup type="service" serviceName='Roof Repair' serviceDescription='Fast, affordable roof repair in Fort Worth. Leak repair, missing shingles, storm damage fixes. Licensed & insured. Call for same-day service.' />
      <SchemaMarkup type="faq" faqItems={faqs.map(f => ({ question: f.q, answer: f.a }))} />
      {/* Hero */}
      <section className="bg-[#1C2A39] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Roof Repair Services in Fort Worth TX
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Not every roof problem means a full replacement. We handle leak repairs, storm
            damage patches, flashing failures, and shingle replacements — done right the first
            time so you don't pay twice.'
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">
            Our Repair Process
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
            Signs You Need a Roof Repair
          </h2>
          <ul className="space-y-4">
            {signs.map((sign, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#FFC107] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{sign}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-gray-600">
            If you"re not sure whether you need a repair or replacement, we'll give you an"
            honest assessment during our free inspection.
          </p>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">
            Repair Materials &amp; Methods
          </h2>
          <p className="text-gray-600 mb-6">
            We match existing materials whenever possible for a seamless repair. When that's not'
            an option, we use equivalent or upgraded products:
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">Shingle Repairs</h3>
              <p className="text-gray-600">
                We stock IKO Dynasty and other common DFW shingle lines so color and profile
                matches are available for most repairs.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">Flashing &amp; Sealant</h3>
              <p className="text-gray-600">
                Step flashing, counter flashing, and pipe boots are replaced with new material —
                not patched over with caulk.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">Decking Replacement</h3>
              <p className="text-gray-600">
                Rotted or delaminated plywood is cut out and replaced with new CDX-rated
                sheathing before shingles go back on.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">Flat Roof Patches</h3>
              <p className="text-gray-600">
                For low-slope sections we use modified bitumen or TPO patches heat-welded for a
                watertight seal.
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
            Call us or request a free inspection online. Most repairs can be scheduled within a
            few days.
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
            <Link to="/storm-hail-damage" className="text-sm bg-gray-100 hover:bg-gray-200 text-[#1C2A39] px-4 py-2 rounded-full transition-colors">
              Storm &amp; Hail Damage
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
