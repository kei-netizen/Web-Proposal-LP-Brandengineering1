import { SlideContainer } from './SlideLayout';
import { motion } from 'framer-motion';
import heroBg from '@assets/generated_images/bold_red_and_black_abstract_geometric_background.png';

export function CoverSlide() {
  return (
    <SlideContainer className="flex-row">
      {/* Left Red Panel */}
      <div className="w-1/3 bg-primary h-full relative flex flex-col justify-center px-12 z-20">
         <motion.div 
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.3 }}
           className="space-y-2"
         >
           <div className="h-1 w-20 bg-black mb-6" />
           <p className="font-mono text-sm text-black/70 font-bold uppercase tracking-widest">Proposal</p>
           <h2 className="text-5xl font-display font-bold text-black leading-none">
             WEB<br/>PRODUCTION<br/>PLANS
           </h2>
         </motion.div>
         
         <div className="absolute bottom-12 left-12">
            <p className="font-bold text-black text-lg">2025</p>
         </div>
      </div>

      {/* Right Image Panel */}
      <div className="w-2/3 h-full relative bg-black">
        <img 
          src={heroBg} 
          alt="Abstract Red Black" 
          className="w-full h-full object-cover opacity-80" 
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/50" />
        
        <div className="absolute top-1/2 right-12 -translate-y-1/2 text-right">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-8xl md:text-9xl font-display font-bold text-white tracking-tighter leading-none"
          >
            BEYOND<br/>
            <span className="text-primary">DESIGN</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white/60 mt-6 max-w-md ml-auto font-sans leading-relaxed"
          >
            ご予算と目的に応じた最適なクリエイティブソリューション。<br/>
            AI活用から完全ブランディングまで。
          </motion.p>
        </div>
      </div>
    </SlideContainer>
  );
}
