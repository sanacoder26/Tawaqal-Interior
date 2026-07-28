import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = '923052395052'; // formatted for international WhatsApp wa.me link
  const defaultMessage = encodeURIComponent(
    'Hello Tawaqal Interior! I am interested in your Home Interior & Renovation services in Karachi.'
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 group"
      aria-label="Chat on WhatsApp with Tawaqal Interior"
    >
      <MessageCircle className="w-6 h-6 fill-white stroke-none group-hover:rotate-12 transition-transform" />
      <span className="font-label text-xs tracking-wider uppercase font-bold hidden sm:inline">
        WhatsApp Us
      </span>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
    </a>
  );
};
