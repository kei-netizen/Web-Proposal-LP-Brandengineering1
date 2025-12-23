import { motion, useScroll, useTransform } from 'framer-motion';
import heroBg from '@assets/generated_images/abstract_yellow_and_black_geometric_3d_shapes.png';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row bg-background overflow-hidden">
      {/* Left Content Panel - Yellow */}
      <motion.div 
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full lg:w-[40%] bg-primary text-black relative z-20 flex flex-col justify-center px-8 md:px-16 py-20 lg:py-0"
      >
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.6, duration: 0.8 }}
           className="space-y-8"
         >
           <div className="flex items-center gap-4">
             <div className="h-[2px] w-12 bg-black" />
             <p className="font-mono text-xs font-bold uppercase tracking-widest">Web Production Proposal</p>
           </div>
           
           <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[0.85] tracking-tighter">
             START<br/>
             HANSO<br/>
             STUDIO
           </h2>
           
           <p className="font-sans text-black/80 font-medium text-lg max-w-sm leading-relaxed border-l-2 border-black/20 pl-6">
             ご予算と目的に応じた最適なクリエイティブソリューション。<br/>
             AI活用から完全ブランディングまで。
           </p>

           <div className="pt-8">
              <button className="px-8 py-4 bg-black text-white font-bold tracking-widest text-sm hover:bg-black/80 transition-colors flex items-center gap-2">
                VIEW PLANS <ArrowDown className="w-4 h-4" />
              </button>
           </div>
         </motion.div>
         
         <div className="absolute bottom-12 left-16 hidden lg:block">
            <div className="flex items-end gap-2">
               <span className="text-6xl font-black leading-none">01</span>
               <span className="text-sm font-bold pb-2">/ 05</span>
            </div>
         </div>
      </motion.div>

      {/* Right Image Panel - Dark */}
      <div className="w-full lg:w-[60%] relative bg-black h-[50vh] lg:h-screen overflow-hidden">
        <motion.div 
          style={{ y, scale: 1.1 }}
          className="absolute inset-0"
        >
          <img 
            src={heroBg} 
            alt="Abstract Yellow Black" 
            className="w-full h-full object-cover opacity-80" 
          />
        </motion.div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        
        <div className="absolute top-1/2 right-12 lg:right-24 -translate-y-1/2 text-right z-10 pointer-events-none">
          <motion.h1 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-[10vw] font-display font-black text-white tracking-tighter leading-none mix-blend-difference"
          >
            BEYOND
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="text-[10vw] font-display font-black text-transparent stroke-text tracking-tighter leading-none"
          >
            DESIGN
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
