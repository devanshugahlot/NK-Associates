import React from 'react';
import { Building2, Laptop, UserCheck, ShieldCheck } from 'lucide-react';
import { gstConfig } from './gstConfig';

const iconMap = {
  'jaipur-ca': Building2,
  'online-process': Laptop,
  'dedicated-expert': UserCheck,
  'verified-timeline': ShieldCheck,
};

const TrustStrip = () => {
  const { claims, yearsExperience, clientsServed, googleRating } = gstConfig.trust;

  return (
    <section aria-label="Why Choose NK Associates" className="bg-white border-y border-slate-200/90 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* If optional numeric metrics are supplied in the future, display them here */}
        {(yearsExperience || clientsServed || googleRating) && (
          <div className="mb-8 grid grid-cols-2 md:grid-cols-3 gap-4 pb-6 border-b border-slate-100 text-center">
            {yearsExperience && (
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-brand-navy">{yearsExperience}+</p>
                <p className="text-xs text-slate-500 font-medium">Years CA Experience</p>
              </div>
            )}
            {clientsServed && (
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-brand-navy">{clientsServed}+</p>
                <p className="text-xs text-slate-500 font-medium">Businesses Advised</p>
              </div>
            )}
            {googleRating && (
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-brand-navy">{googleRating} ★</p>
                <p className="text-xs text-slate-500 font-medium">Verified Google Rating</p>
              </div>
            )}
          </div>
        )}

        {/* Real Fact-Based Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {claims.map((claim) => {
            const IconComponent = iconMap[claim.id] || ShieldCheck;
            return (
              <div key={claim.id} className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-brand-sky flex items-center justify-center shrink-0 border border-sky-100 shadow-xs">
                  <IconComponent className="w-5 h-5 text-brand-skyDark" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-navy leading-snug">
                    {claim.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {claim.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TrustStrip;
