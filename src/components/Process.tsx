import React from 'react';
import { Compass, Palette, Box } from 'lucide-react';

interface ProcessProps {
  onOpenConsultation: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-28 md:py-36 bg-[#f4f3f1] relative overflow-hidden border-y border-[#e3e2e0]">
      <div className="px-6 md:px-16 max-w-[1440px] mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-label text-xs text-[#8d9687] tracking-[0.2em] mb-3 block uppercase font-semibold">
            How We Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-[#171818] mb-4">
            Our Renovation Process in Karachi
          </h2>
          <p className="font-body text-base text-[#5f5e5a] font-light">
            A transparent 3-step home transformation process from site measurement to flawless project handover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Step 1 */}
          <div className="relative flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-[#faf9f6] rounded-full flex items-center justify-center mb-8 ambient-shadow transition-transform group-hover:scale-110 duration-500 text-[#171818]">
              <Compass className="w-8 h-8 stroke-[1.2]" />
            </div>
            <h4 className="font-display text-xl font-medium mb-3 text-[#171818]">
              1. Site Visit & Estimate
            </h4>
            <p className="font-body text-sm text-[#5f5e5a] font-light leading-relaxed max-w-xs">
              We inspect your space in Karachi, take exact measurements, and provide a clear quotation for ceilings, moulding, or full interior.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-[#faf9f6] rounded-full flex items-center justify-center mb-8 ambient-shadow transition-transform group-hover:scale-110 duration-500 text-[#171818]">
              <Palette className="w-8 h-8 stroke-[1.2]" />
            </div>
            <h4 className="font-display text-xl font-medium mb-3 text-[#171818]">
              2. Design & Material Choice
            </h4>
            <p className="font-body text-sm text-[#5f5e5a] font-light leading-relaxed max-w-xs">
              Select ceiling designs, wood finishes, paint shades, tile patterns, and lighting layout tailored to your budget.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-[#faf9f6] rounded-full flex items-center justify-center mb-8 ambient-shadow transition-transform group-hover:scale-110 duration-500 text-[#171818]">
              <Box className="w-8 h-8 stroke-[1.2]" />
            </div>
            <h4 className="font-display text-xl font-medium mb-3 text-[#171818]">
              3. Expert Execution
            </h4>
            <p className="font-body text-sm text-[#5f5e5a] font-light leading-relaxed max-w-xs">
              Our experienced craftsmen complete electrical wiring, gypsum ceiling, wood work, tile fixing, and final paint finishing.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-block bg-[#171818] text-white px-10 py-4 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#2c2c2c] transition-all"
          >
            BOOK FREE SITE ESTIMATE
          </button>
        </div>
      </div>
    </section>
  );
};
