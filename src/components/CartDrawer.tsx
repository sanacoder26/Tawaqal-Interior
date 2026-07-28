import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  if (!isOpen) return null;

  const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-[#171818]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#faf9f6] border-l border-[#e3e2e0] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#e3e2e0] flex justify-between items-center bg-[#faf9f6]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#171818]" />
              <h2 className="font-display text-xl font-medium text-[#171818]">
                Saved Curation ({items.reduce((a, b) => a + b.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-[#5f5e5a] hover:text-[#171818] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* List */}
          <div className="p-6 flex-1 overflow-y-auto space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-20 text-[#5f5e5a]">
                <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-[#747878] stroke-[1]" />
                <p className="font-display text-lg text-[#171818] font-medium mb-2">
                  Your Curation is Empty
                </p>
                <p className="font-body text-xs font-light max-w-xs mx-auto">
                  Browse our catalog to select pieces for your bespoke interior reservation.
                </p>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-4 pb-6 border-b border-[#e3e2e0] items-center"
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded bg-[#f4f3f1]"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-base font-medium text-[#171818] truncate">
                      {product.name}
                    </h4>
                    <p className="font-body text-xs text-[#5f5e5a] mb-1 font-light">
                      {product.subtitle}
                    </p>
                    <p className="font-body text-xs font-semibold text-[#171818]">
                      ${(product.price * quantity).toLocaleString()} USD
                    </p>

                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-[#c4c7c7] rounded bg-white">
                        <button
                          onClick={() => onUpdateQuantity(product.id, Math.max(1, quantity - 1))}
                          className="px-2 py-0.5 text-xs text-[#5f5e5a] hover:text-[#171818]"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-semibold text-[#171818]">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                          className="px-2 py-0.5 text-xs text-[#5f5e5a] hover:text-[#171818]"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(product.id)}
                        className="text-red-600 hover:text-red-800 transition-colors p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#e3e2e0] bg-[#f4f3f1]">
              <div className="flex justify-between items-center mb-4">
                <span className="font-label text-xs uppercase tracking-wider font-semibold text-[#5f5e5a]">
                  Estimated Investment
                </span>
                <span className="font-display text-2xl font-bold text-[#171818]">
                  ${total.toLocaleString()} USD
                </span>
              </div>
              <p className="text-[11px] text-[#5f5e5a] mb-6 font-light">
                Includes complimentary white-glove transport, insurance, and architectural placement.
              </p>
              <button
                onClick={() => {
                  onCheckout();
                  onClose();
                }}
                className="w-full bg-[#171818] text-white py-4 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#2c2c2c] transition-colors flex items-center justify-center gap-2"
              >
                <span>Reserve via Concierge</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
