import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/gallery';
import SectionHeading from '../components/ui/SectionHeading';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeImageIdx, setActiveImageIdx] = useState(null);

  // Filter items based on active category
  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

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
  }, [activeImageIdx, filteredItems]);

  const handleNext = () => {
    setActiveImageIdx((prevIdx) => (prevIdx + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setActiveImageIdx((prevIdx) => (prevIdx - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <PageTransition>
      <SEO
        title="Office & Team Gallery | NK Associates Chartered Accountants Jaipur"
        description="Explore the modern office workspace, team collaboration, and client meeting environment of NK Associates Chartered Accountants in Sanganer, Jaipur."
        keywords="NK Associates office, CA office photos Jaipur, NK Associates workplace gallery, CA firm Jaipur"
        canonicalPath="/gallery"
      />
      {/* Gallery Hero */}
      <section className="bg-brand-navy text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-brand-sky/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-slate-800 text-brand-sky text-xs font-semibold uppercase tracking-wider border border-slate-700/60"
          >
            Media & Workplace
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            NK Associates Gallery | Office & Workplace in Jaipur
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            A visual overview of our professional office premises, team environments, client consultations, and business achievements.
          </motion.p>
        </div>
      </section>

      {/* Grid and Tabs Filter */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Categories Tab Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setActiveImageIdx(null);
                }}
                className={`px-4.5 py-2 text-xs md:text-sm font-semibold rounded-full border transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-brand-sky text-white border-brand-sky shadow-sm'
                    : 'bg-white text-brand-navy border-slate-200 hover:border-brand-sky hover:text-brand-sky'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid Layout of Cards */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveImageIdx(idx)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-100 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 bg-slate-50"
                >
                  {/* Image Container */}
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-200 relative">
                    <img
                      src={item.image}
                      alt={`${item.title} - NK Associates Office Jaipur`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Dark Hover overlay */}
                    <div className="absolute inset-0 bg-brand-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
                        <ZoomIn className="w-5 h-5 text-brand-navy" />
                      </div>
                    </div>
                  </div>

                  {/* Text Description Block */}
                  <div className="p-5 text-left bg-white">
                    <span className="text-[10px] font-bold text-brand-sky uppercase tracking-wider">
                      {galleryCategories.find(c => c.id === item.category)?.label}
                    </span>
                    <h3 className="font-extrabold text-brand-navy text-base mt-1 group-hover:text-brand-sky transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-brand-charcoal leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* If Category is Empty (Fallback, though should not occur here) */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16 text-brand-gray">
              No items available in this category.
            </div>
          )}
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeImageIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImageIdx(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 focus:outline-none z-50 rounded-full bg-white/5 hover:bg-white/10"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Lightbox Body */}
            <div className="relative w-full max-w-5xl aspect-video max-h-[70vh] flex items-center justify-center">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:-left-16 text-white/70 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/10 focus:outline-none transition-colors z-45"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>

              {/* Main Image Container */}
              <motion.div
                key={activeImageIdx}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex items-center justify-center rounded-lg overflow-hidden bg-black/30"
              >
                <img
                  src={filteredItems[activeImageIdx].image}
                  alt={`${filteredItems[activeImageIdx].title} - NK Associates Office Jaipur`}
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 md:-right-16 text-white/70 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/10 focus:outline-none transition-colors z-45"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>

            {/* Bottom Caption Info */}
            <div className="mt-6 text-center text-white max-w-xl">
              <span className="text-xs text-brand-sky font-bold uppercase tracking-widest">
                Image {activeImageIdx + 1} of {filteredItems.length}
              </span>
              <h4 className="text-lg md:text-xl font-extrabold mt-1">
                {filteredItems[activeImageIdx].title}
              </h4>
              <p className="text-xs md:text-sm text-slate-400 mt-1.5 leading-relaxed">
                {filteredItems[activeImageIdx].desc}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Gallery;
