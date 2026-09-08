import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, ArrowRight, MapPin, Shield, Wrench } from "lucide-react";
import { cityData } from "../../data/roofingCityData";

const serviceLinks = [
  { to: "/roof-replacement", label: "Roof Replacement" },
  { to: "/roof-repair", label: "Roof Repair" },
  { to: "/storm-hail-damage", label: "Storm & Hail Damage" },
  { to: "/commercial-roofing", label: "Commercial Roofing" },
  { to: "/metal-roofing", label: "Metal Roofing" },
  { to: "/roof-inspections", label: "Roof Inspections" },
];

const systems = [
  {
    name: "IKO Dynasty Class 3",
    type: "Impact-Resistant Shingles",
    desc: "Tested against 2-inch hail. Popular choice for residential properties across DFW.",
  },
  {
    name: "TPO Single-Ply Membrane",
    type: "Flat & Low-Slope Roofing",
    desc: "Heat-welded seams for watertight performance. Reflects UV to lower cooling costs.",
  },
  {
    name: "Standing Seam Metal",
    type: "Premium Metal Roofing",
    desc: "Concealed fasteners, 40-70 year lifespan. Excellent wind and hail resistance.",
  },
  {
    name: "R-Panel Metal",
    type: "Commercial & Agricultural",
    desc: "Cost-effective exposed-fastener metal. Ideal for warehouses, barns, and shops.",
  },
];

export default function RoofingCityPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = citySlug ? cityData[citySlug] : null;

  if (!city) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1C2A39] mb-4">City Not Found</h1>
          <Link to="/service-areas" className="text-[#FFC107] hover:underline">View all service areas</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#1C2A39] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-[#FFC107] mb-4">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wide">
              Serving {city.name}, TX &mdash; {city.county}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Roofing Contractor in {city.name}, TX
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{city.intro}</p>
        </div>
      </section>

      {/* Residential Roofing */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-6">
            Residential Roofing in {city.name}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">{city.residential}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Free drone-assisted roof inspections",
              "Insurance claim documentation and adjuster coordination",
              "IKO Dynasty Class 3 impact-resistant shingles",
              "Licensed, insured, and locally operated",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#FFC107] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial & TPO */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-[#1C2A39] p-3 rounded-lg flex-shrink-0 hidden sm:block">
              <Wrench className="h-6 w-6 text-[#FFC107]" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-4">
                Commercial &amp; TPO Roofing
              </h2>
              <p className="text-gray-700 leading-relaxed">{city.commercial}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Storm & Hail Damage */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-[#1C2A39] p-3 rounded-lg flex-shrink-0 hidden sm:block">
              <Shield className="h-6 w-6 text-[#FFC107]" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-4">
                Storm &amp; Hail Damage Repair
              </h2>
              <p className="text-gray-700 leading-relaxed">{city.storm}</p>
            </div>
          </div>
          <div className="mt-8 bg-[#FFC107]/10 border border-[#FFC107]/30 rounded-lg p-6">
            <p className="text-[#1C2A39] font-medium">
              After a storm in {city.name}, call us for a free inspection. We document all damage, meet with your insurance adjuster, and handle the claims paperwork so you can focus on your family.
            </p>
          </div>
        </div>
      </section>

      {/* Roofing Systems */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">
            Roofing Systems We Install
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {systems.map((sys) => (
              <div key={sys.name} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-[#1C2A39] mb-1">{sys.name}</h3>
                <p className="text-sm text-[#FFC107] font-medium mb-3">{sys.type}</p>
                <p className="text-gray-600 text-sm">{sys.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-6">
            {city.faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6 last:border-0">
                <dt className="text-lg font-semibold text-[#1C2A39] mb-2">{faq.q}</dt>
                <dd className="text-gray-700 leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-8">
            Roofing Services in {city.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center justify-between p-4 bg-white rounded-lg hover:bg-[#FFC107]/10 border border-gray-200 hover:border-[#FFC107] transition-colors group"
              >
                <span className="font-medium text-[#1C2A39]">{label}</span>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#FFC107] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-[#1C2A39] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Need a Roofer in {city.name}?
          </h2>
          <p className="text-gray-300 mb-8">
            Call us today or request a free inspection online. We serve {city.name} and all of {city.county}.
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
          <div className="flex flex-wrap gap-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Nearby Cities
              </h3>
              <div className="flex flex-wrap gap-2">
                {city.neighbors.map((n) => (
                  <Link
                    key={n.slug}
                    to={`/roofing/${n.slug}`}
                    className="text-sm text-[#1C2A39] hover:text-[#FFC107] underline underline-offset-2"
                  >
                    {n.name} Roofing
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Quick Links
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link to="/" className="text-sm text-[#1C2A39] hover:text-[#FFC107] underline underline-offset-2">Home</Link>
                <Link to="/service-areas" className="text-sm text-[#1C2A39] hover:text-[#FFC107] underline underline-offset-2">All Service Areas</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
