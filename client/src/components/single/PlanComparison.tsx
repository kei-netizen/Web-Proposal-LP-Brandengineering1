import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export function PlanComparison() {
  return (
    <section className="bg-background relative py-32 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 border-b border-white/10 pb-8">
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <p className="text-primary font-mono text-sm tracking-widest mb-4">OUR PRICING</p>
             <h2 className="text-6xl md:text-8xl font-display font-black text-white leading-none">
               CHOOSE<br/>YOUR PLAN
             </h2>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="md:text-right max-w-md mt-8 md:mt-0"
           >
             <p className="text-muted-foreground text-lg leading-relaxed">
               ご予算と目的に合わせて選べる3つのプラン。<br/>
               全プランで<span className="text-primary bg-primary/10 px-1">オリジナルデザイン</span>を保証します。
             </p>
           </motion.div>
        </div>

        {/* 3 Columns Layout - Asymmetric */}
        <div className="grid lg:grid-cols-12 gap-6 mb-32 items-start">
          
          {/* Silver */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 bg-card border border-white/10 p-10 relative group hover:bg-white/5 transition-colors"
          >
             <div className="flex justify-between items-start mb-8">
               <h3 className="text-4xl font-display font-black text-white">SILVER</h3>
               <span className="font-mono text-xs text-muted-foreground border border-white/20 px-2 py-1">STARTER</span>
             </div>
             <p className="text-muted-foreground text-sm mb-12 h-10">コストを抑えてオリジナルを持ちたい<br/>創業期・急募案件に最適</p>
             
             <div className="mb-12">
               <span className="text-6xl font-display font-black text-white">50</span>
               <span className="text-xl text-muted-foreground ml-2">万円</span>
             </div>

             <ul className="space-y-4 text-sm text-muted-foreground mb-12">
               <li className="flex items-center gap-3"><div className="w-1 h-1 bg-white" /> ページ数: ~5P</li>
               <li className="flex items-center gap-3"><div className="w-1 h-1 bg-white" /> デザイン: AI活用</li>
               <li className="flex items-center gap-3"><div className="w-1 h-1 bg-white" /> 素材: ご支給</li>
             </ul>

             <button className="w-full py-4 border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-colors flex justify-center items-center gap-2">
               SELECT PLAN <ArrowRight className="w-4 h-4" />
             </button>
          </motion.div>

          {/* Gold - Highlight */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 bg-primary text-black p-12 relative lg:-mt-8 lg:mb-8 shadow-2xl shadow-primary/20"
          >
             <div className="absolute top-0 right-0 bg-black text-primary text-xs font-bold px-4 py-2">RECOMMENDED</div>
             
             <div className="flex justify-between items-start mb-8">
               <h3 className="text-5xl font-display font-black">GOLD</h3>
               <span className="font-mono text-xs text-black/60 border border-black/20 px-2 py-1">STANDARD</span>
             </div>
             <p className="text-black/70 text-sm mb-12 h-10 font-medium">企業の想いを言葉と写真で伝えたい<br/>信頼獲得・ミスマッチ防止</p>
             
             <div className="mb-12 border-b border-black/10 pb-12">
               <span className="text-7xl font-display font-black">100</span>
               <span className="text-xl text-black/60 ml-2">万円</span>
             </div>

             <ul className="space-y-4 text-sm text-black mb-12 font-bold">
               <li className="flex items-center gap-3"><Check className="w-4 h-4" /> ページ数: ~10P</li>
               <li className="flex items-center gap-3"><Check className="w-4 h-4" /> デザイン: プロフェッショナル</li>
               <li className="flex items-center gap-3"><Check className="w-4 h-4" /> 素材: 撮影 (1日)</li>
             </ul>

             <button className="w-full py-4 bg-black text-white font-bold hover:bg-black/80 transition-colors flex justify-center items-center gap-2">
               START PROJECT <ArrowRight className="w-4 h-4" />
             </button>
          </motion.div>

          {/* Platinum */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4 bg-card border border-white/10 p-10 relative group hover:bg-white/5 transition-colors"
          >
             <div className="flex justify-between items-start mb-8">
               <h3 className="text-4xl font-display font-black text-white">PLATINUM</h3>
               <span className="font-mono text-xs text-muted-foreground border border-white/20 px-2 py-1">PREMIUM</span>
             </div>
             <p className="text-muted-foreground text-sm mb-12 h-10">圧倒的な世界観でファンを作りたい<br/>リブランディング・優秀層採用</p>
             
             <div className="mb-12">
               <span className="text-6xl font-display font-black text-white">180</span>
               <span className="text-xl text-muted-foreground ml-2">万円〜</span>
             </div>

             <ul className="space-y-4 text-sm text-muted-foreground mb-12">
               <li className="flex items-center gap-3"><div className="w-1 h-1 bg-white" /> ページ数: 15P~</li>
               <li className="flex items-center gap-3"><div className="w-1 h-1 bg-white" /> デザイン: フルスクラッチ</li>
               <li className="flex items-center gap-3"><div className="w-1 h-1 bg-white" /> 素材: 撮影 + 動画</li>
             </ul>

             <button className="w-full py-4 border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-colors flex justify-center items-center gap-2">
               SELECT PLAN <ArrowRight className="w-4 h-4" />
             </button>
          </motion.div>

        </div>

        {/* Detailed Spec List (Minimal) */}
        <div className="border-t border-white/10 pt-20">
           <div className="flex items-center gap-4 mb-12">
             <div className="h-[2px] w-12 bg-primary" />
             <h3 className="font-display font-bold text-2xl text-white">DETAILED SPECS</h3>
           </div>
           
           <div className="grid md:grid-cols-4 gap-8">
              {['デザイン', 'ライティング', '写真素材', '負担'].map((item, i) => (
                <div key={i} className="border-l border-white/10 pl-6">
                   <h4 className="text-muted-foreground font-mono text-xs mb-2 uppercase">{item}</h4>
                   <p className="text-white text-sm">
                     {i === 0 && "AIハイブリッド vs プロフェッショナル vs アートディレクション"}
                     {i === 1 && "ご支給 vs 新規作成 vs 取材・完全代行"}
                     {i === 2 && "ご支給 vs プロ撮影 vs 撮影＋動画制作"}
                     {i === 3 && "高 (素材準備) vs 中 (取材) vs 低 (丸投げ)"}
                   </p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
