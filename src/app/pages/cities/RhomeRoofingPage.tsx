import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ArrowRight, MapPin } from 'lucide-react';

export default function RhomeRoofingPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#1C2A39] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-[#FFC107] mb-4">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wide">Serving Rhome, TX</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Rhome TX Roofing Contractor</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Dependable roofing services for Rhome homeowners and rural properties. We handle storm
            repairs, full replacements, and metal roofing installations with honest pricing and
            materials built for North Texas weather.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">Why Homeowners in Rhome Choose Us</h2>
          <div className="space-y-4">
            {[
              'Local crew familiar with Wise County building requirements and rural property access',
              'IKO Dynasty Class 3 impact-resistant shingles designed for Texas hail and wind',
              'Standing seam metal and R-panel metal options popular with Rhome acreage properties',
              'Free storm damage inspections — we come to you, no trip charge',
              'Straightforward written estimates so you know costs before work begins',
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
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-6">Roofing for the Rhome Area</h2>
          <p className="text-gray-700 mb-4">
            Rhome sits along the 287 corridor north of Fort Worth where open land and larger lots
            are common. Many homes here have metal roofs or older shingle systems exposed to full
            sun and wind with no tree cover. That combination means storm damage can be more severe
            than in shielded suburban neighborhoods.
          </p>
          <p className="text-gray-700 mb-4">
            We serve Rhome and the surrounding communities including:
          </p>
          {/* [OWNER: fill in nearby areas — e.g., Aurora, Boyd, Newark, along 287 corridor, Paradise] */}
          <p className="text-gray-700 mb-4">
            For homes on acreage, metal roofing — standing seam or R-panel — is a practical choice
            that handles high winds and requires less maintenance over time. For standard residential
            roofs, IKO Dynasty Class 3 shingles provide impact resistance rated for the hail we see
            in this part of Wise County.
          </p>
          <p className="text-gray-700">
            If your property has outbuildings, barns, or workshops, we can roof those during the same
            visit. Rolled roofing and R-panel metal are cost-effective choices for non-conditioned
            structures. We bring materials to the job site so you don't need to coordinate separate'
            deliveries on rural roads.
          </p>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">Roofing Services in Rhome</h2>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">Rhome Roofing FAQ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-[#1C2A39] mb-2">Is metal roofing a good choice for properties in Rhome?</h3>
              <p className="text-gray-700">
                Yes. Many Rhome properties sit on open land with full wind and sun exposure. Standing
                seam metal and R-panel metal handle high winds, shed hail better than standard shingles,
                and last significantly longer with minimal maintenance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1C2A39] mb-2">Do you charge extra to come out to Rhome?</h3>
              <p className="text-gray-700">
                No. Our inspections are free with no trip charge for Rhome and the surrounding 287
                corridor. We work in this area regularly and are set up to service rural and acreage
                properties.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1C2A39] mb-2">What shingles do you recommend for hail protection?</h3>
              <p className="text-gray-700">
                We install IKO Dynasty Class 3 impact-resistant shingles. They carry an impact rating
                that can qualify you for insurance discounts and are designed to resist cracking from
                hailstones common in North Texas storms.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1C2A39] mb-2">Can you work on barns, shops, or outbuildings?</h3>
              <p className="text-gray-700">
                We can. R-panel metal and rolled roofing are common choices for barns, workshops, and
                detached garages. We handle these alongside residential roofing projects and can often
                do multiple structures in a single trip to save you time and scheduling hassle.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1C2A39] mb-2">How do I know if my roof needs replacement or just repair?</h3>
              <p className="text-gray-700">
                We start with a free inspection and give you an honest assessment. If only a small
                section is damaged and your roof is relatively new, a repair makes sense. If damage
                is widespread or shingles are near the end of their lifespan, replacement is the
                more cost-effective long-term option.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-[#1C2A39] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need a Roofer in Rhome?</h2>
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
