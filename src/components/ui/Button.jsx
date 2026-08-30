import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  to,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  icon,
  iconPosition = 'right',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-sky focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-brand-sky text-white hover:bg-brand-skyDark shadow-premium hover:shadow-premium-hover border border-brand-sky hover:border-brand-skyDark',
    secondary: 'bg-brand-navy text-white hover:bg-brand-navyLight shadow-md hover:shadow-lg border border-brand-navy hover:border-brand-navyLight',
    outline: 'bg-transparent text-brand-sky hover:bg-brand-light border-2 border-brand-sky',
    outlineNavy: 'bg-transparent text-brand-navy hover:bg-brand-light border-2 border-brand-navy',
    light: 'bg-brand-light text-brand-skyDark hover:bg-sky-200 border border-sky-200',
    white: 'bg-white text-brand-navy hover:bg-brand-extralight shadow-md hover:shadow-lg border border-slate-100',
  };

  const sizes = 'px-6 py-3 text-sm md:text-base';
  
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </>
  );

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes} ${className} group`;

  if (to) {
    if (to.startsWith('#')) {
      return (
        <a href={to} className={buttonClasses} onClick={onClick} {...props}>
          {content}
        </a>
      );
    }
    return (
      <Link to={to} className={buttonClasses} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
