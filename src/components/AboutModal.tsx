import React from 'react';
import { X, Feather, Shield, Compass } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#171818]/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#faf9f6] w-full max-w-4xl rounded-lg shadow-2xl p-8 md:p-12 relative border border-[#e3e2e0] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#5f5e5a] hover:text-[#171818] p-1"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="font-label text-xs text-[#8d9687] tracking-[0.2em] block uppercase font-semibold mb-2">
            TAWAQAL INTERIOR KARACHI
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-[#171818] mb-4">
            Karachi's Trusted Home Interior & Renovation Specialists
          </h2>
          <p className="font-body text-sm md:text-base text-[#5f5e5a] font-light leading-relaxed">
            Tawaqal Interior is a premier home interior team in Karachi delivering end-to-end renovation services. We bring master craftsmanship to False Ceiling, Wall Moulding, Electrical Work, Custom Wood Work, Paint Finishing, Tile Fixing, and Complete Home Renovations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 text-center">
          <div className="p-6 bg-[#f4f3f1] rounded border border-[#e3e2e0]">
            <Feather className="w-8 h-8 text-[#171818] mx-auto mb-4 stroke-[1.2]" />
            <h4 className="font-display text-lg font-medium text-[#171818] mb-2">
              False Ceiling & Moulding
            </h4>
            <p className="font-body text-xs text-[#5f5e5a] font-light leading-relaxed">
              Modern Gypsum ceilings, ambient cove LED lighting, French wall moulding, and accent wainscoting.
            </p>
          </div>

          <div className="p-6 bg-[#f4f3f1] rounded border border-[#e3e2e0]">
            <Compass className="w-8 h-8 text-[#171818] mx-auto mb-4 stroke-[1.2]" />
            <h4 className="font-display text-lg font-medium text-[#171818] mb-2">
              Wood & Electrical Work
            </h4>
            <p className="font-body text-xs text-[#5f5e5a] font-light leading-relaxed">
              Bespoke acrylic kitchen cabinets, wardrobes, media TV walls, concealed copper wiring and spotlights.
            </p>
          </div>

          <div className="p-6 bg-[#f4f3f1] rounded border border-[#e3e2e0]">
            <Shield className="w-8 h-8 text-[#171818] mx-auto mb-4 stroke-[1.2]" />
            <h4 className="font-display text-lg font-medium text-[#171818] mb-2">
              Paint & Tile Finishing
            </h4>
            <p className="font-body text-xs text-[#5f5e5a] font-light leading-relaxed">
              Flawless wall putty, velvet paint finishes, porcelain tile fixing with zero-gap laser precision.
            </p>
          </div>
        </div>

        <div className="text-center pt-6 border-t border-[#e3e2e0] flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/923052395052?text=Hello%20Tawaqal%20Interior!%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2"
          >
            <span>WhatsApp Us: 03052395052</span>
          </a>
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="bg-[#171818] text-white px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#2c2c2c] transition-colors"
          >
            Get On-Site Estimate
          </button>
        </div>
      </div>
    </div>
  );
};
