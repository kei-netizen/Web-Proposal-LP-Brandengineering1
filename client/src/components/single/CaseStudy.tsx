import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export function CaseStudy() {
  return (
    <section className="bg-black py-20 border-b border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Info - Compact */}
          <div className="lg:w-1/3 text-left">
             <div className="flex items-center gap-4 mb-4">
                <span className="text-primary font-mono text-sm tracking-widest">06. CASE STUDY</span>
                <div className="h-px bg-white/20 flex-grow" />
             </div>
             
             <h3 className="text-3xl font-display font-bold text-white mb-2">KAI FACTORY</h3>
             <p className="text-white/60 text-sm mb-6 font-mono">RECRUIT SITE / MANUFACTURING</p>
             
             <p className="text-white/70 text-sm leading-relaxed mb-6">
               難削材加工に挑む「エンジニア魂」を、ソリッドな黒と金属の質感で表現。
               言葉よりも「姿勢」で語る、製造業の新しい採用サイトの形。
             </p>

             <a 
              href="https://manufacturing-recruit-site-16-p--kei7.replit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-bold text-sm border border-primary/30 hover:border-white/50 px-6 py-3 rounded-none bg-primary/5 hover:bg-white/5"
            >
              VISIT WEBSITE <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Images - Compact Row */}
          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-3 gap-4">
              <motion.a 
                href="https://manufacturing-recruit-site-16-p--kei7.replit.app"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="block aspect-video overflow-hidden border border-white/10 group cursor-pointer"
              >
                <img 
                  src="/attached_assets/スクリーンショット_2026-01-26_14.46.11_1769482065993.png" 
                  alt="Main Visual" 
                  className="w-full h-full object-cover"
                />
              </motion.a>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="aspect-video overflow-hidden border border-white/10"
              >
                <img 
                  src="/attached_assets/スクリーンショット_2026-01-26_14.47.05_1769482065994.png" 
                  alt="Sub Visual 1" 
                  className="w-full h-full object-cover opacity-80"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="aspect-video overflow-hidden border border-white/10"
              >
                <img 
                  src="/attached_assets/スクリーンショット_2026-01-26_14.46.32_1769482065994.png" 
                  alt="Sub Visual 2" 
                  className="w-full h-full object-cover opacity-80"
                />
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
