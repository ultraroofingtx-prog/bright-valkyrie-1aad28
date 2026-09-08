import { Phone, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#1C2A39] border-t-2 border-[#FFC107] shadow-2xl safe-area-pb">
      <div className="grid grid-cols-2 h-16">
        <a
          href="tel:8333567233"
          className="flex items-center justify-center gap-2 bg-[#FFC107] text-[#1C2A39] font-bold text-sm active:bg-[#FFD54F] transition-colors"
        >
          <Phone className="h-5 w-5 flex-shrink-0" />
          <span>(833) 356-7233</span>
        </a>
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 bg-[#1C2A39] text-white font-bold text-sm active:bg-[#2A3A49] transition-colors border-l border-white/20"
        >
          <Calculator className="h-5 w-5 flex-shrink-0" />
          <span>Free Inspection</span>
        </Link>
      </div>
    </div>
  );
}
