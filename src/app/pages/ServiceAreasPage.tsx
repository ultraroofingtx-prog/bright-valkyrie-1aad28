import { MapPin, Phone, Calculator } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function ServiceAreasPage() {
  const cities = [
    { name: 'Dallas', slug: 'dallas', population: '1.3M+' },
    { name: 'Fort Worth', slug: 'fort-worth', population: '900K+' },
    { name: 'Irving', slug: 'irving', population: '250K+' },
    { name: 'Arlington', slug: 'arlington', population: '400K+' },
    { name: 'Plano', slug: 'plano', population: '285K+' },
    { name: 'Frisco', slug: 'frisco', population: '200K+' },
    { name: 'McKinney', slug: 'mckinney', population: '195K+' },
    { name: 'Denton', slug: 'denton', population: '145K+' },
    { name: 'Lewisville', slug: 'lewisville', population: '110K+' },
    { name: 'Flower Mound', slug: 'flower-mound', population: '75K+' },
    { name: 'Grapevine', slug: 'grapevine', population: '55K+' },
    { name: 'Carrollton', slug: 'carrollton', population: '135K+' },
    { name: 'Richardson', slug: 'richardson', population: '120K+' },
    { name: 'Garland', slug: 'garland', population: '240K+' },
    { name: 'Mesquite', slug: 'mesquite', population: '145K+' },
    { name: 'Allen', slug: 'allen', population: '105K+' },
    { name: 'The Colony', slug: 'the-colony', population: '45K+' },
    { name: 'Coppell', slug: 'coppell', population: '42K+' },
    { name: 'Southlake', slug: 'southlake', population: '32K+' },
    { name: 'Keller', slug: 'keller', population: '48K+' },
    { name: 'Rockwall', slug: 'rockwall', population: '47K+' },
    { name: 'Mansfield', slug: 'mansfield', population: '72K+' },
    { name: 'Weatherford', slug: 'weatherford', population: '32K+' },
    { name: 'Waxahachie', slug: 'waxahachie', population: '40K+' },
    { name: 'Burleson', slug: 'burleson', population: '50K+' },
    { name: 'Prosper', slug: 'prosper', population: '30K+' },
    { name: 'Wylie', slug: 'wylie', population: '52K+' }
  ];

  return (
    <>
      <SEO
        title="Roofing Contractor Near Me | DFW Service Areas | Ultra Roofing"
        description="Ultra Roofing serves 27+ cities across Dallas–Fort Worth including Dallas, Fort Worth, Plano, Frisco, McKinney, Arlington, and more. Local roofers, free inspections, licensed & insured."
        keywords="roofing contractor near me DFW, local roofer Dallas Fort Worth, roofer near me North Texas, roofing company Plano TX, roof repair Frisco TX, roofing McKinney TX, roofer Arlington TX, roofing Garland TX, roof replacement Irving TX, Denton roofing contractor, Lewisville roofer, roofing service areas DFW, North Texas roofing company"
      />

      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C2A39]/90 to-[#1C2A39]/70 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/4219862/pexels-photo-4219862.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Service Areas
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200">
            Serving 27+ Cities Across the Dallas-Fort Worth Metroplex
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C2A39] mb-4">
              Expert Roofing Services Throughout North Texas
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Ultra Roofing proudly serves homeowners and businesses across the Dallas-Fort Worth metroplex and surrounding communities. With fast response times and local expertise, we are your trusted roofing partner throughout North Texas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {cities.map((city) => (
              <Link
                key={city.slug}
                to={`/roofing/${city.slug}`}
                className="bg-[#F5F5F5] p-6 rounded-lg hover:bg-[#FFC107] hover:shadow-xl transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <MapPin className="h-8 w-8 text-[#FFC107] group-hover:text-[#1C2A39]" />
                  <span className="text-sm text-gray-600 group-hover:text-[#1C2A39]">{city.population}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1C2A39] group-hover:text-[#1C2A39]">
                  {city.name}
                </h3>
                <p className="text-gray-600 group-hover:text-[#1C2A39] text-sm mt-2">
                  View roofing services →
                </p>
              </Link>
            ))}
          </div>

          <div className="bg-[#1C2A39] text-white p-8 sm:p-10 lg:p-12 rounded-lg">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Do not See Your City Listed?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
                We serve many additional communities throughout the DFW region. Contact us to confirm service availability in your area.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="flex items-center bg-[#FFC107] text-[#1C2A39] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#FFD54F] transition-colors shadow-lg"
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  Request Service
                </Link>
                <a
                  href="tel:8333567233"
                  className="flex items-center bg-white text-[#1C2A39] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (833) 356-7233
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
