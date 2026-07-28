import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Collections } from './components/Collections';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { InnerCircle } from './components/InnerCircle';
import { Footer } from './components/Footer';
import { CatalogModal } from './components/CatalogModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { DesignToolModal } from './components/DesignToolModal';
import { CartDrawer } from './components/CartDrawer';
import { SignInModal } from './components/SignInModal';
import { ConsultationModal } from './components/ConsultationModal';
import { AboutModal } from './components/AboutModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CartItem, MoodboardItem, Product, RoomType } from './types';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'catalog' | 'designtool' | 'about'>('home');
  const [selectedRoom, setSelectedRoom] = useState<RoomType>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Modals state
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isDesignToolOpen, setIsDesignToolOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart & Moodboard state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [moodboardItems, setMoodboardItems] = useState<MoodboardItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveCartItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleAddToMoodboard = (product: Product) => {
    const newItem: MoodboardItem = {
      id: `${product.id}-${Date.now()}`,
      product,
      x: 100 + Math.random() * 100,
      y: 100 + Math.random() * 80,
      scale: 1,
      rotation: 0,
    };
    setMoodboardItems((prev) => [...prev, newItem]);
    setIsDesignToolOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#171818] font-body selection:bg-[#dce5d4] selection:text-[#161e13]">
      {/* Top Navbar */}
      <Navbar
        onOpenCatalog={() => {
          setIsCatalogOpen(true);
          setActiveView('catalog');
        }}
        onOpenDesignTool={() => {
          setIsDesignToolOpen(true);
          setActiveView('designtool');
        }}
        onOpenAbout={() => {
          setIsAboutOpen(true);
          setActiveView('about');
        }}
        onOpenSignIn={() => setIsSignInOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        cartItemsCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        activeView={activeView}
      />

      {/* Main Page Layout */}
      <main>
        <Hero
          onExplore={() => {
            setSelectedRoom('All');
            setIsCatalogOpen(true);
          }}
          onViewProjects={() => setIsDesignToolOpen(true)}
        />

        <Collections
          onSelectRoom={(room) => {
            setSelectedRoom(room);
            setIsCatalogOpen(true);
          }}
          onOpenCatalog={() => {
            setSelectedRoom('All');
            setIsCatalogOpen(true);
          }}
        />

        <Process onOpenConsultation={() => setIsConsultationOpen(true)} />

        <Testimonials />

        <InnerCircle />
      </main>

      {/* Footer */}
      <Footer
        onOpenCatalog={() => {
          setSelectedRoom('All');
          setIsCatalogOpen(true);
        }}
        onOpenDesignTool={() => setIsDesignToolOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Modals & Overlays */}
      <CatalogModal
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
        selectedRoom={selectedRoom}
        onSelectRoom={setSelectedRoom}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
        onAddToCart={handleAddToCart}
        onAddToMoodboard={handleAddToMoodboard}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onAddToMoodboard={handleAddToMoodboard}
      />

      <DesignToolModal
        isOpen={isDesignToolOpen}
        onClose={() => setIsDesignToolOpen(false)}
        moodboardItems={moodboardItems}
        setMoodboardItems={setMoodboardItems}
        onOpenConsultation={() => {
          setIsDesignToolOpen(false);
          setIsConsultationOpen(true);
        }}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={() => setIsConsultationOpen(true)}
      />

      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
}
