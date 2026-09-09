import { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, Calculator, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;
  const close = () => { setMobileMenuOpen(false); setServicesOpen(false); setAreasOpen(false); };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    close();
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) setAreasOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceLinks = [
    { to: '/roof-replacement', label: 'Roof Replacement' },
    { to: '/roof-repair', label: 'Roof Repair' },
    { to: '/storm-hail-damage', label: 'Storm & Hail Damage' },
    { to: '/commercial-roofing', label: 'Commercial Roofing' },
    { to: '/metal-roofing', label: 'Metal Roofing' },
    { to: '/roof-inspections', label: 'Roof Inspections' },
    { to: '/maintenance', label: 'Maintenance Plans' },
  ];

  const areaLinks = [
    { to: '/fort-worth-roofing', label: 'Fort Worth' },
    { to: '/rhome-roofing', label: 'Rhome' },
    { to: '/saginaw-roofing', label: 'Saginaw' },
    { to: '/haslet-roofing', label: 'Haslet' },
    { to: '/service-areas', label: 'All Service Areas' },
  ];

  const isServiceActive = serviceLinks.some(l => isActive(l.to));
  const isAreaActive = areaLinks.some(l => isActive(l.to)) || location.pathname.startsWith('/service-areas') || location.pathname.startsWith('/roofing/');

  return (
    <header className="bg-[#1C2A39] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" onClick={close} className="flex-shrink-0">
            <img
              src="/ultra-roofing-logo-transparent.png"
              alt="Ultra Roofing"
              className="h-11 sm:h-16 lg:h-18 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-sm xl:text-base">
            <Link to="/" className={`hover:text-[#FFC107] transition-colors font-medium ${isActive('/') ? 'text-[#FFC107]' : ''}`}>Home</Link>
            <Link to="/about" className={`hover:text-[#FFC107] transition-colors font-medium ${isActive('/about') ? 'text-[#FFC107]' : ''}`}>About Us</Link>

            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setAreasOpen(false); }}
                className={`flex items-center gap-1 hover:text-[#FFC107] transition-colors font-medium ${isServiceActive ? 'text-[#FFC107]' : ''}`}
              >
                Services <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <Link to="/services" className="block px-4 py-2 text-sm text-[#1C2A39] hover:bg-[#FFC107]/10 font-medium">All Services</Link>
                  <div className="border-t border-gray-100 my-1" />
                  {serviceLinks.map(({ to, label }) => (
                    <Link key={to} to={to} className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFC107]/10 hover:text-[#1C2A39]">{label}</Link>
                  ))}
                </div>
              )}
              {/* Hidden nav links for SEO crawlers */}
              <nav className="sr-only" aria-label="Services">
                <Link to="/services">All Services</Link>
                {serviceLinks.map(({ to, label }) => <Link key={to} to={to}>{label}</Link>)}
              </nav>
            </div>

            {/* Areas Dropdown */}
            <div ref={areasRef} className="relative">
              <button
                onClick={() => { setAreasOpen(!areasOpen); setServicesOpen(false); }}
                className={`flex items-center gap-1 hover:text-[#FFC107] transition-colors font-medium ${isAreaActive ? 'text-[#FFC107]' : ''}`}
              >
                Areas <ChevronDown className={`h-4 w-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
              </button>
              {areasOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  {areaLinks.map(({ to, label }) => (
                    <Link key={to} to={to} className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFC107]/10 hover:text-[#1C2A39]">{label}</Link>
                  ))}
                </div>
              )}
              <nav className="sr-only" aria-label="Service Areas">
                {areaLinks.map(({ to, label }) => <Link key={to} to={to}>{label}</Link>)}
              </nav>
            </div>

            <Link to="/team" className={`hover:text-[#FFC107] transition-colors font-medium ${isActive('/team') ? 'text-[#FFC107]' : ''}`}>Team</Link>
            <Link to="/blog" className={`hover:text-[#FFC107] transition-colors font-medium ${isActive('/blog') || location.pathname.startsWith('/blog') ? 'text-[#FFC107]' : ''}`}>Blog</Link>
            <Link to="/contact" className={`hover:text-[#FFC107] transition-colors font-medium ${isActive('/contact') ? 'text-[#FFC107]' : ''}`}>Contact</Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            <a
              href="https://app.roofr.com/instant-estimator/47d3160b-430f-4eed-a68b-24d095152394/UltraRoofing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white text-[#1C2A39] px-4 xl:px-5 py-2 xl:py-2.5 rounded-full text-sm xl:text-base font-bold hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              <Calculator className="h-4 w-4 xl:h-5 xl:w-5 mr-1.5" />
              Quote
            </a>
            <a
              href="tel:8333567233"
              className="flex items-center bg-[#FFC107] text-[#1C2A39] px-4 xl:px-5 py-2 xl:py-2.5 rounded-full text-sm xl:text-base font-bold hover:bg-[#FFD54F] transition-colors whitespace-nowrap"
            >
              <Phone className="h-4 w-4 xl:h-5 xl:w-5 mr-1.5" />
              <span className="hidden xl:inline">(833) 356-7233</span>
              <span className="xl:hidden">Call Now</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 -mr-1 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="border-t border-white/20 bg-[#1C2A39]">
          <nav className="max-w-7xl mx-auto px-4 py-2">
            <Link to="/" onClick={close} className="flex items-center min-h-[48px] text-base font-medium border-b border-white/10 hover:text-[#FFC107] transition-colors text-white">Home</Link>
            <Link to="/about" onClick={close} className="flex items-center min-h-[48px] text-base font-medium border-b border-white/10 hover:text-[#FFC107] transition-colors text-white">About Us</Link>

            {/* Mobile Services */}
            <div className="border-b border-white/10">
              <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between w-full min-h-[48px] text-base font-medium hover:text-[#FFC107] transition-colors text-white">
                Services <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 pb-2 space-y-1">
                  <Link to="/services" onClick={close} className="block py-2 text-sm text-gray-300 hover:text-[#FFC107]">All Services</Link>
                  {serviceLinks.map(({ to, label }) => (
                    <Link key={to} to={to} onClick={close} className="block py-2 text-sm text-gray-300 hover:text-[#FFC107]">{label}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Areas */}
            <div className="border-b border-white/10">
              <button onClick={() => setAreasOpen(!areasOpen)} className="flex items-center justify-between w-full min-h-[48px] text-base font-medium hover:text-[#FFC107] transition-colors text-white">
                Areas We Serve <ChevronDown className={`h-4 w-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
              </button>
              {areasOpen && (
                <div className="pl-4 pb-2 space-y-1">
                  {areaLinks.map(({ to, label }) => (
                    <Link key={to} to={to} onClick={close} className="block py-2 text-sm text-gray-300 hover:text-[#FFC107]">{label}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/team" onClick={close} className="flex items-center min-h-[48px] text-base font-medium border-b border-white/10 hover:text-[#FFC107] transition-colors text-white">Team</Link>
            <Link to="/blog" onClick={close} className="flex items-center min-h-[48px] text-base font-medium border-b border-white/10 hover:text-[#FFC107] transition-colors text-white">Blog</Link>
            <Link to="/contact" onClick={close} className="flex items-center min-h-[48px] text-base font-medium border-b border-white/10 hover:text-[#FFC107] transition-colors text-white">Contact</Link>

            <div className="pt-4 pb-3 space-y-3">
              <a
                href="https://app.roofr.com/instant-estimator/47d3160b-430f-4eed-a68b-24d095152394/UltraRoofing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="flex items-center justify-center bg-white text-[#1C2A39] px-6 py-3 rounded-full font-bold w-full min-h-[48px] hover:bg-gray-100 transition-colors"
              >
                <Calculator className="h-5 w-5 mr-2" />
                Get Instant Quote
              </a>
              <a
                href="tel:8333567233"
                className="flex items-center justify-center bg-[#FFC107] text-[#1C2A39] px-6 py-3 rounded-full font-bold w-full min-h-[48px] hover:bg-[#FFD54F] transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                (833) 356-7233
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
