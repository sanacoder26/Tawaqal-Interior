import React from 'react';
import { COLLECTIONS } from '../data/catalog';
import { RoomType } from '../types';

interface CollectionsProps {
  onSelectRoom: (room: RoomType) => void;
  onOpenCatalog: () => void;
}

export const Collections: React.FC<CollectionsProps> = ({ onSelectRoom, onOpenCatalog }) => {
  return (
    <section className="py-24 md:py-32 bg-[#faf9f6]">
      <div className="px-6 md:px-16 max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-label text-xs text-[#8d9687] tracking-[0.2em] mb-3 block uppercase font-semibold">
              Specialized Services
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-[#171818]">
              Home Interior Karachi Solutions
            </h2>
          </div>
          <button
            onClick={onOpenCatalog}
            className="font-label text-xs tracking-[0.1em] font-semibold text-[#171818] border-b border-[#171818]/30 pb-1 hover:border-[#171818] transition-all uppercase"
          >
            EXPLORE ALL SERVICES & RATES
          </button>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {COLLECTIONS.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                onSelectRoom(item.name as RoomType);
                onOpenCatalog();
              }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/5] bg-[#f4f3f1] mb-6 overflow-hidden relative rounded-sm">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.imageUrl}')` }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#faf9f6]/90 backdrop-blur px-3 py-1 font-label text-[10px] tracking-widest font-semibold uppercase text-[#171818]">
                    {item.number}
                  </span>
                </div>
              </div>
              <h3 className="font-display text-2xl font-medium text-[#171818] mb-2 group-hover:text-[#5f5e5a] transition-colors">
                {item.name}
              </h3>
              <p className="font-body text-sm text-[#5f5e5a] font-light leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
