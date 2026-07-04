import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverEffect = true,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4 } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`rounded-[2.5rem] bg-white text-brand-navy p-8 border border-slate-100 shadow-md ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
