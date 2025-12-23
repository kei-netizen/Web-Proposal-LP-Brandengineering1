import { motion } from 'framer-motion';

export function ContactCTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/5" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            READY TO BUILD?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            貴社の真の価値を反映したデジタルプレゼンスを構築しませんか。<br/>
            ご相談は無料です。お気軽にお問い合わせください。
          </p>
          
          <button className="px-12 py-6 bg-white text-black font-bold text-lg tracking-wide hover:bg-white/90 transition-all rounded-sm">
            プロジェクトを開始する
          </button>

          <p className="mt-8 text-sm text-muted-foreground font-mono">
            EST. RESPONSE TIME: 24 HOURS
          </p>
        </motion.div>
      </div>
    </section>
  );
}
