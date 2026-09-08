import { Link } from 'react-router-dom';
import { Home, Wrench, Phone } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | Ultra Roofing"
        description="The page you're looking for doesn't exist. Contact Ultra Roofing for roofing services in Dallas-Fort Worth."
      />
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-lg">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FFC107]/10 rounded-full mb-6">
            <span className="text-5xl font-bold text-[#FFC107]">404</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2A39] mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Sorry, the page you're looking for doesn't exist or has been moved. Let us help you find what you need.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 bg-[#FFC107] text-[#1C2A39] px-6 py-3 rounded-full font-bold hover:bg-[#FFD54F] transition-colors min-h-[48px]"
            >
              <Home className="h-5 w-5" />
              Back to Home
            </Link>
            <Link
              to="/services"
              className="flex items-center gap-2 bg-[#1C2A39] text-white px-6 py-3 rounded-full font-bold hover:bg-[#2a3d54] transition-colors min-h-[48px]"
            >
              <Wrench className="h-5 w-5" />
              Our Services
            </Link>
            <a
              href="tel:8333567233"
              className="flex items-center gap-2 border-2 border-[#1C2A39] text-[#1C2A39] px-6 py-3 rounded-full font-bold hover:bg-[#1C2A39] hover:text-white transition-colors min-h-[48px]"
            >
              <Phone className="h-5 w-5" />
              (833) 356-7233
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
