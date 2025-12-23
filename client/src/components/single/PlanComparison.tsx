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
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 bg-card border border-white/10 p-10 relative group hover:bg-white/5 transition-colors cursor-pointer"
          >
             <div className="flex justify-between items-start mb-8">
               <h3 className="text-4xl font-display font-black text-white group-hover:text-primary transition-colors">SILVER</h3>
               <span className="font-mono text-xs text-muted-foreground border border-white/20 px-2 py-1">STARTER</span>
             </div>
             <p className="text-muted-foreground text-sm mb-12 h-10 font-bold">コストを抑えてオリジナルを持ちたい<br/>創業期・急募案件に最適</p>
             
             <div className="mb-12">
               <span className="text-6xl font-display font-black text-white">50</span>
               <span className="text-xl text-muted-foreground ml-2">万円</span>
             </div>

             <ul className="space-y-4 text-sm text-muted-foreground mb-4">
               <li className="flex items-center gap-3"><div className="w-1 h-1 bg-white" /> ページ数: ~5P</li>
               <li className="flex items-center gap-3"><div className="w-1 h-1 bg-white" /> デザイン: AI活用</li>
               <li className="flex items-center gap-3"><div className="w-1 h-1 bg-white" /> 素材: ご支給</li>
             </ul>
          </motion.div>

          {/* Gold - Highlight */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 bg-primary text-black p-12 relative lg:-mt-8 lg:mb-8 shadow-2xl shadow-primary/20 cursor-pointer"
          >
             <div className="absolute top-0 right-0 bg-black text-primary text-xs font-bold px-4 py-2">RECOMMENDED</div>
             
             <div className="flex justify-between items-start mb-8">
               <h3 className="text-5xl font-display font-black">GOLD</h3>
               <span className="font-mono text-xs text-black/80 border border-black/40 px-2 py-1 font-bold">STANDARD</span>
             </div>
             <p className="text-black/80 text-sm mb-12 h-10 font-bold">企業の想いを言葉と写真で伝えたい<br/>信頼獲得・ミスマッチ防止</p>
             
             <div className="mb-12 border-b border-black/10 pb-12">
               <span className="text-7xl font-display font-black">100</span>
               <span className="text-xl text-black/60 ml-2">万円</span>
             </div>

             <ul className="space-y-4 text-sm text-black mb-4 font-bold">
               <li className="flex items-center gap-3"><Check className="w-4 h-4" /> ページ数: ~10P</li>
               <li className="flex items-center gap-3"><Check className="w-4 h-4" /> デザイン: プロフェッショナル</li>
               <li className="flex items-center gap-3"><Check className="w-4 h-4" /> 素材: 撮影 (1日)</li>
             </ul>
          </motion.div>

          {/* Platinum */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4 bg-card border border-white/10 p-10 relative group hover:bg-white/5 transition-colors cursor-pointer"
          >
             <div className="flex justify-between items-start mb-8">
               <h3 className="text-4xl font-display font-black text-white group-hover:text-primary transition-colors">PLATINUM</h3>
               <span className="font-mono text-xs text-muted-foreground border border-white/20 px-2 py-1">PREMIUM</span>
             </div>
             <p className="text-muted-foreground text-sm mb-12 h-10 font-bold">圧倒的な世界観でファンを作りたい<br/>リブランディング・優秀層採用</p>
             
             <div className="mb-12">
               <span className="text-6xl font-display font-black text-white">180</span>
               <span className="text-xl text-muted-foreground ml-2">万円〜</span>
             </div>

             <ul className="space-y-4 text-sm text-muted-foreground mb-4">
               <li className="flex items-center gap-3"><div className="w-1 h-1 bg-white" /> ページ数: 15P~</li>
               <li className="flex items-center gap-3"><div className="w-1 h-1 bg-white" /> デザイン: フルスクラッチ</li>
               <li className="flex items-center gap-3"><div className="w-1 h-1 bg-white" /> 素材: 撮影 + 動画</li>
             </ul>
          </motion.div>

        </div>

        {/* Detailed Spec List (Full) */}
        <div className="border-t border-white/10 pt-20">
           <div className="flex items-center gap-4 mb-12">
             <div className="h-[2px] w-12 bg-primary" />
             <h3 className="font-display font-bold text-2xl text-white">DETAILED SPECIFICATION</h3>
           </div>
           
           <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-6 font-mono text-xs text-muted-foreground font-normal w-1/4">ITEM</th>
                  <th className="p-6 font-display font-bold text-lg w-1/4">Silver</th>
                  <th className="p-6 font-display font-bold text-lg w-1/4 text-primary bg-primary/5">Gold</th>
                  <th className="p-6 font-display font-bold text-lg w-1/4">Platinum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {/* Design */}
                <tr className="group hover:bg-white/5 transition-colors">
                  <td className="p-6 font-medium text-white/60">デザイン</td>
                  <td className="p-6">
                    <strong className="block mb-2 text-white text-lg">AI活用オリジナル</strong>
                    <span className="text-muted-foreground text-xs leading-relaxed block">
                      AIによるKV生成<br/>＋デザイナー調整
                    </span>
                  </td>
                  <td className="p-6 bg-primary/5">
                    <strong className="block mb-2 text-primary text-lg">デザイナー制作</strong>
                    <span className="text-muted-foreground text-xs leading-relaxed block">
                      KV ＋ 下層MV<br/>(プロによる意図的な設計)
                    </span>
                  </td>
                  <td className="p-6">
                    <strong className="block mb-2 text-white text-lg">フルスクラッチ</strong>
                    <span className="text-muted-foreground text-xs leading-relaxed block">
                      アートディレクション<br/>全ページ独自演出・動画
                    </span>
                  </td>
                </tr>
                {/* Writing */}
                <tr className="group hover:bg-white/5 transition-colors">
                  <td className="p-6 font-medium text-white/60">ライティング</td>
                  <td className="p-6 text-muted-foreground">ご支給<br/>(貴社でご用意)</td>
                  <td className="p-6 bg-primary/5">
                    <strong className="block mb-2 text-primary text-lg">新規ライティング</strong>
                    <span className="text-muted-foreground text-xs leading-relaxed block">
                      メッセージ・強み等<br/>※事業データはリライト
                    </span>
                  </td>
                  <td className="p-6">
                    <strong className="block mb-2 text-white text-lg">取材・完全代行</strong>
                    <span className="text-muted-foreground text-xs leading-relaxed block">
                      プロの編集・構成<br/>インタビュー取材含む
                    </span>
                  </td>
                </tr>
                {/* Photo */}
                <tr className="group hover:bg-white/5 transition-colors">
                  <td className="p-6 font-medium text-white/60">写真素材</td>
                  <td className="p-6 text-muted-foreground">ご支給<br/>(貴社でご用意 or 素材集)</td>
                  <td className="p-6 bg-primary/5">
                    <strong className="block mb-2 text-primary text-lg">プロカメラマン撮影</strong>
                    <span className="text-muted-foreground text-xs leading-relaxed block">
                      1日撮影 / 社員・外観等
                    </span>
                  </td>
                  <td className="p-6">
                    <strong className="block mb-2 text-white text-lg">撮影 ＋ 動画制作</strong>
                    <span className="text-muted-foreground text-xs leading-relaxed block">
                      プロの演出・ディレクション
                    </span>
                  </td>
                </tr>
                {/* Effort */}
                <tr className="group hover:bg-white/5 transition-colors">
                  <td className="p-6 font-medium text-white/60">お客様負担</td>
                  <td className="p-6">
                    <span className="inline-block px-2 py-1 bg-white/10 rounded mb-2 font-bold text-xs">高</span><br/>
                    <span className="text-xs text-muted-foreground">写真・原稿の準備が必要</span>
                  </td>
                  <td className="p-6 bg-primary/5">
                    <span className="inline-block px-2 py-1 bg-primary/20 text-primary rounded mb-2 font-bold text-xs">中</span><br/>
                    <span className="text-xs text-muted-foreground">取材・撮影日の調整</span>
                  </td>
                  <td className="p-6">
                    <span className="inline-block px-2 py-1 bg-white text-black rounded mb-2 font-bold text-xs">低</span><br/>
                    <span className="text-xs text-muted-foreground">企画から丸投げ可能</span>
                  </td>
                </tr>
              </tbody>
            </table>
           </div>
        </div>
      </div>
    </section>
  );
}
