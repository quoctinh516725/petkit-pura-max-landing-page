import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  wrapperClassName = '',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Skeleton Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-800/40 animate-pulse rounded-2xl flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-4 border-slate-700 border-t-brand-teal animate-spin" />
        </div>
      )}

      {/* Fade-in Image */}
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`${className} ${isLoaded ? 'block' : 'invisible'}`}
      />
    </div>
  );
};
