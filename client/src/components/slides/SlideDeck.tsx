import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { slideVariants } from './SlideLayout';

import { CoverSlide } from './CoverSlide';
import { PlansOverviewSlide } from './PlansOverviewSlide';
import { DetailedComparisonSlide } from './DetailedComparisonSlide';
import { ProcessSlide } from './ProcessSlide';
import { ContactSlide } from './ContactSlide';

const SLIDES = [
  CoverSlide,
  PlansOverviewSlide,
  DetailedComparisonSlide,
  ProcessSlide,
  ContactSlide
];

export function SlideDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => {
      const next = prev + newDirection;
      if (next < 0) return 0;
      if (next >= SLIDES.length) return SLIDES.length - 1;
      return next;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        paginate(1);
      } else if (e.key === 'ArrowLeft') {
        paginate(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  const CurrentSlideComponent = SLIDES[currentSlide];

  return (
    <div className="w-screen h-screen bg-black overflow-hidden relative">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 right-6 flex gap-2 z-50">
        <button 
          onClick={() => paginate(-1)} 
          disabled={currentSlide === 0}
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-30 transition-colors border border-white/10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={() => paginate(1)} 
          disabled={currentSlide === SLIDES.length - 1}
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-30 transition-colors border border-white/10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-50">
        <motion.div 
          className="h-full bg-blue-500"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      {/* Slide Counter */}
      <div className="absolute bottom-6 left-6 font-mono text-xs text-muted-foreground z-50">
        {String(currentSlide + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
      </div>
    </div>
  );
}
