import React, { useState } from 'react';
import { X, Filter, ShoppingBag, Plus, Eye } from 'lucide-react';
import { PRODUCTS } from '../data/catalog';
import { Product, RoomType } from '../types';

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoom: RoomType;
  onSelectRoom: (room: RoomType) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onAddToMoodboard: (product: Product) => void;
}

export const CatalogModal: React.FC<CatalogModalProps> = ({
  isOpen,
  onClose,
  selectedRoom,
  onSelectRoom,
  onSelectProduct,
  onAddToCart,
  onAddToMoodboard,
}) => {
  const [activeMaterialFilter, setActiveMaterialFilter] = useState<string>('All');

  if (!isOpen) return null;

  const roomOptions: RoomType[] = ['All', 'Living', 'Dining', 'Bedroom', 'Lighting', 'Decor'];
  const allMaterials = ['All', 'Italian Boucle', 'European Dark Oak', 'Washed French Linen', 'Travertine Stone', 'Brushed Brass'];

  const filteredProducts = PRODUCTS.filter((p) => {
    const roomMatches = selectedRoom === 'All' || p.room === selectedRoom;
    const materialMatches =
      activeMaterialFilter === 'All' || p.materials.some((m) => m.toLowerCase().includes(activeMaterialFilter.toLowerCase()));
    return roomMatches && materialMatches;
  });

  return (
    <div className="fixed inset-0 z-50 bg-[#171818]/70 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
      <div className="bg-[#faf9f6] w-full max-w-6xl max-h-[90vh] rounded-lg shadow-2xl flex flex-col overflow-hidden relative border border-[#e3e2e0]">
        {/* Modal Header */}
        <div className="p-6 md:p-8 border-b border-[#e3e2e0] flex justify-between items-center bg-[#faf9f6] sticky top-0 z-20">
          <div>
            <span className="font-label text-xs text-[#8d9687] tracking-[0.2em] block uppercase font-semibold">
              Ethereal Dwelling
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-medium text-[#171818]">
              The Full Catalog
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-[#c4c7c7] flex items-center justify-center text-[#171818] hover:bg-[#171818] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Navigation */}
        <div className="px-6 md:px-8 py-4 border-b border-[#e3e2e0] bg-[#f4f3f1] flex flex-wrap items-center justify-between gap-4">
          {/* Room Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase font-semibold text-[#5f5e5a] tracking-wider mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Room:
            </span>
            {roomOptions.map((room) => (
              <button
                key={room}
                onClick={() => onSelectRoom(room)}
                className={`text-xs px-4 py-2 rounded-full font-label tracking-wider font-semibold transition-all ${
                  selectedRoom === room
                    ? 'bg-[#171818] text-white shadow-sm'
                    : 'bg-[#faf9f6] text-[#5f5e5a] hover:bg-[#e4e2e1] hover:text-[#171818]'
                }`}
              >
                {room}
              </button>
            ))}
          </div>

          {/* Material Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-semibold text-[#5f5e5a] tracking-wider">
              Material:
            </span>
            <select
              value={activeMaterialFilter}
              onChange={(e) => setActiveMaterialFilter(e.target.value)}
              className="bg-[#faf9f6] border border-[#c4c7c7] text-xs font-body py-1.5 px-3 rounded text-[#171818] focus:outline-none"
            >
              {allMaterials.map((mat) => (
                <option key={mat} value={mat}>
                  {mat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="p-6 md:p-8 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#faf9f6] border border-[#e3e2e0] rounded overflow-hidden group flex flex-col justify-between hover:border-[#171818]/40 transition-all ambient-shadow"
            >
              <div>
                <div className="aspect-[4/3] bg-[#f4f3f1] overflow-hidden relative">
                  <img
                    src={product.imageUrl}
                    alt={product.altText}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-8 h-8 rounded-full bg-white/90 backdrop-blur text-[#171818] flex items-center justify-center shadow hover:bg-[#171818] hover:text-white transition-colors"
                      title="Quick View"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="absolute bottom-3 left-3 bg-[#171818]/80 text-white text-[10px] uppercase tracking-widest px-2.5 py-1 font-semibold rounded-sm backdrop-blur">
                    {product.room}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-xl font-medium text-[#171818] mb-1">
                    {product.name}
                  </h3>
                  <p className="font-body text-xs text-[#5f5e5a] mb-3 font-light">
                    {product.subtitle}
                  </p>
                  <p className="font-body text-sm font-semibold text-[#171818] mb-3">
                    ${product.price.toLocaleString()} USD
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.materials.map((mat, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 bg-[#efeeeb] text-[#474743] rounded"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0 flex gap-2">
                <button
                  onClick={() => onAddToCart(product)}
                  className="flex-1 bg-[#171818] text-white py-2.5 px-3 text-xs font-semibold tracking-wider uppercase hover:bg-[#2c2c2c] transition-colors flex items-center justify-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Save / Reserve
                </button>
                <button
                  onClick={() => onAddToMoodboard(product)}
                  className="bg-[#efeeeb] text-[#171818] p-2.5 hover:bg-[#171818] hover:text-white transition-colors rounded"
                  title="Add to Design Tool Moodboard"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
