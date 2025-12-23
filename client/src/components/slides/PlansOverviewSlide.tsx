import { SlideContainer } from './SlideLayout';
import officeBg from '@assets/generated_images/dark_moody_creative_office_meeting_with_red_accents.png';

export function PlansOverviewSlide() {
  return (
    <SlideContainer>
      <div className="absolute inset-0 z-0">
        <img src={officeBg} className="w-full h-full object-cover opacity-20 grayscale" />
      </div>

      <div className="relative z-10 w-full h-full flex items-stretch">
        {/* Title Column */}
        <div className="w-1/4 h-full border-r border-white/10 p-12 flex flex-col justify-end bg-black/80 backdrop-blur-sm">
           <h2 className="text-6xl font-display font-bold text-white mb-6 leading-none">
             3<span className="text-primary">PLANS</span>
           </h2>
           <p className="text-muted-foreground text-sm leading-relaxed">
             ご予算と目的に合わせて選べる3つのプラン。<br/>
             全てのプランで「オリジナルデザイン」を保証します。
           </p>
        </div>

        {/* Plan Columns */}
        <div className="w-3/4 flex divide-x divide-white/10">
          
          {/* Starter */}
          <div className="flex-1 p-12 flex flex-col justify-between hover:bg-white/5 transition-colors group">
             <div>
               <div className="text-xs font-mono text-white/50 mb-4">STARTER</div>
               <h3 className="text-4xl font-serif italic text-white mb-2">梅</h3>
               <p className="text-sm text-white/70 mb-8">コスト重視・創業期向け</p>
               <div className="text-5xl font-display font-bold text-white group-hover:text-primary transition-colors">50<span className="text-lg">万</span></div>
             </div>
             <div className="border-t border-white/20 pt-8">
               <p className="font-bold text-lg mb-2">AI × デザイン</p>
               <p className="text-xs text-muted-foreground leading-relaxed">
                 AIによるベース生成でコストを圧縮。<br/>
                 スピードと品質を両立。
               </p>
             </div>
          </div>

          {/* Standard */}
          <div className="flex-1 bg-primary/10 p-12 flex flex-col justify-between relative group overflow-hidden">
             <div className="absolute top-0 right-0 p-2 bg-primary text-black text-xs font-bold">RECOMMENDED</div>
             <div>
               <div className="text-xs font-mono text-primary mb-4">STANDARD</div>
               <h3 className="text-4xl font-serif italic text-white mb-2">竹</h3>
               <p className="text-sm text-white/70 mb-8">信頼獲得・採用強化</p>
               <div className="text-5xl font-display font-bold text-white group-hover:text-primary transition-colors">100<span className="text-lg">万</span></div>
             </div>
             <div className="border-t border-primary/30 pt-8">
               <p className="font-bold text-lg mb-2 text-primary">プロフェッショナル</p>
               <p className="text-xs text-muted-foreground leading-relaxed">
                 意図的な設計とライティング。<br/>
                 企業の想いを正しく伝える。
               </p>
             </div>
          </div>

          {/* Premium */}
          <div className="flex-1 p-12 flex flex-col justify-between hover:bg-white/5 transition-colors group">
             <div>
               <div className="text-xs font-mono text-white/50 mb-4">PREMIUM</div>
               <h3 className="text-4xl font-serif italic text-white mb-2">松</h3>
               <p className="text-sm text-white/70 mb-8">リブランディング</p>
               <div className="text-5xl font-display font-bold text-white group-hover:text-primary transition-colors">180<span className="text-lg">万〜</span></div>
             </div>
             <div className="border-t border-white/20 pt-8">
               <p className="font-bold text-lg mb-2">ブランディング</p>
               <p className="text-xs text-muted-foreground leading-relaxed">
                 動画・取材・独自演出。<br/>
                 圧倒的な世界観の構築。
               </p>
             </div>
          </div>

        </div>
      </div>
    </SlideContainer>
  );
}
