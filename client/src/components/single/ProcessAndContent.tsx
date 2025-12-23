import { motion } from 'framer-motion';

export function ProcessAndContent() {
  return (
    <section className="bg-background relative py-32 border-b border-white/10 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Dynamic Header */}
        <div className="flex flex-col md:flex-row mb-32 relative">
           <div className="w-full md:w-1/2">
             <h2 className="text-6xl md:text-8xl font-display font-black text-white leading-none">
               PROCESS<br/>
               <span className="text-primary">&</span> METHOD
             </h2>
           </div>
           <div className="w-full md:w-1/2 flex items-end justify-end">
             <div className="max-w-md text-right">
                <p className="text-muted-foreground text-lg">
                  クリエイティブの質を決めるのは「プロセス」です。<br/>
                  AIのスピードか、人の情緒か、アートの衝撃か。
                </p>
             </div>
           </div>
           <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 mt-12" />
        </div>

        {/* Diagonal Layout for Process */}
        <div className="grid md:grid-cols-3 gap-0 mb-32 border border-white/10">
           {/* Silver */}
           <div className="group relative border-r border-white/10 p-12 hover:bg-white/5 transition-all duration-500">
              <span className="text-9xl font-display font-black text-white/5 absolute top-0 left-0 leading-none group-hover:text-primary/10 transition-colors">01</span>
              <div className="relative z-10 pt-20">
                 <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">AI HYBRID</h3>
                 <p className="text-sm text-muted-foreground leading-7">
                   <strong className="text-white block mb-2">SILVER PLAN</strong>
                   最新の画像生成AIでベースを作成し、デザイナーが調整。
                   ゼロイチの工数を削減し、低コストで独自性を確保します。
                 </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
           </div>

           {/* Gold */}
           <div className="group relative border-r border-white/10 p-12 bg-white/5">
              <span className="text-9xl font-display font-black text-white/5 absolute top-0 left-0 leading-none group-hover:text-primary/10 transition-colors">02</span>
              <div className="relative z-10 pt-20">
                 <h3 className="text-3xl font-bold text-primary mb-4">PROFESSIONAL</h3>
                 <p className="text-sm text-muted-foreground leading-7">
                   <strong className="text-white block mb-2">GOLD PLAN</strong>
                   経験豊富なデザイナーによる意図的な設計。
                   信頼感や温かみといった微妙なニュアンスをコントロールします。
                 </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-100 transition-transform duration-500" />
           </div>

           {/* Platinum */}
           <div className="group relative p-12 hover:bg-white/5 transition-all duration-500">
              <span className="text-9xl font-display font-black text-white/5 absolute top-0 left-0 leading-none group-hover:text-primary/10 transition-colors">03</span>
              <div className="relative z-10 pt-20">
                 <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">ART DIRECTION</h3>
                 <p className="text-sm text-muted-foreground leading-7">
                   <strong className="text-white block mb-2">PLATINUM PLAN</strong>
                   静止画だけでなく、動画・アニメーションを含めたトータル体験。
                   圧倒的な世界観でファンを作ります。
                 </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
           </div>
        </div>

        {/* Content Strategy - Horizontal Scroll Feel */}
        <div className="bg-primary text-black p-12 md:p-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-black/5 skew-x-[-20deg]" />
           
           <h2 className="text-5xl md:text-6xl font-display font-black mb-12 relative z-10">
             CONTENT STRATEGY
           </h2>
           
           <div className="grid md:grid-cols-3 gap-12 relative z-10">
              <div>
                <h4 className="font-bold text-2xl mb-4 border-b-2 border-black pb-2">Silver</h4>
                <p className="font-bold text-sm mb-2 opacity-60">CLIENT PROVIDED</p>
                <p className="text-sm leading-relaxed font-medium">
                  お客様からの完全支給。<br/>
                  コスト重視で、社内にライティングリソースがある場合に最適です。
                </p>
              </div>
              <div>
                <h4 className="font-bold text-2xl mb-4 border-b-2 border-black pb-2">Gold</h4>
                <p className="font-bold text-sm mb-2 opacity-60">REWRITE & CREATE</p>
                <p className="text-sm leading-relaxed font-medium">
                  キャッチコピー等は新規作成。<br/>
                  事実情報はWeb向けに読みやすくリライトします。
                </p>
              </div>
              <div>
                <h4 className="font-bold text-2xl mb-4 border-b-2 border-black pb-2">Platinum</h4>
                <p className="font-bold text-sm mb-2 opacity-60">INTERVIEW & STORY</p>
                <p className="text-sm leading-relaxed font-medium">
                  プロによる取材・インタビュー。<br/>
                  想いを引き出し、魅力的なストーリーを構築します。
                </p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
