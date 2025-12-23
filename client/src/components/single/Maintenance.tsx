import { motion } from 'framer-motion';
import { Server, ShieldCheck, Database, Wrench } from 'lucide-react';

export function Maintenance() {
  const features = [
    { icon: <Server className="w-5 h-5 text-black" />, text: "Replitサーバー / ドメイン管理代行" },
    { icon: <ShieldCheck className="w-5 h-5 text-black" />, text: "セキュリティアップデート" },
    { icon: <Database className="w-5 h-5 text-black" />, text: "月1回のデータバックアップ" },
    { icon: <Wrench className="w-5 h-5 text-black" />, text: "軽微な修正（テキスト・画像差し替え）" },
  ];

  return (
    <section className="bg-background py-32 border-b border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Heading */}
          <div className="w-full lg:w-1/2">
             <motion.h2 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: "easeOut" }}
               className="text-6xl md:text-8xl font-display font-black text-white mb-8 leading-none"
             >
               MAINTENANCE
             </motion.h2>
             <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
               作った後も安心を。<br/>
               専門的な管理業務はすべてお任せください。
             </p>
          </div>

          {/* Right: Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-primary p-12 relative shadow-2xl shadow-primary/10">
               {/* Label */}
               <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-4 py-2 uppercase tracking-widest">
                 Support Plan
               </div>

               <div className="flex items-baseline mb-8 border-b border-black/10 pb-8">
                 <span className="text-xl font-bold text-black/60 mr-4">MONTHLY</span>
                 <span className="text-6xl font-display font-black text-black">10,000</span>
                 <span className="text-xl font-bold text-black ml-2">JPY</span>
               </div>

               <ul className="space-y-6">
                 {features.map((item, i) => (
                   <li key={i} className="flex items-center gap-4 text-black font-bold">
                     <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                       {item.icon}
                     </div>
                     {item.text}
                   </li>
                 ))}
               </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
