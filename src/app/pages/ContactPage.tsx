import { Phone, Mail, MapPin, Clock, Calculator, ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'How soon can you inspect my roof?',
      answer: 'We typically schedule free roof inspections within 24-48 hours of your call. For emergency storm damage situations, we offer same-day service throughout the Dallas-Fort Worth area. Our team is available 24/7 for urgent roofing needs.'
    },
    {
      question: 'What areas do you service?',
      answer: 'Ultra Roofing proudly serves the entire Dallas-Fort Worth metroplex, including Fort Worth, Rhome, Saginaw, Haslet, and 27+ surrounding DFW-area cities. We provide both residential and commercial roofing services throughout the area.'
    },
    {
      question: 'Do you work with insurance claims?',
      answer: 'Absolutely! We have extensive experience working with insurance companies on storm damage claims. Our team will document all damage, meet with adjusters, help you navigate the entire claims process, and ensure you receive fair compensation for your roofing repairs.'
    },
    {
      question: 'What forms of payment do you accept?',
      answer: 'We accept all major credit cards, checks, and bank transfers. We also offer flexible financing options to make your roofing project more affordable. Contact us to discuss payment options that work best for your situation.'
    }
  ];

  return (
    <>
      <SEO
        title="Free Roof Inspection Dallas Fort Worth | Get a Quote | Ultra Roofing"
        description="Schedule your free roof inspection with Ultra Roofing — licensed DFW roofing contractor. Fast response, no-obligation estimates, and expert insurance claim guidance across all Dallas–Fort Worth cities."
        keywords="free roof inspection Dallas, free roof estimate Fort Worth, contact roofer DFW, roof inspection near me, same-day roof inspection Dallas, hail damage estimate DFW, roof repair quote North Texas, emergency roofer near me DFW, schedule roofing inspection Texas, get roof replaced DFW"
      />
      <SchemaMarkup type="faq" faqItems={faqs} />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C2A39]/90 to-[#1C2A39]/70 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Contact Ultra Roofing
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200">
            Get in touch with Dallas-Fort Worth's trusted roofing experts
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <a
              href="tel:8333567233"
              className="bg-[#F5F5F5] p-8 rounded-lg text-center hover:bg-[#FFC107] transition-colors group"
            >
              <Phone className="h-16 w-16 text-[#1C2A39] mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-[#1C2A39] mb-2">Call Us</h3>
              <p className="text-2xl font-bold text-[#1C2A39]">(833) 356-7233</p>
              <p className="text-gray-600 mt-2">Available 24/7 for emergencies</p>
            </a>
            <a
              href="mailto:office@ultraroofingtx.com"
              className="bg-[#F5F5F5] p-8 rounded-lg text-center hover:bg-[#FFC107] transition-colors group"
            >
              <Mail className="h-16 w-16 text-[#1C2A39] mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-[#1C2A39] mb-2">Email Us</h3>
              <p className="text-lg font-semibold text-[#1C2A39] break-all">office@ultraroofingtx.com</p>
              <p className="text-gray-600 mt-2">We respond within 24 hours</p>
            </a>
            <div className="bg-[#F5F5F5] p-8 rounded-lg text-center">
              <MapPin className="h-16 w-16 text-[#1C2A39] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1C2A39] mb-2">Service Area</h3>
              <p className="text-gray-700">Dallas-Fort Worth</p>
              <p className="text-gray-600 mt-2">& surrounding areas</p>
            </div>
          </div>

          {/* Request Free Inspection Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C2A39] mb-4">
                Request Your Free Roof Inspection
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">
                Get an instant online quote or schedule a free in-person inspection with our roofing experts
              </p>
            </div>
            <div className="bg-[#1C2A39] p-12 rounded-lg text-center">
              <div className="text-4xl sm:text-5xl mb-6">📱</div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Get an Instant Quote Online</h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
                Use our advanced online estimator to get a detailed roofing quote in minutes. No obligation, no hassle.
              </p>
              <a
                href="https://app.roofr.com/instant-estimator/47d3160b-430f-4eed-a68b-24d095152394/UltraRoofing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#FFC107] text-[#1C2A39] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#FFD54F] transition-colors shadow-lg"
              >
                <Calculator className="h-5 w-5 mr-2" />
                Get Instant Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Hours & Locations */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C2A39] mb-4">
                Service Hours & Locations
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Clock className="h-12 w-12 text-[#FFC107] mb-4" />
                <h3 className="text-2xl font-bold text-[#1C2A39] mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span className="font-semibold">Monday - Friday:</span>
                    <span>7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Saturday:</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Sunday:</span>
                    <span>Closed</span>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <p className="font-semibold text-[#FFC107]">Emergency Service:</p>
                    <p>Available 24/7 for storm damage</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <MapPin className="h-12 w-12 text-[#FFC107] mb-4" />
                <h3 className="text-2xl font-bold text-[#1C2A39] mb-4">Serving DFW</h3>
                <p className="text-gray-700 mb-4">
                  Ultra Roofing proudly serves the entire Dallas-Fort Worth metroplex with professional residential and commercial roofing services.
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-semibold">Dallas, TX</span></p>
                  <p><span className="font-semibold">Fort Worth, TX</span></p>
                  <p className="text-gray-600 mt-2">Plus all surrounding areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C2A39] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Quick answers to common questions about our Dallas-Fort Worth roofing services
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-[#F5F5F5] transition-colors text-left"
                >
                  <span className="text-xl font-semibold text-[#1C2A39]">{faq.question}</span>
                  <ChevronDown
                    className={`h-6 w-6 text-[#FFC107] transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="p-6 bg-[#F5F5F5] border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Contact Methods */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#1C2A39] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              Choose the contact method that works best for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">Phone Call</h3>
              <p className="text-gray-300">Speak directly with our team for immediate assistance</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300">Send us a detailed message and we'll respond within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-2">Online Quote</h3>
              <p className="text-gray-300">Get an instant estimate using our advanced online tool</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-4">📅</div>
              <h3 className="text-xl font-bold mb-2">Schedule Inspection</h3>
              <p className="text-gray-300">Book a free in-person roof inspection at your convenience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FFC107]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C2A39] mb-6">
            Ready to Protect Your Property?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#1C2A39] mb-8">
            Contact Ultra Roofing today for expert roofing services in Dallas-Fort Worth. Free inspections, competitive pricing, and exceptional service guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="/#book-inspection"
              className="flex items-center bg-[#1C2A39] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#2A3A49] transition-colors shadow-lg"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Schedule Free Inspection
            </a>
            <a
              href="tel:8333567233"
              className="flex items-center bg-white text-[#1C2A39] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (833) 356-7233
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-[#1C2A39]">
            <Link to="/services" className="hover:underline font-semibold">
              Our Services →
            </Link>
            <Link to="/maintenance" className="hover:underline font-semibold">
              UltraCare™ Program →
            </Link>
            <Link to="/about" className="hover:underline font-semibold">
              About Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
