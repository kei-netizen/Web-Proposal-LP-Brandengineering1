import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <section className="bg-black py-32 relative overflow-hidden text-white min-h-[60vh] flex items-center border-t border-white/10">
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none overflow-hidden">
         <div className="whitespace-nowrap text-[30vw] font-display font-black leading-none text-white mix-blend-difference">CONTACT</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-12"
           >
              <h2 className="text-7xl md:text-9xl font-display font-black mb-8 tracking-tighter leading-[0.8]">
                LET'S<br/>
                <span className="text-primary">BUILD</span> IT.
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
                 まずは無料相談から。<br/>
                 貴社の課題に合わせた最適なプランをご提案します。
              </p>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
           >
              <a href="#" className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black hover:bg-primary transition-colors duration-500">
                <span className="text-2xl font-black tracking-widest uppercase">Start Project</span>
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
