import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const InnerCircle: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#2c2c2c] text-white">
      <div className="px-6 md:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <span className="font-label text-xs tracking-[0.2em] text-[#8d9687] uppercase font-semibold block mb-2">
              STAY CONNECTED WITH US
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-6 text-white leading-tight">
              Get Free Estimate in Karachi
            </h2>
            <p className="font-body text-base text-[#949393] mb-8 leading-relaxed font-light">
              Enter your phone or WhatsApp number to receive latest design catalogs, rate lists, and special discounts on home renovation services.
            </p>

            {subscribed ? (
              <div className="p-6 bg-[#faf9f6]/10 border border-[#c4c7c7]/20 rounded flex items-center gap-4 text-white">
                <div className="w-8 h-8 rounded-full bg-[#dce5d4] text-[#161e13] flex items-center justify-center font-bold">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Thank you!</p>
                  <p className="text-xs text-[#949393]">We will contact you shortly on WhatsApp (03052395052).</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Mobile / WhatsApp No."
                  className="flex-1 bg-transparent border-b border-[#747878] text-white focus:border-white focus:outline-none transition-colors py-4 px-2 font-body text-sm"
                />
                <button
                  type="submit"
                  className="bg-[#faf9f6] text-[#171818] px-10 py-4 font-label text-xs tracking-[0.15em] font-semibold uppercase hover:bg-[#e4e2e1] transition-colors"
                >
                  GET QUOTE
                </button>
              </form>
            )}
          </div>

          <div
            className="aspect-square bg-cover bg-center rounded-lg shadow-2xl border border-white/10"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLalN3QzLHikH5XzRewzPH9RXmj6kECHdLlMt1Xbk8FORSCb9fWV7-HdVUvJg-Zbknig0vec6eXr34AkkeS61ARTAaSgkIMg1oU0FOw2Y1tnAUyeNbzZMM06SslQV6MycEJnfyKgQ4_cDWarVm5tXxVzXfLV-Gb0M-4WYR5yiWfaKWc8CRXTjGgzc_0E4uyvLLWHnBlnXH_lkNQgO5c6fB2WPyghEsk7PGbniU_Z3aW8JvT-Nu0fm03w')`,
            }}
          />
        </div>
      </div>
    </section>
  );
};
