import React from 'react';

interface HeroProps {
  onExplore: () => void;
  onViewProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onViewProjects }) => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 overflow-hidden bg-[#faf9f6]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-[4000ms] hover:scale-105"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqmUZ_dvxtIaCXr1XkO6FoBH3O8ZM9RVfppbxbBK6l8AyzMryVxliHI7VIlIA9EOOm9r3Tbdb2SeDVv6CmsNuTttppOFU_rLlgxX5I4ob9onRoNSHnco-pjaCc2Agh_yrnaZPjZ9QhKUiEBLU6R95K63Vh8V5yPjHFYc7_d-pgSTvIXTr9MC72yDqzB_0gIrdqCcHNcFhEEKf3bO4aiqTAAwkXH68HfuY-QQnMKx5AKmep1OfsB87kAQ')`,
          }}
        />
        <div className="absolute inset-0 bg-[#faf9f6]/20 backdrop-blur-[1px]"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full px-6 md:px-16 max-w-[1440px] mx-auto py-12">
        <div className="max-w-2xl bg-[#faf9f6]/90 backdrop-blur-md p-8 md:p-12 rounded-lg border border-white/60 shadow-sm">
          <span className="font-label text-xs tracking-[0.2em] font-semibold text-[#8d9687] uppercase block mb-3">
            TAWAQAL INTERIOR • HOME INTERIOR KARACHI
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] text-[#171818] mb-4 text-balanced">
            Complete Home Interior & Renovation Services
          </h1>
          <p className="font-body text-sm md:text-base font-light text-[#5f5e5a] mb-6 max-w-lg leading-relaxed">
            We specialize in False Ceiling, Wall Moulding, Electrical Work, Custom Wood Work, Paint Finishing, and Tile Fixing across Karachi.
          </p>

          {/* Quick Services Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              'False Ceiling',
              'Wall Moulding',
              'Electrical Work',
              'Wood Work',
              'Paint Finishing',
              'Tile Fixing',
            ].map((svc) => (
              <span
                key={svc}
                className="text-[11px] font-semibold font-label px-3 py-1 bg-[#171818] text-white rounded-full uppercase tracking-wider"
              >
                {svc}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/923052395052?text=Hello%20Tawaqal%20Interior!%20I%20want%20to%20get%20a%20quote%20for%20home%20renovation%20in%20Karachi."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 text-xs font-bold tracking-[0.1em] uppercase hover:bg-[#20bd5a] transition-all shadow-md text-center flex items-center justify-center gap-2"
            >
              <span>WHATSAPP: 03052395052</span>
            </a>
            <button
              onClick={onExplore}
              className="border border-[#171818] text-[#171818] px-8 py-4 text-xs font-semibold tracking-[0.1em] uppercase hover:bg-[#171818] hover:text-white transition-colors text-center"
            >
              EXPLORE OUR SERVICES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
