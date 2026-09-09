import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';

const faqItems = [
  {
    "question": "My roof was hit by hail last season. Is it too late to file a claim?",
    "answer": "Most Texas homeowner policies allow claims within one to two years of the damage date,\n                but check your specific policy. We can inspect your roof now, document existing damage,\n                and help you determine whether a claim makes sense."
  },
  {
    "question": "What's the difference between Class 3 and Class 4 shingles?",
    "answer": "Both are impact-rated, but Class 4 withstands a larger steel ball drop test. We install\n                IKO Dynasty Class 3 impact-resistant shingles as our standard upgrade \u2014 they offer strong\n                hail protection at a reasonable price point for most Saginaw homeowners."
  },
  {
    "question": "Do you work on homes near Eagle Mountain Lake?",
    "answer": "Yes. We serve the entire Saginaw area including properties near Eagle Mountain Lake.\n                Lakefront and near-lake homes can take extra wind exposure, which we account for in\n                our material and installation recommendations."
  },
  {
    "question": "How do I know if I need a repair or a full replacement?",
    "answer": "We start with a free inspection. If damage is limited to a small area and your roof\n                is relatively new, a repair is usually the right call. If damage is widespread or\n                your shingles are near end of life, a replacement is more cost-effective long term."
  },
  {
    "question": "What commercial roofing do you offer in Saginaw?",
    "answer": "For flat and low-slope commercial roofs we install TPO single-ply membrane, R-panel\n                metal, and rolled roofing. These systems work well for retail strips, warehouses,\n                and small office buildings common in the Saginaw area."
  }
];

export default function SaginawRoofingPage() {
  return (
    <div className="bg-white">
      <SchemaMarkup type="faq" faqItems={faqItems} />
      {/* Hero */}
      <section className="bg-[#1C2A39] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-[#FFC107] mb-4">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wide">Serving Saginaw, TX</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Saginaw TX Roofing Contractor</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional roofing for Saginaw homes and businesses. We replace storm-damaged roofs,
            install impact-resistant shingles and metal roofing, and make repairs that last — all
            backed by clear communication and upfront pricing.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">Why Homeowners in Saginaw Choose Us</h2>
          <div className="space-y-4">
            {[
              'IKO Dynasty Class 3 impact-resistant shingles built for the hail Saginaw sees each spring',
              'Standing seam metal roofing for homeowners who want long-term durability and curb appeal',
              'Insurance claim assistance — we document damage and work directly with your adjuster',
              'No high-pressure sales tactics, just honest assessments and clear pricing',
              'Commercial roofing options including TPO single-ply membrane and R-panel metal',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#FFC107] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          {/* [OWNER: fill in years serving Saginaw, license numbers, manufacturer certifications] */}
        </div>
      </section>

      {/* Local Area */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-6">Roofing for the Saginaw Area</h2>
          <p className="text-gray-700 mb-4">
            Saginaw is a growing community just north of Fort Worth with a mix of established
            neighborhoods and newer subdivisions. Older homes in town may still have original
            three-tab shingles that have taken years of hail hits, while newer construction
            often uses architectural shingles that still need inspection after major storms.
          </p>
          {/* [OWNER: fill in neighborhoods — e.g., Willow Creek, Blue Mound, near Eagle Mountain Lake, Park Place, etc.] */}
          <p className="text-gray-700 mb-4">
            Whether you need a quick repair on a few damaged shingles or a full tear-off and
            replacement with IKO Dynasty impact-resistant shingles, we have the materials in
            stock and the crew ready. For commercial buildings and flat roofs, we install TPO
            membrane and rolled roofing systems.
          </p>
          <p className="text-gray-700">
            Saginaw's proximity to Eagle Mountain Lake means some homes face above-average wind
            exposure. We factor local wind patterns into our installation methods, using enhanced
            nailing patterns and starter strips rated for high-wind zones when the property
            warrants it.
          </p>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">Roofing Services in Saginaw</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { to: '/roof-replacement', label: 'Roof Replacement' },
              { to: '/roof-repair', label: 'Roof Repair' },
              { to: '/storm-hail-damage', label: 'Storm & Hail Damage' },
              { to: '/commercial-roofing', label: 'Commercial Roofing' },
              { to: '/metal-roofing', label: 'Metal Roofing' },
              { to: '/roof-inspections', label: 'Roof Inspections' },
            ].map(({ to, label }) => (
              <Link key={to} to={to} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-[#FFC107]/10 border border-gray-200 hover:border-[#FFC107] transition-colors group">
                <span className="font-medium text-[#1C2A39]">{label}</span>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#FFC107] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">Saginaw Roofing FAQ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-[#1C2A39] mb-2">My roof was hit by hail last season. Is it too late to file a claim?</h3>
              <p className="text-gray-700">
                Most Texas homeowner policies allow claims within one to two years of the damage date,
                but check your specific policy. We can inspect your roof now, document existing damage,
                and help you determine whether a claim makes sense.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1C2A39] mb-2">What's the difference between Class 3 and Class 4 shingles?</h3>
              <p className="text-gray-700">
                Both are impact-rated, but Class 4 withstands a larger steel ball drop test. We install
                IKO Dynasty Class 3 impact-resistant shingles as our standard upgrade — they offer strong
                hail protection at a reasonable price point for most Saginaw homeowners.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1C2A39] mb-2">Do you work on homes near Eagle Mountain Lake?</h3>
              <p className="text-gray-700">
                Yes. We serve the entire Saginaw area including properties near Eagle Mountain Lake.
                Lakefront and near-lake homes can take extra wind exposure, which we account for in
                our material and installation recommendations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1C2A39] mb-2">How do I know if I need a repair or a full replacement?</h3>
              <p className="text-gray-700">
                We start with a free inspection. If damage is limited to a small area and your roof
                is relatively new, a repair is usually the right call. If damage is widespread or
                your shingles are near end of life, a replacement is more cost-effective long term.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1C2A39] mb-2">What commercial roofing do you offer in Saginaw?</h3>
              <p className="text-gray-700">
                For flat and low-slope commercial roofs we install TPO single-ply membrane, R-panel
                metal, and rolled roofing. These systems work well for retail strips, warehouses,
                and small office buildings common in the Saginaw area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-[#1C2A39] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need a Roofer in Saginaw?</h2>
          <p className="text-gray-300 mb-8">Call us or request a free inspection online.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:8333567233" className="flex items-center bg-[#FFC107] text-[#1C2A39] px-8 py-3 rounded-full font-bold hover:bg-[#FFD54F] transition-colors">
              <Phone className="h-5 w-5 mr-2" />(833) 356-7233
            </a>
            <Link to="/contact" className="flex items-center bg-white text-[#1C2A39] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Request a Free Inspection<ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
