import React from 'react';
import { X, ShoppingBag, Plus, ShieldCheck, Truck } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onAddToMoodboard: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onAddToMoodboard,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#171818]/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#faf9f6] w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden relative border border-[#e3e2e0] grid grid-cols-1 md:grid-cols-2">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur border border-[#c4c7c7] flex items-center justify-center text-[#171818] hover:bg-[#171818] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image */}
        <div className="bg-[#f4f3f1] relative min-h-[300px] md:min-h-[450px]">
          <img
            src={product.imageUrl}
            alt={product.altText}
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-4 left-4 bg-[#171818] text-white text-xs uppercase font-semibold px-3 py-1 tracking-widest">
            {product.room} Collection
          </span>
        </div>

        {/* Product Details */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <span className="font-label text-xs text-[#8d9687] tracking-[0.2em] uppercase font-semibold block mb-1">
              Bespoke Piece
            </span>
            <h2 className="font-display text-3xl font-medium text-[#171818] mb-2">
              {product.name}
            </h2>
            <p className="font-body text-sm text-[#5f5e5a] mb-4 font-light">
              {product.subtitle}
            </p>
            <p className="font-display text-2xl font-semibold text-[#171818] mb-6">
              ${product.price.toLocaleString()} USD
            </p>

            <p className="font-body text-sm text-[#5f5e5a] font-light leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Spec Table */}
            <div className="space-y-3 border-t border-b border-[#e3e2e0] py-4 mb-6">
              <div className="flex justify-between text-xs">
                <span className="text-[#5f5e5a] font-semibold uppercase">Dimensions:</span>
                <span className="text-[#171818] font-medium">{product.dimensions}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#5f5e5a] font-semibold uppercase">Materials:</span>
                <span className="text-[#171818] font-medium">{product.materials.join(', ')}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#5f5e5a] font-semibold uppercase">Availability:</span>
                <span className="text-[#8d9687] font-semibold">
                  {product.inStock ? 'In Stock — Ready for White Glove Dispatch' : 'Bespoke Made to Order'}
                </span>
              </div>
            </div>

            {/* Guarantee Pills */}
            <div className="flex gap-4 mb-8 text-[11px] text-[#5f5e5a]">
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#171818]" />
                <span>Complimentary Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#171818]" />
                <span>10-Year Craft Guarantee</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="w-full bg-[#171818] text-white py-4 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#2c2c2c] transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Save to Moodboard / Inquire
            </button>
            <button
              onClick={() => {
                onAddToMoodboard(product);
                onClose();
              }}
              className="w-full bg-[#efeeeb] text-[#171818] py-3 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#e4e2e1] transition-colors flex items-center justify-center gap-2 border border-[#c4c7c7]"
            >
              <Plus className="w-4 h-4" />
              Place in 2D Design Studio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
