import { SlideContainer } from './SlideLayout';
import { motion } from 'framer-motion';

export function ProcessSlide() {
  return (
    <SlideContainer>
      <div className="h-full flex flex-col">
         <h2 className="text-3xl font-display font-bold mb-12">デザインプロセスの違い</h2>

         <div className="grid grid-cols-3 gap-8 flex-grow">
           {/* AI Process */}
           <div className="space-y-6">
             <div className="aspect-video bg-card/30 rounded-lg border border-white/10 relative overflow-hidden group">
               <div className="absolute inset-0 bg-blue-500/10" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center">
                   <div className="text-4xl font-bold text-white/20 mb-2">AI</div>
                   <div className="text-xs font-mono text-blue-300">GENERATION</div>
                 </div>
               </div>
             </div>
             <div>
               <h3 className="text-xl font-bold text-blue-400 mb-2">梅: AIハイブリッド制作</h3>
               <p className="text-sm text-muted-foreground leading-relaxed">
                 最新の画像生成AIでキービジュアルのベースを作成し、デザイナーがWeb用に調整します。
                 ゼロから描く工数を削減し、<strong className="text-white">「低コスト・短納期」</strong>と<strong className="text-white">「オリジナル性」</strong>を両立させます。
               </p>
             </div>
           </div>

           {/* Pro Process */}
           <div className="space-y-6">
             <div className="aspect-video bg-card/30 rounded-lg border border-white/10 relative overflow-hidden group">
               <div className="absolute inset-0 bg-emerald-500/10" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center">
                   <div className="text-4xl font-bold text-white/20 mb-2">HUMAN</div>
                   <div className="text-xs font-mono text-emerald-300">CRAFTSMANSHIP</div>
                 </div>
               </div>
             </div>
             <div>
               <h3 className="text-xl font-bold text-emerald-400 mb-2">竹: プロフェッショナル制作</h3>
               <p className="text-sm text-muted-foreground leading-relaxed">
                 経験豊富なデザイナーが「信頼感」「温かみ」など、言語化しにくいニュアンスをデザインに落とし込みます。
                 <strong className="text-white">「ターゲットに響く」</strong>意図的なビジュアル設計を行います。
               </p>
             </div>
           </div>

           {/* Art Process */}
           <div className="space-y-6">
             <div className="aspect-video bg-card/30 rounded-lg border border-white/10 relative overflow-hidden group">
               <div className="absolute inset-0 bg-purple-500/10" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center">
                   <div className="text-4xl font-bold text-white/20 mb-2">ART</div>
                   <div className="text-xs font-mono text-purple-300">DIRECTION</div>
                 </div>
               </div>
             </div>
             <div>
               <h3 className="text-xl font-bold text-purple-400 mb-2">松: トータルブランディング</h3>
               <p className="text-sm text-muted-foreground leading-relaxed">
                 アートディレクターが参画し、静止画だけでなく<strong className="text-white">「動画」「アニメーション」「音」</strong>を含めた体験を設計。
                 ブランドの格を一段引き上げる圧倒的な世界観を構築します。
               </p>
             </div>
           </div>
         </div>
      </div>
    </SlideContainer>
  );
}
