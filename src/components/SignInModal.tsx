import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  if (!isOpen) return null;

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSignedIn(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#171818]/70 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#faf9f6] w-full max-w-md rounded-lg shadow-2xl p-8 relative border border-[#e3e2e0]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#5f5e5a] hover:text-[#171818] p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {signedIn ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-[#dce5d4] text-[#161e13] flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-medium text-[#171818] mb-2">
              Welcome Back
            </h3>
            <p className="font-body text-xs text-[#5f5e5a] mb-6">
              You are signed in as <span className="font-semibold text-[#171818]">{email}</span>. Your private collection access is active.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-[#171818] text-white py-3 text-xs font-semibold tracking-wider uppercase"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <span className="font-label text-xs text-[#8d9687] tracking-[0.2em] block uppercase font-semibold mb-1">
              Private Client Portal
            </span>
            <h3 className="font-display text-2xl font-medium text-[#171818] mb-3">
              Member Sign In
            </h3>
            <p className="font-body text-xs text-[#5f5e5a] mb-6 font-light">
              Enter your registered email to access reserved collection drops and trade pricing.
            </p>

            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#171818] uppercase tracking-wider mb-2">
                  Client Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="marcus@studioaura.com"
                  className="w-full bg-white border border-[#c4c7c7] text-xs p-3 rounded text-[#171818] focus:outline-none font-body"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#171818] text-white py-3.5 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#2c2c2c] transition-colors"
              >
                Access Concierge Services
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
