import { motion } from 'framer-motion';
import heroBg from '@assets/generated_images/bold_red_and_black_abstract_geometric_background.png';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-stretch bg-background overflow-hidden border-b border-white/10">
      {/* Left Red Panel */}
      <div className="w-full lg:w-1/3 bg-primary relative flex flex-col justify-center px-8 md:px-12 py-20 z-20">
         <motion.div 
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.3 }}
           className="space-y-4"
         >
           <div className="h-2 w-24 bg-black mb-8" />
           <p className="font-mono text-sm text-black/70 font-bold uppercase tracking-widest">Web Production Proposal</p>
           <h2 className="text-5xl md:text-6xl font-display font-bold text-black leading-[0.9] tracking-tighter">
             WEB<br/>PRODUCTION<br/>PLANS
           </h2>
           <p className="font-sans text-black/80 font-medium pt-4 max-w-sm leading-relaxed">
             ご予算と目的に応じた最適なクリエイティブソリューション。<br/>
             AI活用から完全ブランディングまで。
           </p>
         </motion.div>
         
         <div className="absolute bottom-12 left-12 hidden lg:block">
            <p className="font-bold text-black text-xl tracking-tighter">2025 EDITION</p>
         </div>
      </div>

      {/* Right Image Panel */}
      <div className="hidden lg:block w-2/3 relative bg-black">
        <img 
          src={heroBg} 
          alt="Abstract Red Black" 
          className="w-full h-full object-cover opacity-60 mix-blend-screen" 
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/80" />
        
        <div className="absolute top-1/2 right-20 -translate-y-1/2 text-right z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[8rem] xl:text-[10rem] font-display font-bold text-white tracking-tighter leading-[0.85]"
          >
            BEYOND<br/>
            <span className="text-primary stroke-text">DESIGN</span>
          </motion.h1>
          <div className="flex justify-end mt-12">
             <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center animate-spin-slow">
                <ArrowDown className="text-white w-8 h-8" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
