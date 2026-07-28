import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roomType: 'Living Room',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#171818]/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#faf9f6] w-full max-w-lg rounded-lg shadow-2xl p-8 relative border border-[#e3e2e0]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#5f5e5a] hover:text-[#171818] p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-[#dce5d4] text-[#161e13] flex items-center justify-center mx-auto mb-4">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="font-display text-2xl font-medium text-[#171818] mb-2">
              Request Confirmed
            </h3>
            <p className="font-body text-xs text-[#5f5e5a] mb-6 leading-relaxed">
              Thank you, <span className="font-semibold text-[#171818]">{formData.name}</span>. Our Senior Architectural Director will contact you within 24 hours to coordinate your White Glove consultation.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-[#171818] text-white py-3 text-xs font-semibold tracking-wider uppercase"
            >
              Return to Dwelling
            </button>
          </div>
        ) : (
          <div>
            <span className="font-label text-xs text-[#8d9687] tracking-[0.2em] block uppercase font-semibold mb-1">
              TAWAQAL INTERIOR KARACHI
            </span>
            <h3 className="font-display text-2xl font-medium text-[#171818] mb-1">
              Book Home Interior Consultation
            </h3>
            <p className="font-body text-xs text-[#5f5e5a] mb-4 font-light">
              Get an instant quote for False Ceiling, Wall Moulding, Wood Work, Electrical, Paint or Tile fixing in Karachi.
            </p>

            <a
              href="https://wa.me/923052395052?text=Hello%20Tawaqal%20Interior!%20I%20want%20to%20book%20a%20site%20visit%20%2F%20estimate."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mb-5 bg-[#25D366] text-white py-3 px-4 text-xs font-bold tracking-wider uppercase rounded hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Instant Chat on WhatsApp (03052395052)</span>
            </a>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#171818] uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Marcus Thorne"
                  className="w-full bg-white border border-[#c4c7c7] text-xs p-3 rounded text-[#171818] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#171818] uppercase tracking-wider mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="marcus@example.com"
                    className="w-full bg-white border border-[#c4c7c7] text-xs p-3 rounded text-[#171818] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#171818] uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 019-2834"
                    className="w-full bg-white border border-[#c4c7c7] text-xs p-3 rounded text-[#171818] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#171818] uppercase tracking-wider mb-1">
                  Primary Focus Room
                </label>
                <select
                  value={formData.roomType}
                  onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                  className="w-full bg-white border border-[#c4c7c7] text-xs p-3 rounded text-[#171818] focus:outline-none"
                >
                  <option value="Living Room">Living Room Sanctuary</option>
                  <option value="Dining Room">Dining Hall & Ritual Room</option>
                  <option value="Bedroom">Master Bedroom Suite</option>
                  <option value="Full Residence">Full Residence Architecture</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#171818] uppercase tracking-wider mb-1">
                  Spatial Vision / Timeline
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share details regarding architectural layout, lighting, or specific timeline constraints..."
                  className="w-full bg-white border border-[#c4c7c7] text-xs p-3 rounded text-[#171818] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#171818] text-white py-3.5 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#2c2c2c] transition-colors"
              >
                Submit Consultation Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
