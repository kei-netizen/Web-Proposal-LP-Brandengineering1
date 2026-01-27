import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export function CaseStudy() {
  return (
    <section className="bg-black py-32 border-b border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
           <div>
             <motion.h2 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: "easeOut" }}
               className="text-5xl md:text-7xl font-display font-black text-white leading-none"
             >
               <span className="text-primary text-2xl md:text-3xl block mb-4 font-mono tracking-widest">06.</span>
               CASE STUDY
             </motion.h2>
           </div>
           <div className="mt-8 md:mt-0">
             <p className="text-muted-foreground text-right font-mono">
               LATEST WORKS / 2026
             </p>
           </div>
        </div>

        {/* Showcase */}
        <div className="space-y-8">
          
          {/* Main Visual */}
          <motion.a 
            href="https://manufacturing-recruit-site-16-p--kei7.replit.app"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="block group relative overflow-hidden border border-white/10 aspect-video"
          >
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none mix-blend-overlay" />
            <img 
              src="/attached_assets/スクリーンショット_2026-01-26_14.46.11_1769482065993.png" 
              alt="KAI FACTORY Main Visual" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay Info */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent flex justify-between items-end z-30">
              <div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">KAI FACTORY</h3>
                <p className="text-primary font-mono text-sm">RECRUIT SITE / MANUFACTURING</p>
              </div>
              <div className="bg-white text-black rounded-full p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </motion.a>

          {/* Sub Visuals */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
              className="border border-white/10 aspect-video overflow-hidden group relative"
            >
               <img 
                 src="/attached_assets/スクリーンショット_2026-01-26_14.47.05_1769482065994.png" 
                 alt="KAI FACTORY Challenge Section" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
               />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
              className="border border-white/10 aspect-video overflow-hidden group relative"
            >
               <img 
                 src="/attached_assets/スクリーンショット_2026-01-26_14.46.32_1769482065994.png" 
                 alt="KAI FACTORY Project Section" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
               />
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://manufacturing-recruit-site-16-p--kei7.replit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white border-b border-primary pb-1 hover:text-primary transition-colors font-bold"
            >
              VISIT WEBSITE <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
