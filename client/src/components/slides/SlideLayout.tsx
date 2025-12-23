import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SlideProps {
  children: ReactNode;
  isActive?: boolean;
  className?: string;
}

export function SlideContainer({ children, className }: SlideProps) {
  return (
    <div className={cn("w-full h-full flex flex-col p-12 md:p-20 relative overflow-hidden bg-background", className)}>
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      {children}
      
      {/* Slide Footer / Numbering would go here if needed globally */}
      <div className="absolute bottom-6 left-12 right-12 flex justify-between items-end pointer-events-none text-xs text-muted-foreground font-mono">
         <span>PROTOTYPE.WEB</span>
         <span className="slide-number-target"></span>
      </div>
    </div>
  );
}

export const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
    zIndex: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95
  })
};
