import React from 'react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenCatalog: () => void;
  onOpenDesignTool: () => void;
  onOpenAbout: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCatalog,
  onOpenDesignTool,
  onOpenAbout,
  onOpenConsultation,
}) => {
  return (
    <footer className="bg-[#f4f3f1] border-t border-[#c4c7c7] py-20 md:py-28 text-[#171818]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-16 max-w-[1440px] mx-auto">
        <div>
          <div className="font-display text-2xl font-bold tracking-tighter text-[#171818] mb-2 uppercase">
            TAWAQAL INTERIOR
          </div>
          <p className="font-label text-xs tracking-widest font-semibold text-[#8d9687] uppercase mb-4">
            Home Interior Karachi
          </p>
          <p className="font-body text-sm text-[#5f5e5a] font-light mb-6 max-w-xs leading-relaxed">
            Your premier destination for False Ceiling, Wall Moulding, Electrical Work, Custom Wood Work, Paint Finishing, Tile Fixing & Complete Home Interior & Renovation.
          </p>

          <div className="space-y-3 text-sm text-[#171818]">
            <a
              href="https://wa.me/923052395052?text=Hello%20Tawaqal%20Interior!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#25D366] font-bold hover:underline"
            >
              <MessageCircle className="w-5 h-5 fill-[#25D366]" />
              <span>WhatsApp: 03052395052</span>
            </a>
            <div className="flex items-center gap-2 text-[#5f5e5a]">
              <Phone className="w-4 h-4 text-[#171818]" />
              <span>03052395052</span>
            </div>
            <div className="flex items-center gap-2 text-[#5f5e5a]">
              <MapPin className="w-4 h-4 text-[#171818]" />
              <span>Karachi, Pakistan</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h5 className="font-label text-xs font-semibold text-[#171818] mb-6 uppercase tracking-widest">
              Our Services
            </h5>
            <ul className="space-y-2 font-body text-xs text-[#5f5e5a]">
              <li>False Ceiling</li>
              <li>Wall Moulding</li>
              <li>Electrical Work</li>
              <li>Wood Work</li>
              <li>Paint Finishing</li>
              <li>Tile Fixing</li>
              <li>Complete Renovation</li>
            </ul>
          </div>
          <div>
            <h5 className="font-label text-xs font-semibold text-[#171818] mb-6 uppercase tracking-widest">
              Navigation
            </h5>
            <ul className="space-y-3 font-body text-sm">
              <li>
                <button onClick={onOpenCatalog} className="text-[#5f5e5a] hover:text-[#171818] transition-colors underline">
                  All Services
                </button>
              </li>
              <li>
                <button onClick={onOpenDesignTool} className="text-[#5f5e5a] hover:text-[#171818] transition-colors underline">
                  2D Studio Tool
                </button>
              </li>
              <li>
                <button onClick={onOpenAbout} className="text-[#5f5e5a] hover:text-[#171818] transition-colors underline">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="text-[#5f5e5a] hover:text-[#171818] transition-colors underline">
                  Book Estimate
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:items-end justify-between">
          <div className="text-left md:text-right">
            <h5 className="font-label text-xs font-semibold text-[#171818] mb-6 uppercase tracking-widest">
              Get In Touch
            </h5>
            <a
              href="https://wa.me/923052395052"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#171818] text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-[#2c2c2c] transition-all"
            >
              Direct Consultation
            </a>
          </div>
          <div className="font-label text-[10px] text-[#5f5e5a] opacity-70 mt-12 md:mt-0 tracking-widest uppercase">
            © 2024 TAWAQAL INTERIOR KARACHI. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};
