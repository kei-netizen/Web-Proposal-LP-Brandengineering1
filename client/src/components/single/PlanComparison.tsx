import { motion } from 'framer-motion';
import officeBg from '@assets/generated_images/dark_moody_creative_office_meeting_with_red_accents.png';

export function PlanComparison() {
  return (
    <section className="bg-background relative py-32 border-b border-white/10">
      <div className="absolute inset-0 z-0">
         <img src={officeBg} className="w-full h-full object-cover opacity-10 grayscale" />
         <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 border-l-4 border-primary pl-8">
           <h2 className="text-6xl font-display font-bold text-white mb-6 leading-none">
             3<span className="text-primary">PLANS</span>
           </h2>
           <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
             ご予算と目的に合わせて選べる3つのプラン。<br/>
             全プラン共通で<strong className="text-white">「オリジナルデザイン」</strong>を提供します。<br/>
             大きな違いは<span className="text-primary font-bold">「KVの制作手法」</span>と<span className="text-primary font-bold">「コンテンツ制作の深さ」</span>です。
           </p>
        </div>

        {/* 3 Columns */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {/* Starter */}
          <div className="p-10 border border-white/10 bg-card hover:border-primary/50 transition-all duration-300 group">
             <div className="text-xs font-mono text-white/50 mb-6 tracking-widest">STARTER</div>
             <h3 className="text-5xl font-serif italic text-white mb-4">梅</h3>
             <p className="text-sm text-white/70 mb-10 h-10">コストを抑えてオリジナルを持ちたい<br/>創業期・急募案件に最適</p>
             <div className="text-6xl font-display font-bold text-white mb-10 group-hover:text-primary transition-colors">50<span className="text-xl font-sans font-normal ml-2">万円</span></div>
             
             <ul className="space-y-4 border-t border-white/10 pt-8 text-sm text-muted-foreground">
               <li className="flex items-start"><span className="text-primary mr-2">●</span>ページ数: 必要最小限 (〜5P)</li>
               <li className="flex items-start"><span className="text-primary mr-2">●</span>デザイン: AI活用オリジナル</li>
               <li className="flex items-start"><span className="text-primary mr-2">●</span>素材: ご支給</li>
             </ul>
          </div>

          {/* Standard */}
          <div className="p-10 border border-primary bg-primary/5 relative transform lg:-translate-y-4 shadow-2xl shadow-primary/10">
             <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1">RECOMMENDED</div>
             <div className="text-xs font-mono text-primary mb-6 tracking-widest">STANDARD</div>
             <h3 className="text-5xl font-serif italic text-white mb-4">竹</h3>
             <p className="text-sm text-white/70 mb-10 h-10">企業の想いを言葉と写真で伝えたい<br/>信頼獲得・ミスマッチ防止</p>
             <div className="text-6xl font-display font-bold text-white mb-10 text-primary">100<span className="text-xl font-sans font-normal ml-2 text-white">万円</span></div>
             
             <ul className="space-y-4 border-t border-primary/30 pt-8 text-sm text-white/80">
               <li className="flex items-start"><span className="text-primary mr-2">●</span>ページ数: 標準構成 (〜10P)</li>
               <li className="flex items-start"><span className="text-primary mr-2">●</span>デザイン: デザイナー制作 (KV+MV)</li>
               <li className="flex items-start"><span className="text-primary mr-2">●</span>素材: プロカメラマン撮影 (1日)</li>
             </ul>
          </div>

          {/* Premium */}
          <div className="p-10 border border-white/10 bg-card hover:border-primary/50 transition-all duration-300 group">
             <div className="text-xs font-mono text-white/50 mb-6 tracking-widest">PREMIUM</div>
             <h3 className="text-5xl font-serif italic text-white mb-4">松</h3>
             <p className="text-sm text-white/70 mb-10 h-10">圧倒的な世界観でファンを作りたい<br/>リブランディング・優秀層採用</p>
             <div className="text-6xl font-display font-bold text-white mb-10 group-hover:text-primary transition-colors">180<span className="text-xl font-sans font-normal ml-2">万円〜</span></div>
             
             <ul className="space-y-4 border-t border-white/10 pt-8 text-sm text-muted-foreground">
               <li className="flex items-start"><span className="text-primary mr-2">●</span>ページ数: 充実構成 (15P〜)</li>
               <li className="flex items-start"><span className="text-primary mr-2">●</span>デザイン: フルスクラッチ・動画演出</li>
               <li className="flex items-start"><span className="text-primary mr-2">●</span>素材: 撮影 ＋ 動画制作</li>
             </ul>
          </div>
        </div>

        {/* Detailed Table */}
        <div className="border border-white/10 bg-card overflow-hidden">
          <div className="bg-white/5 p-6 border-b border-white/10 flex justify-between items-center">
            <h3 className="font-bold text-xl tracking-tight">DETAILED SPECIFICATION</h3>
            <span className="text-xs font-mono text-muted-foreground">SCROLL FOR MORE →</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-white/10 bg-black">
                  <th className="p-6 font-mono text-xs text-muted-foreground font-normal w-1/4">ITEM</th>
                  <th className="p-6 font-display font-bold text-lg w-1/4">STARTER (梅)</th>
                  <th className="p-6 font-display font-bold text-lg w-1/4 text-primary bg-primary/5">STANDARD (竹)</th>
                  <th className="p-6 font-display font-bold text-lg w-1/4">PREMIUM (松)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {/* Design */}
                <tr className="group hover:bg-white/2">
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
                <tr className="group hover:bg-white/2">
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
                <tr className="group hover:bg-white/2">
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
                <tr className="group hover:bg-white/2">
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
