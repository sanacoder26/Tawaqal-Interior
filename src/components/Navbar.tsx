import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, X } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  onOpenCatalog: () => void;
  onOpenDesignTool: () => void;
  onOpenAbout: () => void;
  onOpenSignIn: () => void;
  onOpenCart: () => void;
  onOpenConsultation: () => void;
  cartItemsCount: number;
  activeView: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCatalog,
  onOpenDesignTool,
  onOpenAbout,
  onOpenSignIn,
  onOpenCart,
  onOpenConsultation,
  cartItemsCount,
  activeView,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 bg-[#faf9f6] transition-all duration-500 ease-in-out ${
          isScrolled ? 'h-16 shadow-sm border-b border-[#e3e2e0]' : 'h-20 border-b border-transparent'
        }`}
      >
        <div className="flex justify-between items-center w-full px-6 md:px-16 max-w-[1440px] mx-auto h-full">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col text-left hover:opacity-80 transition-opacity"
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tighter text-[#171818] uppercase">
              TAWAQAL INTERIOR
            </span>
            <span className="text-[10px] font-label font-semibold tracking-widest text-[#5f5e5a] uppercase -mt-1">
              Karachi • 03052395052
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            <button
              onClick={onOpenCatalog}
              className={`font-label text-xs tracking-[0.1em] font-semibold uppercase pb-1 transition-all ${
                activeView === 'catalog'
                  ? 'text-[#171818] border-b-2 border-[#171818]'
                  : 'text-[#5f5e5a] hover:text-[#171818] border-b-2 border-transparent'
              }`}
            >
              Catalog
            </button>
            <button
              onClick={onOpenDesignTool}
              className={`font-label text-xs tracking-[0.1em] font-semibold uppercase pb-1 transition-all ${
                activeView === 'designtool'
                  ? 'text-[#171818] border-b-2 border-[#171818]'
                  : 'text-[#5f5e5a] hover:text-[#171818] border-b-2 border-transparent'
              }`}
            >
              Design Tool
            </button>
            <button
              onClick={onOpenAbout}
              className={`font-label text-xs tracking-[0.1em] font-semibold uppercase pb-1 transition-all ${
                activeView === 'about'
                  ? 'text-[#171818] border-b-2 border-[#171818]'
                  : 'text-[#5f5e5a] hover:text-[#171818] border-b-2 border-transparent'
              }`}
            >
              About
            </button>
            <button
              onClick={onOpenConsultation}
              className="font-label text-xs tracking-[0.1em] font-semibold uppercase text-[#5f5e5a] hover:text-[#171818] transition-colors"
            >
              White Glove
            </button>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
              className="text-[#5f5e5a] hover:text-[#171818] transition-colors p-1"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenCart}
              aria-label="Saved Moodboard"
              className="relative text-[#5f5e5a] hover:text-[#171818] transition-colors p-1"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#171818] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenSignIn}
              className="font-label text-xs tracking-[0.1em] font-semibold uppercase px-5 py-2.5 bg-[#171818] text-white hover:bg-[#2c2c2c] transition-all flex items-center gap-2"
            >
              <User className="w-3.5 h-3.5 hidden sm:inline" />
              <span>Sign In</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Search Bar Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-[#171818]/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4">
          <div className="bg-[#faf9f6] w-full max-w-2xl p-8 rounded-lg shadow-2xl relative">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-6 right-6 text-[#5f5e5a] hover:text-[#171818]"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="font-display text-xl font-medium mb-4 text-[#171818]">
              Search Collection
            </h3>
            <div className="relative">
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search False Ceiling, Wall Moulding, Wood Work, Paint..."
                className="w-full bg-transparent border-b-2 border-[#171818] py-3 pr-10 text-lg font-body text-[#171818] focus:outline-none"
              />
              <Search className="absolute right-2 top-3.5 w-6 h-6 text-[#5f5e5a]" />
            </div>
            <div className="mt-6">
              <span className="text-xs uppercase font-semibold text-[#5f5e5a] tracking-wider block mb-2">
                Our Services in Karachi
              </span>
              <div className="flex flex-wrap gap-2">
                {['False Ceiling', 'Wall Moulding', 'Electrical Work', 'Wood Work', 'Paint Finishing', 'Tile Fixing', 'Complete Renovation'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSearchQuery(tag);
                      onOpenCatalog();
                      setIsSearchOpen(false);
                    }}
                    className="text-xs px-3 py-1.5 bg-[#efeeeb] hover:bg-[#171818] hover:text-white transition-colors rounded-full"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
