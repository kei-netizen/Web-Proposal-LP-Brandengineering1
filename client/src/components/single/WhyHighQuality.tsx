import { motion } from 'framer-motion';
import { ArrowDown, Clock, Layers, TrendingUp } from 'lucide-react';

export function WhyHighQuality() {
  return (
    <section className="bg-background py-32 border-b border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-24">
           <motion.h2 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.2, ease: "easeOut" }}
             className="text-5xl md:text-7xl font-display font-black text-white mb-8 leading-none"
           >
             <span className="text-primary text-2xl md:text-3xl block mb-4 font-mono tracking-widest">05.</span>
             WHY HIGH QUALITY,<br/>LOW PRICE?
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
             className="text-white/80 font-bold text-lg md:text-2xl leading-relaxed max-w-4xl border-l-4 border-primary pl-8"
           >
             「制作期間」と「管理コスト」を極限まで圧縮。<br/>
             浮いた予算を、最強のコンテンツへ。
           </motion.p>
        </div>

        {/* 3 Innovation Points */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          
          {/* 1. Production Innovation */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="bg-card border border-white/10 p-8 flex flex-col"
          >
            <div className="mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-none text-primary">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-black text-white mb-2">PRODUCTION INNOVATION</h3>
            <p className="text-muted-foreground text-xs font-mono mb-8">制作プロセスの圧縮</p>
            
            <div className="space-y-6 flex-grow">
              <div className="border-l-2 border-white/10 pl-4">
                <p className="text-xs text-white/40 mb-1 font-bold">CONVENTIONAL</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  手作業でのデザイン作成に約2週間、実装に約1ヶ月。予算の70%が「作業代」として消えていました。
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <p className="text-xs text-primary mb-1 font-bold">OUR SOLUTION</p>
                <p className="text-sm text-white font-medium leading-relaxed">
                  画像生成AIとコード支援で、通常1.5ヶ月の工程を<span className="text-primary font-bold bg-primary/10 px-1">「1週間」レベルに圧縮</span>。品質を落とさずに人件費を構造的に解決。
                </p>
              </div>
            </div>
          </motion.div>

          {/* 2. Management Innovation */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.0, ease: "easeOut" }}
            className="bg-card border border-white/10 p-8 flex flex-col"
          >
            <div className="mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-none text-primary">
              <Layers className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-black text-white mb-2">MANAGEMENT INNOVATION</h3>
            <p className="text-muted-foreground text-xs font-mono mb-8">進行管理の簡略化</p>
            
            <div className="space-y-6 flex-grow">
              <div className="border-l-2 border-white/10 pl-4">
                <p className="text-xs text-white/40 mb-1 font-bold">CONVENTIONAL</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  定例会議や膨大な資料作成、認識ズレによる修正ラリー。「作ること」以外の管理コストが約20%を占めます。
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <p className="text-xs text-primary mb-1 font-bold">OUR SOLUTION</p>
                <p className="text-sm text-white font-medium leading-relaxed">
                  議論の前にAIで「動くプロトタイプ」を共有。<span className="text-primary font-bold bg-primary/10 px-1">認識のズレをなくし</span>、不要な会議や資料作成を全廃します。
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3. Value Shift */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1.0, ease: "easeOut" }}
            className="bg-primary p-8 flex flex-col relative overflow-hidden"
          >
            <div className="mb-6 bg-black/10 w-16 h-16 flex items-center justify-center rounded-none text-black">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-black text-black mb-2">VALUE SHIFT</h3>
            <p className="text-black/60 text-xs font-mono mb-8 font-bold">価値の転換</p>
            
            <div className="space-y-6 flex-grow relative z-10">
              <div className="border-l-2 border-black/10 pl-4">
                <p className="text-xs text-black/40 mb-1 font-bold">CONVENTIONAL</p>
                <p className="text-sm text-black/70 leading-relaxed font-medium">
                  予算のほとんどが「枠を作る作業」に消え、肝心のコンテンツ制作費はわずか10%。
                </p>
              </div>
              <div className="border-l-2 border-black pl-4">
                <p className="text-xs text-black mb-1 font-bold">OUR SOLUTION</p>
                <p className="text-sm text-black font-bold leading-relaxed">
                  予算の70%を<span className="bg-black text-white px-1">「コンテンツ」に集中投下</span>。プロカメラマンの撮影やライターによる言語化で、サイトの説得力を最大化します。
                </p>
              </div>
            </div>

            {/* Decoration */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-black/5 rounded-full blur-3xl" />
          </motion.div>
        </div>

        {/* Cost Comparison Graph */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="bg-white/5 border border-white/10 p-8 md:p-16"
          >
             <h3 className="text-2xl font-display font-bold text-white mb-16 text-center">COST ALLOCATION</h3>
             
             <div className="space-y-16">
               {/* Traditional */}
               <div>
                  <div className="flex justify-between text-sm mb-4">
                    <span className="text-muted-foreground font-bold">一般的な制作会社 (100万円の場合)</span>
                  </div>
                  <div className="h-16 md:h-24 flex w-full">
                    <div className="h-full bg-white/20 w-[70%] flex items-center justify-center border-r border-black/20 relative group">
                       <span className="text-xs md:text-sm font-bold text-white/80">デザイン・実装人件費 70%</span>
                       <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-[10px] text-white/40 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">作業代で消える</div>
                    </div>
                    <div className="h-full bg-white/10 w-[20%] flex items-center justify-center border-r border-black/20 relative group">
                       <span className="text-xs md:text-sm font-bold text-white/60">管理 20%</span>
                       <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-[10px] text-white/40 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">会議・資料代</div>
                    </div>
                    <div className="h-full bg-primary/20 w-[10%] flex items-center justify-center relative group">
                       <span className="text-[8px] md:text-[10px] leading-tight font-bold text-white/40 text-center px-1">コンテンツ<br/>制作費 10%</span>
                       <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-[10px] text-white/40 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">コンテンツ費用</div>
                    </div>
                  </div>
               </div>

               {/* Arrow Down */}
               <div className="flex justify-center">
                  <ArrowDown className="text-white/20 w-8 h-8 animate-bounce" />
               </div>

               {/* Our Solution */}
               <div>
                  <div className="flex justify-between text-sm mb-4">
                    <span className="text-primary font-bold">デザインエンジニアリング (100万円の場合)</span>
                  </div>
                  <div className="h-16 md:h-24 flex w-full relative">
                    <div className="h-full bg-white/20 w-[20%] flex items-center justify-center border-r border-black/20 relative group">
                       <span className="text-xs md:text-sm font-bold text-white/80">作業 20%</span>
                       <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-[10px] text-white/40 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">AIで効率化</div>
                    </div>
                    <div className="h-full bg-white/10 w-[10%] flex items-center justify-center border-r border-black/20 relative group">
                       <span className="text-xs md:text-sm font-bold text-white/60">管理 10%</span>
                       <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-[10px] text-white/40 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">最小化</div>
                    </div>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                      className="h-full bg-primary flex items-center justify-center relative overflow-hidden"
                    >
                       <span className="text-sm md:text-xl font-black text-black whitespace-nowrap px-4">コンテンツ制作費 70%</span>
                       <div className="absolute inset-0 bg-white/20 skew-x-[-20deg] translate-x-[-100%] animate-[shimmer_2s_infinite]" />
                    </motion.div>
                  </div>
                  <p className="text-right text-primary text-xs font-bold mt-4">
                    ↑ 写真・取材・企画に全力投資！
                  </p>
               </div>
             </div>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.0 }}
            className="text-2xl md:text-4xl font-bold leading-relaxed text-white"
          >
            「1.5ヶ月かけて作るものを、1週間で作る。<br/>
            浮いた時間と予算を、<br/>
            <span className="inline-block"><span className="text-primary">御社の魅力を伝える『表現』</span>に</span><span className="inline-block">使いませんか？」</span>
          </motion.p>
        </div>

      </div>
    </section>
  );
}
