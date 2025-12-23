import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section className="bg-black py-32 relative overflow-hidden text-white min-h-[80vh] flex items-center">
      {/* Background Typography */}
      <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none select-none overflow-hidden">
         <div className="whitespace-nowrap text-[20vw] font-display font-black leading-none text-white/5">CONTACT US</div>
         <div className="whitespace-nowrap text-[20vw] font-display font-black leading-none text-white/5 text-right">START NOW</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-stretch">
           {/* Left Block */}
           <div className="w-full md:w-1/2 border-r border-white/10 pr-12">
              <h2 className="text-6xl md:text-8xl font-display font-black mb-12 tracking-tighter leading-[0.9]">
                LET'S<br/>
                <span className="text-primary">BUILD</span><br/>
                IT.
              </h2>
              <p className="text-xl text-muted-foreground font-medium max-w-md">
                 まずは無料相談から。<br/>
                 貴社の課題に合わせた最適なプランをご提案します。
              </p>
           </div>

           {/* Right Block */}
           <div className="w-full md:w-1/2 pl-0 md:pl-12 flex flex-col justify-center mt-12 md:mt-0">
              <div className="bg-card border border-white/10 p-12 hover:border-primary transition-colors duration-300 group">
                 <p className="text-xs text-primary font-mono mb-4 uppercase tracking-widest">Free Consultation</p>
                 <p className="text-4xl md:text-5xl font-display font-black tracking-wider mb-6 group-hover:text-primary transition-colors">
                   03-1234-5678
                 </p>
                 <p className="text-lg text-white/60 mb-12 font-mono">info@prototype.web</p>
                 
                 <button className="w-full py-6 bg-primary text-black font-black text-xl hover:bg-white transition-colors tracking-widest">
                   CONTACT FORM
                 </button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
