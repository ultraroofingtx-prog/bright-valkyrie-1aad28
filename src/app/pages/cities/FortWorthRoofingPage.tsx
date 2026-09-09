import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';

const faqItems = [
  {
    "question": "How often does hail damage roofs in Fort Worth?",
    "answer": "Tarrant County typically sees multiple hail events each spring. Even golf-ball-size hail\n                can crack standard shingles and dent metal flashing. After any major storm, we recommend\n                a free inspection to catch damage before leaks develop."
  },
  {
    "question": "What roofing materials hold up best in Fort Worth heat?",
    "answer": "IKO Dynasty Class 3 impact-resistant shingles and standing seam metal both perform well\n                in sustained high temperatures. For flat commercial roofs, TPO single-ply membrane\n                reflects UV and keeps cooling costs lower."
  },
  {
    "question": "Will you help with my insurance claim?",
    "answer": "Yes. We document all damage with photos and measurements, provide a detailed scope of\n                work, and can meet your adjuster on-site if needed. We work with all major insurance\n                carriers in the Fort Worth area."
  },
  {
    "question": "How long does a full roof replacement take?",
    "answer": "Most residential roofs in Fort Worth are completed in one to three days depending on\n                size and complexity. Larger homes or properties requiring decking repairs may take\n                longer. We confirm the timeline before any work starts so you know what to expect\n                and can plan accordingly."
  },
  {
    "question": "Do you handle commercial roofs in Fort Worth?",
    "answer": "We do. Our commercial services include TPO membrane, R-panel metal, and rolled roofing.\n                We work on retail centers, warehouses, office buildings, and multi-family properties\n                throughout the Fort Worth metro."
  }
];

export default function FortWorthRoofingPage() {
  return (
    <div className="bg-white">
      <SchemaMarkup type="faq" faqItems={faqItems} />
      {/* Hero */}
      <section className="bg-[#1C2A39] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-[#FFC107] mb-4">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wide">Serving Fort Worth, TX</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Fort Worth Roofing Contractor</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Residential and commercial roofing services for Fort Worth homeowners and property managers.
            From hail damage repairs to full roof replacements, we handle every project with straightforward
            pricing and quality materials.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">Why Homeowners in Fort Worth Choose Us</h2>
          <div className="space-y-4">
            {[
              'We install IKO Dynasty Class 3 impact-resistant shingles rated for North Texas hail storms',
              'Free roof inspections with detailed photo documentation of any damage found',
              'Direct experience working with insurance adjusters on Fort Worth storm claims',
              'TPO single-ply membrane and standing seam metal options for flat and commercial roofs',
              'Clear written estimates with no hidden fees or surprise charges after work begins',
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
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-6">Roofing for the Fort Worth Area</h2>
          <p className="text-gray-700 mb-4">
            Fort Worth's weather puts roofs to the test. Spring hailstorms roll through Tarrant County
            regularly, and summer heat pushes well above 100°F for weeks at a time. Both take a toll on
            standard three-tab shingles. We recommend impact-resistant products like IKO Dynasty Class 3
            shingles or standing seam metal for homeowners who want long-term performance without repeated
            repairs.
          </p>
          {/* [OWNER: fill in neighborhoods served — e.g., Westover Hills, Ridglea, TCU area, Southlake, Arlington Heights, Wedgwood, etc.] */}
          <p className="text-gray-700 mb-4">
            Whether your property is a single-story ranch home or a multi-unit commercial building,
            we carry the materials and crew to handle the job. Our commercial options include TPO
            single-ply membrane, R-panel metal, and rolled roofing for low-slope applications.
          </p>
          <p className="text-gray-700">
            Fort Worth's building codes require specific wind-uplift ratings and fastener patterns.
            We stay current on city permit requirements so your new roof passes inspection without
            delays or re-work. If your home is in a homeowners association, we can work with HOA
            guidelines on color and material selections.
          </p>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">Roofing Services in Fort Worth</h2>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">Fort Worth Roofing FAQ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-[#1C2A39] mb-2">How often does hail damage roofs in Fort Worth?</h3>
              <p className="text-gray-700">
                Tarrant County typically sees multiple hail events each spring. Even golf-ball-size hail
                can crack standard shingles and dent metal flashing. After any major storm, we recommend
                a free inspection to catch damage before leaks develop.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1C2A39] mb-2">What roofing materials hold up best in Fort Worth heat?</h3>
              <p className="text-gray-700">
                IKO Dynasty Class 3 impact-resistant shingles and standing seam metal both perform well
                in sustained high temperatures. For flat commercial roofs, TPO single-ply membrane
                reflects UV and keeps cooling costs lower.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1C2A39] mb-2">Will you help with my insurance claim?</h3>
              <p className="text-gray-700">
                Yes. We document all damage with photos and measurements, provide a detailed scope of
                work, and can meet your adjuster on-site if needed. We work with all major insurance
                carriers in the Fort Worth area.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1C2A39] mb-2">How long does a full roof replacement take?</h3>
              <p className="text-gray-700">
                Most residential roofs in Fort Worth are completed in one to three days depending on
                size and complexity. Larger homes or properties requiring decking repairs may take
                longer. We confirm the timeline before any work starts so you know what to expect
                and can plan accordingly.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1C2A39] mb-2">Do you handle commercial roofs in Fort Worth?</h3>
              <p className="text-gray-700">
                We do. Our commercial services include TPO membrane, R-panel metal, and rolled roofing.
                We work on retail centers, warehouses, office buildings, and multi-family properties
                throughout the Fort Worth metro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-[#1C2A39] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need a Roofer in Fort Worth?</h2>
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
