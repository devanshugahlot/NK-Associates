import React from 'react';
import SEO from '../../components/SEO';
import { gstConfig } from '../../components/gst/gstConfig';
import { GstPackageProvider } from '../../context/GstPackageContext';

// GST Landing Page Section Components
import Hero from '../../components/gst/Hero';
import TrustStrip from '../../components/gst/TrustStrip';
import Packages from '../../components/gst/Packages';
import HowItWorks from '../../components/gst/HowItWorks';
import WhoShouldRegister from '../../components/gst/WhoShouldRegister';
import DocumentsRequired from '../../components/gst/DocumentsRequired';
import RegistrationTypes from '../../components/gst/RegistrationTypes';
import Benefits from '../../components/gst/Benefits';
import Faq from '../../components/gst/Faq';
import FinalCta from '../../components/gst/FinalCta';
import MobileStickyBar from '../../components/gst/MobileStickyBar';

const GSTServices = () => {
  // 1. Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nkassociate.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://nkassociate.in/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "GST Registration Services",
        "item": "https://nkassociate.in/services/gst"
      }
    ]
  };

  // 2. Service / ProfessionalService Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "GST Registration & Return Filing Services",
    "provider": {
      "@type": "AccountingService",
      "name": "NK Associates",
      "telephone": "+91-75688-20015",
      "url": "https://nkassociate.in/",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sanganer",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "302029",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "description": "100% online GST registration and return filing services by certified Chartered Accountants in Jaipur and Pan-India. Dedicated expert support, ARN/TRN generation, and fast turnaround."
  };

  // 3. FAQPage Schema dynamically mapped from gstConfig.faqs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": gstConfig.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, serviceSchema, faqSchema]
  };

  return (
    <GstPackageProvider>
      <SEO 
        title="GST Registration in India — 100% Online | NK Associates"
        description="Fast, paperless GST registration by certified Chartered Accountants in Jaipur. Transparent pricing from ₹599, dedicated CA support, zero office visits."
        keywords="GST registration India, online GST registration, GST registration Jaipur, CA for GST, new GSTIN application, GST filing Rajasthan"
        canonicalPath="/services/gst"
        schemaJson={combinedSchema}
      />

      <main className="min-h-screen bg-white">
        {/* 1. Hero Section: H1, subline, 4 tick benefits, right-side form card on desktop, directly below on mobile */}
        <Hero />

        {/* 2. Trust Strip: Verified factual claims for NK Associates */}
        <TrustStrip />

        {/* 3. Packages: 4 cards (₹599, ₹799, ₹2399, ₹7599) with Best Value highlight */}
        <Packages />

        {/* 4. How We Work: 6 steps from form submission to certificate delivery */}
        <HowItWorks />

        {/* 5. Who Should Register: Turnover thresholds, e-commerce, casual person criteria */}
        <WhoShouldRegister />

        {/* 6. Documents Required: 8 icon cards with clear scanner instructions */}
        <DocumentsRequired />

        {/* 7. Types of GST Registration: Regular, Casual, Non-Resident, E-Commerce */}
        <RegistrationTypes />

        {/* 8. Benefits: 6 commercial & tax advantages */}
        <Benefits />

        {/* 9. Reviews: Render ONLY if real authenticated reviews exist in gstConfig.js */}
        {gstConfig.trust.reviews && gstConfig.trust.reviews.length > 0 && (
          <section id="reviews" aria-labelledby="reviews-heading" className="py-12 sm:py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="reviews-heading" className="text-2xl font-bold text-brand-navy text-center mb-8">
                Client Testimonials
              </h2>
              {/* Testimonials grid */}
            </div>
          </section>
        )}

        {/* 10. FAQ Accordion: 12 accessible questions with keyboard navigation */}
        <Faq />

        {/* 11. Final CTA Band: 'Get Started' + Call + WhatsApp buttons */}
        <FinalCta />

        {/* Mobile Sticky Bar: Hidden when form card is in the viewport */}
        <MobileStickyBar />
      </main>
    </GstPackageProvider>
  );
};

export default GSTServices;
