import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroBg from '@assets/generated_images/digital_architectural_wireframe_background_for_hero_section.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Digital Architecture" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono tracking-widest uppercase text-white/70">Web Production Plans 2025</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
              BEYOND <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">DESIGN</span> INTO <br />
              EXPERIENCE
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
              We offer three tailored plans to match your budget and purpose. 
              From AI-hybrid rapid deployment to full-scale artistic branding. 
              All plans include <span className="text-white font-semibold">Original Design</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-white text-black font-semibold text-sm tracking-wide overflow-hidden hover:bg-white/90 transition-all">
                <span className="relative z-10 flex items-center gap-2">
                  VIEW PLANS <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold text-sm tracking-wide hover:bg-white/5 transition-all">
                CONTACT US
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Technical Elements */}
      <div className="absolute bottom-12 left-6 md:left-12 font-mono text-xs text-white/30 hidden md:block">
        <p>SCROLL_Y: 0000</p>
        <p>VIEWPORT: 1920x1080</p>
      </div>
      
      <div className="absolute bottom-12 right-6 md:right-12 animate-bounce text-white/30">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
