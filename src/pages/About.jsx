import React from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  FileText,
  UserCheck,
  HeartHandshake,
  Check,
  Search,
  BookOpen,
  Briefcase,
  TrendingUp,
  Activity
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

const About = () => {
  const steps = [
    {
      num: "01",
      title: "Connect",
      desc: "Reach out to us online, via call, or WhatsApp, and outline your registration, tax, or compliance needs."
    },
    {
      num: "02",
      title: "Understand",
      desc: "Our advisors schedule a review to thoroughly understand your transactions, entity type, and financial goals."
    },
    {
      num: "03",
      title: "Execute",
      desc: "We compile all required documents, file applications/returns, and ensure full alignment with regulatory directives."
    },
    {
      num: "04",
      title: "Support",
      desc: "Stay secure with continuous support, reminder notices, tax planning advice, and audit representation."
    }
  ];

  const coreValues = [
    {
      title: "Who We Are",
      desc: "Based in Jaipur, Rajasthan, NK Associates is a team of tax practitioners and financial advisors committed to delivering high-end compliance and consulting support. We act as a trusted advisor to help businesses scale securely.",
      icon: <Compass className="w-6 h-6 text-brand-sky" />
    },
    {
      title: "What We Do",
      desc: "From startup incorporation and GST registration to complex tax audits, return filing, and corporate accounting, we cover the full cycle of corporate and personal finance tasks.",
      icon: <FileText className="w-6 h-6 text-brand-sky" />
    },
    {
      title: "Our Approach",
      desc: "We leverage modern cloud systems and structured digital workflows to complete filings accurately, while explaining tax codes in plain, actionable language so you feel fully in control.",
      icon: <UserCheck className="w-6 h-6 text-brand-sky" />
    },
    {
      title: "Why Clients Trust Us",
      desc: "We value integrity above all else. We provide upfront pricing, clean status reports, and thorough checks that minimize the chance of tax notices or regulatory penalties.",
      icon: <HeartHandshake className="w-6 h-6 text-brand-sky" />
    }
  ];

  return (
    <PageTransition>
      <SEO
        title="About Us | NK Associates - CA & Tax Consultants | Jaipur & Pan-India"
        description="Learn about NK Associates, a premier Chartered Accountant firm headquartered in Jaipur, delivering 100% digital GST, Income Tax, and corporate compliance services across India."
        keywords="about NK Associates, Chartered Accountant Jaipur, Pan India CA services, tax consultants team Jaipur, CA firm profile Rajasthan"
        canonicalPath="/about"
      />
      {/* About Hero */}
      <section className="bg-brand-navy text-white py-16 lg:py-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-sky/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-80 h-80 bg-brand-sky/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 text-brand-sky text-xs font-semibold uppercase tracking-wider border border-slate-700/60"
          >
            <span>🇮🇳 Pan-India Services • Head Office: Jaipur</span>
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            About NK Associates | Chartered Accountants
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Headquartered in Sanganer, Jaipur, NK Associates delivers high-precision audit, GST, TDS, accounting, and corporate compliance services to businesses and individuals across all Indian states through our 100% digital, paperless workflow.
          </motion.p>
        </div>
      </section>

      {/* Intro and Image Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-sm font-semibold uppercase text-brand-sky tracking-wider">Our Profile & Reach</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight">
                Rooted in Jaipur, Empowering Businesses Across India
              </h2>
              <p className="text-brand-charcoal text-sm md:text-base leading-relaxed">
                Navigating complex tax compliance and accounting regulations shouldn't slow your growth. NK Associates was established with a clear mission: to combine the trust and accountability of a physical Chartered Accountant firm with the speed, convenience, and reach of a modern 100% digital practice.
              </p>
              <p className="text-brand-charcoal text-sm md:text-base leading-relaxed">
                From our corporate head office in Sanganer, Jaipur, we serve manufacturers, retail enterprises, IT firms, startups, and salaried professionals in Rajasthan, Delhi NCR, Mumbai, Bengaluru, and nationwide.
              </p>

              {/* Quick Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                {[
                  "Verified CA Practice Standards",
                  "Expert Tax Saving Strategies",
                  "Fast & Secure Data Handling",
                  "Dedicated Relationship Support"
                ].map((txt, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-brand-navy font-semibold text-sm">
                    <div className="w-5 h-5 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-brand-sky" />
                    </div>
                    <span>{txt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Team/Office Image */}
            <div className="lg:col-span-6 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-[500px] h-[350px] md:h-[400px] rounded-3xl overflow-hidden shadow-premium border border-slate-100"
              >
                {/* Embedded Office / Consultant Image */}
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                  alt="NK Associates office and consulting team"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Glass Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white/20 text-left">
                  <span className="text-xs font-bold uppercase text-brand-sky">Jaipur Head Office</span>
                  <p className="text-sm font-extrabold text-brand-navy mt-1">4th Floor, Sanjay Mansion, Sanganer</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Pillars"
            title="Our Professional Integrity"
            subtitle="The principles that guide how NK Associates works for you, ensuring client trust and strict compliance at every step."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex gap-5 text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center shrink-0">
                  {value.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-brand-navy">{value.title}</h3>
                  <p className="text-sm text-brand-charcoal leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Process Timeline"
            title="How NK Associates Works"
            subtitle="Our structured engagement model ensures complete transparency, accuracy, and continuous compliance support."
          />

          {/* Horizontal timeline on Desktop, vertical on Mobile */}
          <div className="relative mt-8">
            {/* Connect Line in background */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-brand-light -translate-y-1/2 rounded hidden lg:block"></div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col items-center lg:items-start text-center lg:text-left relative"
                >
                  {/* Step Bubble */}
                  <div className="w-14 h-14 rounded-full bg-brand-sky text-white font-extrabold flex items-center justify-center text-xl shadow-md border-4 border-white mb-5">
                    {step.num}
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-extrabold text-brand-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-brand-charcoal leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
