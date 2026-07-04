import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

export type ToastVariant = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  variant: ToastVariant;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const variantStyles: Record<ToastVariant, { bg: string; icon: React.ReactNode; border: string }> = {
  success: {
    bg: 'bg-emerald-950/90',
    border: 'border-emerald-500/30',
    icon: <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />,
  },
  error: {
    bg: 'bg-red-950/90',
    border: 'border-red-500/30',
    icon: <XCircle className="w-5 h-5 text-red-400 shrink-0" />,
  },
  info: {
    bg: 'bg-sky-950/90',
    border: 'border-sky-500/30',
    icon: <Info className="w-5 h-5 text-sky-400 shrink-0" />,
  },
};

export const Toast: React.FC<ToastProps> = ({
  message,
  variant,
  isVisible,
  onClose,
  duration = 5000,
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isVisible, duration, onClose]);

  const style = variantStyles[variant];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={`fixed top-6 right-6 z-[100] max-w-sm ${style.bg} ${style.border} border rounded-2xl px-5 py-4 shadow-2xl backdrop-blur-md flex items-start gap-3`}
        >
          {style.icon}
          <p className="text-sm text-white leading-snug flex-1">{message}</p>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white transition p-0.5 shrink-0"
            aria-label="Đóng thông báo"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
