import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, Building2, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { galleryItems } from '../data/gallery';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

const Gallery = () => {
  const [activeImageIdx, setActiveImageIdx] = useState(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleNext = useCallback(() => {
    setActiveImageIdx((prevIdx) => (prevIdx === null ? 0 : (prevIdx + 1) % galleryItems.length));
  }, []);

  const handlePrev = useCallback(() => {
    setActiveImageIdx((prevIdx) => (prevIdx === null ? 0 : (prevIdx - 1 + galleryItems.length) % galleryItems.length));
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIdx === null) return;
      if (e.key === 'Escape') setActiveImageIdx(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIdx, handleNext, handlePrev]);

  // Lock body scroll when Lightbox is open
  useEffect(() => {
    if (activeImageIdx !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeImageIdx]);

  // Touch handlers for mobile swipe navigation
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      // Swiped Left -> Next
      handleNext();
    } else if (diff < -50) {
      // Swiped Right -> Prev
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <PageTransition>
      <SEO
        title="Office & Workplace Gallery | NK Associates Chartered Accountants Jaipur"
        description="Explore the modern workspace, meeting rooms, and collaborative environment of NK Associates Chartered Accountants in Jaipur. Featuring 15 authentic office views."
        keywords="NK Associates office, CA office photos Jaipur, NK Associates workplace gallery, CA firm Jaipur office, chartered accountant jaipur office"
        canonicalPath="/gallery"
      />

      {/* Hero Header */}
      <section className="bg-brand-navy text-white py-14 lg:py-20 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute -right-16 -top-16 w-96 h-96 bg-brand-sky/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-brand-navyLight/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/90 text-brand-sky text-xs font-semibold uppercase tracking-wider border border-slate-700/70 shadow-sm"
          >
            <Building2 className="w-3.5 h-3.5 text-brand-sky" />
            <span>Workplace & Infrastructure</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            NK Associates Office & Workplace Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            A visual showcase of our professional office premises in Jaipur — featuring high-speed digital infrastructure, collaborative workstations, and client consultation suites.
          </motion.p>
        </div>
      </section>

      {/* Gallery Showcase Section */}
      <section className="py-12 lg:py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Status Header Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
              <p className="text-xs sm:text-sm font-bold text-brand-navy tracking-wide uppercase">
                Official Workplace Gallery • <span className="text-brand-sky">{galleryItems.length} Photos</span>
              </p>
            </div>

            <p className="text-xs text-slate-500 font-medium">
              Click any image to view in high definition lightbox
            </p>
          </div>

          {/* Uniform Responsive Grid Layout - Consistent Heights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: (idx % 3) * 0.06 }}
                onClick={() => setActiveImageIdx(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Container with Uniform Height Across All Cards */}
                <div className="h-56 sm:h-60 md:h-64 w-full relative overflow-hidden bg-slate-900 shrink-0">
                  <img
                    src={item.image}
                    alt={`${item.title} - NK Associates Chartered Accountants Jaipur`}
                    onError={(e) => {
                      if (e.currentTarget.src.endsWith('.jpeg')) {
                        e.currentTarget.src = item.image.replace('.jpeg', '.jpg');
                      }
                    }}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Photo Index Tag */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[11px] font-bold text-white tracking-wider border border-white/10 shadow-sm">
                    #{String(item.id).padStart(2, '0')}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/95 rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-5 h-5 text-brand-navy" />
                    </div>
                  </div>
                </div>

                {/* Card Caption */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-white border-t border-slate-100">
                  <div>
                    <h3 className="font-bold text-brand-navy text-base group-hover:text-brand-sky transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1.5 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-brand-sky">
                    <span>View Fullscreen</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div className="mt-16 bg-gradient-to-r from-brand-navy to-slate-900 rounded-3xl p-8 sm:p-10 text-white text-center sm:text-left relative overflow-hidden shadow-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-sky">
                <Sparkles className="w-3.5 h-3.5" /> Visit Us In Person
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Plan a Visit to Our Jaipur Head Office
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Experience our professional environment firsthand. Schedule an in-person or virtual consultation with our Chartered Accountants today.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-sky hover:bg-brand-skyDark text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 shrink-0"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeImageIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 select-none"
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveImageIdx(null);
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between text-white z-50 px-2 sm:px-4 py-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-sky bg-white/10 px-3 py-1 rounded-full border border-white/10">
                  {activeImageIdx + 1} / {galleryItems.length}
                </span>
                <span className="hidden sm:inline-block text-sm font-semibold text-slate-300 truncate max-w-md">
                  {galleryItems[activeImageIdx].title}
                </span>
              </div>

              <button
                onClick={() => setActiveImageIdx(null)}
                className="text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 focus:outline-none transition-colors border border-white/10"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Central Stage with Next/Prev and Image */}
            <div className="relative flex-1 flex items-center justify-center py-2">
              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-2 sm:left-6 text-white p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 focus:outline-none transition-all z-30 border border-white/15 backdrop-blur-md"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Main Image */}
              <motion.div
                key={activeImageIdx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="max-w-5xl max-h-[72vh] flex flex-col items-center justify-center"
              >
                <img
                  src={galleryItems[activeImageIdx].image}
                  alt={galleryItems[activeImageIdx].title}
                  onError={(e) => {
                    if (e.currentTarget.src.endsWith('.jpeg')) {
                      e.currentTarget.src = galleryItems[activeImageIdx].image.replace('.jpeg', '.jpg');
                    }
                  }}
                  className="max-w-full max-h-[68vh] object-contain rounded-xl shadow-2xl"
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-2 sm:right-6 text-white p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 focus:outline-none transition-all z-30 border border-white/15 backdrop-blur-md"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </div>

            {/* Bottom Caption & Thumbnail Strip */}
            <div className="w-full max-w-4xl mx-auto space-y-3 z-50 text-center pb-2">
              <div className="text-white px-4">
                <h4 className="text-base sm:text-lg font-extrabold text-white">
                  {galleryItems[activeImageIdx].title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl mx-auto leading-relaxed">
                  {galleryItems[activeImageIdx].desc}
                </p>
              </div>

              {/* Quick Thumbnail Navigation */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto py-1 px-4 no-scrollbar">
                {galleryItems.map((thumb, tIdx) => (
                  <button
                    key={thumb.id}
                    onClick={() => setActiveImageIdx(tIdx)}
                    className={`relative shrink-0 w-10 h-8 sm:w-14 sm:h-10 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                      activeImageIdx === tIdx
                        ? 'border-brand-sky scale-110 shadow-md ring-2 ring-brand-sky/40'
                        : 'border-white/20 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={thumb.image}
                      alt={thumb.title}
                      onError={(e) => {
                        if (e.currentTarget.src.endsWith('.jpeg')) {
                          e.currentTarget.src = thumb.image.replace('.jpeg', '.jpg');
                        }
                      }}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Gallery;
