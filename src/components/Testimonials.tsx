import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/catalog';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-28 md:py-36 bg-[#faf9f6] overflow-hidden">
      <div className="px-6 md:px-16 max-w-[1440px] mx-auto">
        {/* Divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] flex-1 bg-[#c4c7c7]"></div>
          <span className="font-label text-xs text-[#5f5e5a] tracking-[0.2em] uppercase font-semibold">
            Expert Voices
          </span>
          <div className="h-[1px] flex-1 bg-[#c4c7c7]"></div>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 px-4 text-center">
                  <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl text-[#171818] mb-10 leading-relaxed text-balanced font-normal italic">
                    {item.quote}
                  </blockquote>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4 bg-[#efeeeb] border border-[#c4c7c7]/50 shadow-sm">
                      <img
                        src={item.avatarUrl}
                        alt={item.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <cite className="not-italic font-label text-xs tracking-[0.15em] font-semibold text-[#171818] uppercase">
                      {item.author}
                    </cite>
                    <span className="text-[#5f5e5a] text-[10px] tracking-[0.15em] uppercase mt-1 font-medium">
                      {item.role}, {item.company}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="w-12 h-12 border border-[#c4c7c7] flex items-center justify-center hover:bg-[#171818] hover:text-white transition-all duration-300 text-[#171818]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="w-12 h-12 border border-[#c4c7c7] flex items-center justify-center hover:bg-[#171818] hover:text-white transition-all duration-300 text-[#171818]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
