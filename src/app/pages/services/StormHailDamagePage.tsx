import { Link } from 'react-router-dom';
import SchemaMarkup from '../../components/SchemaMarkup';
import { Phone, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Post-Storm Inspection',
    description:
      'After a storm passes, we perform a full inspection covering shingles, flashing, gutters, soffit, fascia, and siding. We document all damage with photos and measurements.',
  },
  {
    title: 'Damage Report & Insurance Filing',
    description:
      "We provide a detailed damage report you can submit to your insurance company. If you'd like, we'll file the claim on your behalf and handle communication with the adjuster.",
  },
  {
    title: 'Adjuster Meeting On-Site',
    description:
      "We meet your insurance adjuster at your property, walk the roof together, and ensure all damage is accounted for in their scope — not just what's visible from the ground.",
  },
  {
    title: 'Approved Scope & Repair/Replacement',
    description:
      'Once the claim is approved, we schedule the work, order materials, and complete the repair or replacement. You pay only your deductible — we work within the insurance scope.',
  },
  {
    title: 'Final Documentation & Warranty',
    description:
      'We provide final photos, warranty documentation, and a certificate of completion for your records and your insurance file.',
  },
];

const signs = [
  'Dents or divots in shingles (hail hits)',
  'Circular cracking patterns in shingle surface',
  'Missing shingles or exposed underlayment after high winds',
  'Dented gutters, downspouts, or roof vents',
  'Soft spots in decking from wind-driven rain intrusion',
  'Neighbors on your street are filing claims or getting new roofs',
];

const faqs = [
  {
    q: 'How soon after a storm should I get an inspection?',
    a: "As soon as it's safe to do so — ideally within a few days. Insurance companies have time limits for filing claims, and early documentation strengthens your case. In Texas, most policies require claims within one year of the damage date.",
  },
  {
    q: 'Do I have to pay anything out of pocket?',
    a: "If your claim is approved, you're responsible for your policy deductible. The insurance payout covers the rest. We never ask for payment beyond what your policy provides.",
  },
  {
    q: 'What if my insurance denies the claim?',
    a: "We'll review the denial with you. In many cases, a supplement or re-inspection can overturn an initial denial. We can also refer you to a public adjuster if needed.",
  },
  {
    q: 'Can hail damage be hard to spot?',
    a: "Yes. Hail damage to shingles often isn't visible from the ground. It shows up as bruising, granule displacement, or hairline fractures that shorten shingle life — which is why a professional inspection matters.",
  },
  {
    q: 'What size hail causes roof damage?',
    a: 'Hail as small as 1 inch (quarter-sized) can damage shingles. At 1.5 inches and above, damage is very likely on standard architectural shingles. IKO Dynasty Class 3 shingles are tested to withstand larger impacts.',
  },
];

export default function StormHailDamagePage() {
  return (
    <div className="bg-white">
      <SchemaMarkup type="service" serviceName='Storm & Hail Damage Repair' serviceDescription='Hail and storm damage roof repair in DFW. Free inspections, insurance claim assistance, and fast turnarounds. Call Ultra Roofing today.' />
      <SchemaMarkup type="faq" faqItems={faqs.map(f => ({ question: f.q, answer: f.a }))} />
      {/* Hero */}
      <section className="bg-[#1C2A39] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Storm &amp; Hail Damage Roof Repair
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Fort Worth sees severe hail and wind storms every year. We help homeowners navigate
            the damage, the insurance process, and the repair — from the first inspection to the
            final shingle.
          </p>
          {/* [OWNER: fill in recent major storm dates for Fort Worth area] */}
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">
            Our Storm Damage Process
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
            Signs You Have Storm or Hail Damage
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
            Even if your roof looks fine from the street, hail damage can shorten its lifespan
            by years. A free inspection gives you documentation either way.
          </p>
        </div>
      </section>

      {/* Materials / Systems */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">
            Impact-Resistant Roofing Systems
          </h2>
          <p className="text-gray-600 mb-6">
            If your roof is being replaced after storm damage, it's the perfect time to upgrade'
            to impact-resistant materials. Many insurance companies offer premium discounts for
            Class 3 or Class 4 rated roofs.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">
                IKO Dynasty Class 3 Shingles
              </h3>
              <p className="text-gray-600">
                Our go-to recommendation for storm-prone areas. These architectural shingles
                pass UL 2218 Class 3 impact testing and carry a limited lifetime warranty.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">
                Standing Seam Metal
              </h3>
              <p className="text-gray-600">
                Metal roofs resist hail better than asphalt. Standing seam panels with concealed
                fasteners offer the highest wind uplift ratings available for residential roofs.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">
                Synthetic Underlayment
              </h3>
              <p className="text-gray-600">
                We install synthetic underlayment as a secondary water barrier beneath shingles.
                It resists tearing better than felt and provides protection if shingles blow off
                in future storms.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#1C2A39] text-lg mb-2">
                Enhanced Ventilation
              </h3>
              <p className="text-gray-600">
                Proper ridge and soffit ventilation prevents heat buildup that weakens shingles
                from underneath — making them more vulnerable to the next storm.
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
            Don't wait — storm damage gets worse with time. Call for a free inspection or'
            schedule online.
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
            <Link to="/roof-repair" className="text-sm bg-gray-100 hover:bg-gray-200 text-[#1C2A39] px-4 py-2 rounded-full transition-colors">
              Roof Repair
            </Link>
            <Link to="/roof-replacement" className="text-sm bg-gray-100 hover:bg-gray-200 text-[#1C2A39] px-4 py-2 rounded-full transition-colors">
              Roof Replacement
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
