import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section className="bg-primary py-32 relative overflow-hidden text-black">
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
        <span className="text-[30vw] font-display font-bold leading-none tracking-tighter">START</span>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tighter leading-none">
          LET'S BUILD<br/>THE FUTURE
        </h2>
        <p className="text-xl font-medium max-w-2xl mx-auto mb-16 text-black/80">
          まずは無料相談から。<br/>
          貴社の課題に合わせた最適なプランをご提案します。
        </p>

        <div className="inline-block bg-black text-white p-16 shadow-2xl hover:scale-105 transition-transform duration-300">
           <p className="text-xs text-white/50 mb-4 uppercase tracking-widest font-bold">Free Consultation</p>
           <p className="text-5xl md:text-6xl font-display font-bold tracking-wider mb-4">03-1234-5678</p>
           <p className="text-lg text-white/70">info@prototype.web</p>
           
           <button className="mt-12 w-full py-4 bg-primary text-black font-bold text-lg hover:bg-white transition-colors">
             お問い合わせフォームへ
           </button>
        </div>
      </div>
    </section>
  );
}
