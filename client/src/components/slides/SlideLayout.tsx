import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SlideProps {
  children: ReactNode;
  className?: string;
  theme?: 'dark' | 'light' | 'red';
}

export function SlideContainer({ children, className, theme = 'dark' }: SlideProps) {
  const bgClass = theme === 'red' ? 'bg-primary' : theme === 'light' ? 'bg-white text-black' : 'bg-background text-white';

  return (
    <div className={cn("w-full h-full relative overflow-hidden flex", bgClass, className)}>
      {/* Global Brand Mark */}
      <div className="absolute top-8 left-8 z-50 mix-blend-difference text-white">
        <span className="font-display font-bold text-xl tracking-tighter">PROTOTYPE.WEB</span>
      </div>
      
      {/* Slide Number */}
      <div className="absolute bottom-8 right-8 z-50 mix-blend-difference text-white font-mono text-sm">
        <span className="slide-number-target">01</span>
      </div>

      {children}
    </div>
  );
}

export const slideVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? '100%' : '-100%',
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }),
  center: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  exit: (direction: number) => ({
    y: direction < 0 ? '100%' : '-100%',
    opacity: 1, // Keep opacity 1 for solid slide effect
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
};
