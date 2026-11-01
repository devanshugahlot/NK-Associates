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
    <section aria-label="Why Choose NK Associates" className="-mt-8 sm:-mt-10 lg:-mt-12 relative z-20 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8">
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

          {/* Real Fact-Based Trust Badges with clean dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:divide-x lg:divide-slate-100 lg:gap-0">
            {claims.map((claim, idx) => {
              const IconComponent = iconMap[claim.id] || ShieldCheck;
              return (
                <div key={claim.id} className={`flex items-start gap-3.5 ${idx > 0 ? 'lg:pl-6' : ''}`}>
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-brand-sky flex items-center justify-center shrink-0 border border-sky-100 shadow-xs">
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

      </div>
    </section>
  );
};

export default TrustStrip;
