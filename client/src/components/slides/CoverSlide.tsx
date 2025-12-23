import { SlideContainer } from './SlideLayout';
import { motion } from 'framer-motion';
import heroBg from '@assets/generated_images/digital_architectural_wireframe_background_for_hero_section.png';

export function CoverSlide() {
  return (
    <SlideContainer className="justify-center items-start">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-30 mix-blend-screen" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-mono tracking-widest uppercase text-white/70">Web Production Service Proposal</span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-12">
            BEYOND <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">DESIGN</span> INTO <br />
            EXPERIENCE
          </h1>

          <div className="border-l-2 border-white/20 pl-6">
            <p className="text-xl md:text-2xl text-white font-medium mb-2">Web制作プランのご提案</p>
            <p className="text-muted-foreground">ご予算と目的に応じた最適なクリエイティブソリューション</p>
          </div>
        </motion.div>
      </div>
    </SlideContainer>
  );
}
