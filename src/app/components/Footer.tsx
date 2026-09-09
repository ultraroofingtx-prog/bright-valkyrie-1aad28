import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1C2A39] text-white pt-12 sm:pt-16 pb-20 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-col on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8">
          {/* Brand — full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/ultra-roofing-logo-transparent.png"
              alt="Ultra Roofing DFW roofing contractor"
              className="h-20 sm:h-24 mb-4 w-auto"
            />
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              Ultra Roofing is a trusted, licensed roofing contractor serving Dallas–Fort Worth and surrounding North Texas communities.
            </p>
            <a
              href="tel:8333567233"
              className="inline-flex items-center bg-[#FFC107] text-[#1C2A39] px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#FFD54F] transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              Free Roof Inspection
            </a>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://facebook.com/profile.php?id=61560269641430&mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FFC107] flex items-center justify-center hover:bg-[#FFD54F] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-[#1C2A39]" />
              </a>
              <a
                href="https://instagram.com/ultraroofing_tx?igsh=d21uZHExMW14dWh0&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FFC107] flex items-center justify-center hover:bg-[#FFD54F] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-[#1C2A39]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 text-[#FFC107]">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/maintenance', label: 'Maintenance' },
                { to: '/team', label: 'Team' },
                { to: '/service-areas', label: 'Service Areas' },
                { to: '/blog', label: 'Blog' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-gray-300 hover:text-[#FFC107] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 text-[#FFC107]">Our Services</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/roof-repair', label: 'Roof Repair' },
                { to: '/roof-replacement', label: 'Roof Replacement' },
                { to: '/storm-hail-damage', label: 'Storm Damage' },
                { to: '/storm-hail-damage', label: 'Insurance Claims' },
                { to: '/commercial-roofing', label: 'Commercial Roofing' },
                { to: '/maintenance', label: 'Roof Maintenance' },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="text-sm text-gray-300 hover:text-[#FFC107] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-base sm:text-lg font-bold mb-4 text-[#FFC107]">Contact Info</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:8333567233"
                  className="flex items-center text-sm text-gray-300 hover:text-[#FFC107] transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2 text-[#FFC107] flex-shrink-0" />
                  (833) 356-7233
                </a>
              </li>
              <li>
                <a
                  href="mailto:office@ultraroofingtx.com"
                  className="flex items-start text-sm text-gray-300 hover:text-[#FFC107] transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2 text-[#FFC107] flex-shrink-0 mt-0.5" />
                  office@ultraroofingtx.com
                </a>
              </li>
              <li className="flex items-start text-sm text-gray-300">
                <MapPin className="h-4 w-4 mr-2 text-[#FFC107] flex-shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  355 Graben Ln<br />
                  Rhome, TX 76078
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-white text-sm sm:text-base font-semibold">
              Ultra Roofing LLC
            </p>
            <p className="text-gray-300 text-sm">
              355 Graben Ln, Rhome, TX 76078 &nbsp;|&nbsp; <a href="tel:8333567233" className="text-[#FFC107] hover:underline">(833) 356-7233</a>
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} Ultra Roofing LLC. All rights reserved. | Licensed &amp; Insured | Dallas–Fort Worth Metroplex
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              <Link to="/privacy-policy" className="text-[#FFC107] hover:underline">Privacy Policy</Link>
              {' '}|{' '}
              <Link to="/sms-terms" className="text-[#FFC107] hover:underline">SMS Terms</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
