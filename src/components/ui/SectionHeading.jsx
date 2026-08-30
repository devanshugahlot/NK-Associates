import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = ''
}) => {
  const isLeft = align === 'left';
  
  return (
    <div className={`mb-12 md:mb-16 ${isLeft ? 'text-left' : 'text-center'} ${className}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-3 text-xs md:text-sm font-semibold tracking-wider uppercase rounded-full bg-brand-light text-brand-skyDark"
        >
          {badge}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy mt-2 leading-tight"
      >
        {title}
        <span className="block h-1 w-20 bg-brand-sky mt-4 rounded-full mx-auto md:mx-0" style={{ margin: isLeft ? '1rem 0 0 0' : '1rem auto 0 auto' }}></span>
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-base md:text-lg text-brand-charcoal mt-6 leading-relaxed max-w-3xl ${isLeft ? 'mr-auto' : 'mx-auto'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
