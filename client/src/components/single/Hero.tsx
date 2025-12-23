import { motion, useScroll, useTransform } from 'framer-motion';
import heroBg from '@assets/generated_images/abstract_yellow_and_black_geometric_3d_shapes.png';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 flex">
        {/* Left Yellow BG */}
        <div className="w-[40%] bg-primary h-full relative z-0" />
        {/* Right Black BG */}
        <div className="w-[60%] bg-black h-full relative z-0 overflow-hidden">
          <motion.div 
            style={{ y, scale: 1.1 }}
            className="absolute inset-0"
          >
            <img 
              src={heroBg} 
              alt="Abstract Yellow Black" 
              className="w-full h-full object-cover opacity-60" 
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </div>
      </div>

      {/* Content Layer */}
      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="relative">
          
          {/* Main Title Composition */}
          <div className="flex flex-col items-start lg:items-center lg:flex-row">
            
            {/* "CRAFT" - On Yellow Background */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="lg:w-[35%] text-right lg:pr-12 relative z-10"
            >
               <h2 className="text-[12vw] lg:text-[10rem] font-display font-black leading-none tracking-tighter text-black">
                 CRAFT
               </h2>
            </motion.div>

            {/* "YOUR VISION" - Box Style overlapping boundary */}
            <motion.div 
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="bg-black text-white p-6 lg:p-12 lg:-ml-20 shadow-2xl relative z-20"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.8 }}
              >
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary mb-4">Web Production Proposal</p>
                <h2 className="text-5xl lg:text-8xl font-display font-black leading-[0.9] tracking-tighter mb-6">
                  YOUR<br/>
                  VISION
                </h2>
                <div className="h-1 w-20 bg-primary mb-6" />
                <p className="font-sans text-white/80 font-bold text-sm lg:text-base max-w-sm leading-relaxed">
                  ご予算と目的に応じた最適な<br/>
                  クリエイティブソリューション。
                </p>
              </motion.div>
            </motion.div>

            {/* Decorative "BEYOND" Text behind */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 -z-10 hidden lg:block pointer-events-none mix-blend-difference">
               <motion.h1 
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 1.5, ease: "easeOut" }}
                  className="text-[12rem] font-display font-black text-white/10 tracking-tighter leading-none"
                >
                  DESIGN
                </motion.h1>
            </div>

          </div>

          {/* CTA Button Area - Positioning adjusted */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1.0 }}
            className="mt-12 lg:ml-[40%] lg:pl-12"
          >
             <button 
                onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-white text-black font-bold tracking-widest text-sm hover:bg-primary transition-colors flex items-center gap-2"
              >
                VIEW PLANS 
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-12 hidden lg:block z-20 mix-blend-difference text-white">
         <div className="flex items-end gap-2">
            <span className="text-6xl font-black leading-none">01</span>
            <span className="text-sm font-bold pb-2">/ 05</span>
         </div>
      </div>
    </section>
  );
}
