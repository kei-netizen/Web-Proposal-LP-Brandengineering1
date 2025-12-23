import { motion } from 'framer-motion';

export function Concept() {
  return (
    <section className="bg-primary text-black py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-8 leading-tight"
          >
            技術を、<br className="md:hidden" />ブランドへ。
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl font-bold max-w-4xl leading-relaxed"
          >
            製造業のポテンシャルを解放する、<br className="hidden md:block" />
            次世代のWeb構築サービス「Design Engineering」。
          </motion.p>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
         <div className="absolute top-[-50%] left-[-20%] w-[100vw] h-[100vw] border-[100px] border-black rounded-full mix-blend-overlay" />
      </div>
    </section>
  );
}
