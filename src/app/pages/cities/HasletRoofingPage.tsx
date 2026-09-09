import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';

const faqItems = [
  {
    "question": "My home is in a newer Haslet subdivision. Does it still need inspection after storms?",
    "answer": "Yes. Even roofs that are only a few years old can sustain hail damage that voids\n                the shingle warranty if left unaddressed. A free inspection after a major storm\n                catches problems early and protects your investment."
  },
  {
    "question": "What roofing materials work best for the Haslet climate?",
    "answer": "IKO Dynasty Class 3 impact-resistant shingles handle hail and sustained heat well.\n                Standing seam metal is another strong option \u2014 it sheds hail, withstands high winds,\n                and reflects summer heat. For flat commercial roofs, TPO single-ply membrane is our\n                standard recommendation."
  },
  {
    "question": "Do you handle insurance paperwork?",
    "answer": "We handle the documentation side \u2014 detailed photos, measurements, and a written\n                scope of work your insurance company needs. We can also meet your adjuster on-site\n                to walk through the damage together."
  },
  {
    "question": "Can you roof a metal barn or shop building?",
    "answer": "Absolutely. R-panel metal and rolled roofing are practical choices for barns, shops,\n                and detached buildings. We handle these projects regularly for Haslet property owners\n                with acreage."
  },
  {
    "question": "How quickly can you start after I approve the estimate?",
    "answer": "In most cases we can schedule your project within one to two weeks of approval.\n                After major storms when demand spikes, timelines may extend, but we communicate\n                clearly about scheduling from the start."
  }
];

export default function HasletRoofingPage() {
  return (
    <div className="bg-white">
      <SchemaMarkup type="faq" faqItems={faqItems} />
      {/* Hero */}
      <section className="bg-[#1C2A39] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-[#FFC107] mb-4">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wide">Serving Haslet, TX</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Haslet TX Roofing Contractor</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Roofing services for Haslet homeowners and local businesses. From hail damage repairs
            to complete roof replacements with impact-resistant shingles, we deliver quality work,
            clear timelines, and honest pricing.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">Why Homeowners in Haslet Choose Us</h2>
          <div className="space-y-4">
            {[
              'IKO Dynasty Class 3 impact-resistant shingles that stand up to Tarrant County hail',
              'Metal roofing expertise — standing seam and R-panel for residential and ag buildings',
              'Free roof inspections with photo reports you can share with your insurance company',
              'We show up when we say we will and keep you informed throughout the project',
              'TPO membrane and rolled roofing available for flat-roof commercial properties',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#FFC107] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          {/* Every project includes our 2-year workmanship warranty */}
        </div>
      </section>

      {/* Local Area */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-6">Roofing for the Haslet Area</h2>
          <p className="text-gray-700 mb-4">
            Haslet has grown quickly over the past decade with new subdivisions alongside
            established homes and rural properties. The area sits in the northern Tarrant County
            hail corridor — spring storms can deliver damaging hail without much warning, and
            the wide-open terrain offers little wind break for exposed rooflines.
          </p>
          {/* [OWNER: fill in nearby communities — e.g., Alliance area, north Fort Worth, Justin, Northlake, Trophy Club] */}
          <p className="text-gray-700 mb-4">
            For newer subdivision homes, IKO Dynasty Class 3 shingles are our go-to recommendation.
            For properties with larger footprints, metal barns, or commercial buildings, we install
            standing seam metal, R-panel metal, and TPO single-ply membrane depending on roof slope
            and use.
          </p>
          <p className="text-gray-700">
            Many Haslet neighborhoods have HOA architectural guidelines. We work within those
            requirements on color matching and material approvals, and handle permit paperwork
            with the city so you don't have to chase down forms or schedule your own inspections.'
          </p>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">Roofing Services in Haslet</h2>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">Haslet Roofing FAQ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-[#1C2A39] mb-2">My home is in a newer Haslet subdivision. Does it still need inspection after storms?</h3>
              <p className="text-gray-700">
                Yes. Even roofs that are only a few years old can sustain hail damage that voids
                the shingle warranty if left unaddressed. A free inspection after a major storm
                catches problems early and protects your investment.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1C2A39] mb-2">What roofing materials work best for the Haslet climate?</h3>
              <p className="text-gray-700">
                IKO Dynasty Class 3 impact-resistant shingles handle hail and sustained heat well.
                Standing seam metal is another strong option — it sheds hail, withstands high winds,
                and reflects summer heat. For flat commercial roofs, TPO single-ply membrane is our
                standard recommendation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1C2A39] mb-2">Do you handle insurance paperwork?</h3>
              <p className="text-gray-700">
                We handle the documentation side — detailed photos, measurements, and a written
                scope of work your insurance company needs. We can also meet your adjuster on-site
                to walk through the damage together.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1C2A39] mb-2">Can you roof a metal barn or shop building?</h3>
              <p className="text-gray-700">
                Absolutely. R-panel metal and rolled roofing are practical choices for barns, shops,
                and detached buildings. We handle these projects regularly for Haslet property owners
                with acreage.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1C2A39] mb-2">How quickly can you start after I approve the estimate?</h3>
              <p className="text-gray-700">
                In most cases we can schedule your project within one to two weeks of approval.
                After major storms when demand spikes, timelines may extend, but we communicate
                clearly about scheduling from the start.
              </p>
              {/* [OWNER: fill in actual current lead times if different] */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-[#1C2A39] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need a Roofer in Haslet?</h2>
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
