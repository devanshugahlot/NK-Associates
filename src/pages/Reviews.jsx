import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, Quote, CheckCircle2 } from 'lucide-react';
import { reviewsData, reviewStats } from '../data/reviews';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import PageTransition from '../components/PageTransition';

// Helper component to render stars
const StarRating = ({ rating, size = 16 }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          className={`${
            i < rating
              ? 'fill-amber-400 text-amber-400'
              : 'text-slate-200 fill-slate-200'
          }`}
        />
      ))}
    </div>
  );
};

const Reviews = () => {
  return (
    <PageTransition>
      {/* Reviews Hero */}
      <section className="bg-brand-navy text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-brand-sky/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-800 text-brand-sky text-xs font-semibold uppercase tracking-wider border border-slate-700/60">
            Client Testimonials
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            What Our Clients Say
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            NK Associates is proud to help businesses and individuals stay compliant. Read verified reviews about our GST, TDS, and tax consultation services.
          </p>
        </div>
      </section>

      {/* Trust Statistics Summary Header */}
      <section className="py-12 bg-slate-50 border-b border-slate-100 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="text-5xl font-extrabold text-brand-navy">
                  {reviewStats.averageRating}
                </span>
                <div className="space-y-1">
                  <StarRating rating={5} size={20} />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-gray block">
                    {reviewStats.totalReviews} Verified Client Reviews
                  </span>
                </div>
              </div>
              <p className="text-sm text-brand-charcoal">
                Based on client feedback for GST filings, Income Tax return preparation, and corporate accounting consultation.
              </p>
            </div>
            
            <div className="flex items-center gap-3 bg-brand-light px-5 py-3 rounded-2xl border border-sky-100 shrink-0">
              <CheckCircle2 className="w-6 h-6 text-brand-sky shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-brand-navy">100% Verified Reviews</span>
                <span className="text-xs text-brand-skyDark font-medium">NK Associates Client Register</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviewsData.map((review) => (
              <div
                key={review.id}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left relative"
              >
                {/* Quote Decorative Icon */}
                <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-100 pointer-events-none" />

                <div className="space-y-4">
                  {/* Rating & Tag */}
                  <div className="flex items-center justify-between">
                    <StarRating rating={review.rating} />
                    <span className="text-[10px] font-bold uppercase px-2.5 py-1 bg-slate-50 border border-slate-100 rounded text-brand-gray">
                      {review.tag}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-brand-charcoal text-sm leading-relaxed relative z-10 italic">
                    "{review.text}"
                  </p>
                </div>

                {/* Reviewer Bio */}
                <div className="flex items-center gap-4 border-t border-slate-50 pt-5 mt-6">
                  {/* Initials Badge */}
                  <div className="w-11 h-11 rounded-full bg-brand-light text-brand-skyDark font-bold flex items-center justify-center text-sm shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-brand-navy text-sm md:text-base">
                      {review.name}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                      <span>{review.role}</span>
                      <span>•</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-brand-charcoal text-sm mb-6 max-w-lg mx-auto">
              Are you a client of NK Associates? Leave us your feedback or contact our Sanganer office for tax queries.
            </p>
            <Button to="/contact" variant="primary">
              Book a Tax Consultation
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Reviews;
