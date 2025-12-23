import { SlideContainer } from './SlideLayout';
import { Zap, Sparkles, Crown } from 'lucide-react';

export function PlansOverviewSlide() {
  return (
    <SlideContainer>
      <div className="h-full flex flex-col justify-center">
        <h2 className="text-4xl font-display font-bold mb-16 text-center">3つの選べるプラン構成</h2>
        
        <div className="grid grid-cols-3 gap-8 h-[50vh]">
          {/* Starter */}
          <div className="relative group p-8 border border-white/10 bg-card/20 rounded-xl hover:bg-card/40 transition-all flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
            <div className="mb-auto">
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl font-serif italic text-blue-400">梅</span>
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Starter Plan</h3>
              <p className="text-muted-foreground text-sm mb-4">コスト重視・創業期向け</p>
              <div className="text-3xl font-bold font-display">50<span className="text-lg font-sans font-normal ml-1">万円</span></div>
            </div>
            <div className="p-4 bg-blue-500/10 rounded border border-blue-500/20 text-sm">
              <span className="text-blue-300 font-bold block mb-1">AI × デザイン</span>
              低コストでオリジナルデザインを実現
            </div>
          </div>

          {/* Standard */}
          <div className="relative group p-8 border border-emerald-500/30 bg-card/20 rounded-xl hover:bg-card/40 transition-all flex flex-col shadow-2xl shadow-emerald-900/10 transform scale-105 z-10">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
            <div className="mb-auto">
               <div className="flex justify-between items-start mb-6">
                <span className="text-4xl font-serif italic text-emerald-400">竹</span>
                <Sparkles className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Standard Plan</h3>
              <p className="text-muted-foreground text-sm mb-4">信頼獲得・採用強化向け</p>
              <div className="text-3xl font-bold font-display">100<span className="text-lg font-sans font-normal ml-1">万円</span></div>
            </div>
             <div className="p-4 bg-emerald-500/10 rounded border border-emerald-500/20 text-sm">
              <span className="text-emerald-300 font-bold block mb-1">プロフェッショナル制作</span>
              想いを伝える意図的な設計
            </div>
          </div>

          {/* Premium */}
          <div className="relative group p-8 border border-white/10 bg-card/20 rounded-xl hover:bg-card/40 transition-all flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
            <div className="mb-auto">
               <div className="flex justify-between items-start mb-6">
                <span className="text-4xl font-serif italic text-purple-400">松</span>
                <Crown className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
              <p className="text-muted-foreground text-sm mb-4">リブランディング・世界観</p>
              <div className="text-3xl font-bold font-display">180<span className="text-lg font-sans font-normal ml-1">万円〜</span></div>
            </div>
             <div className="p-4 bg-purple-500/10 rounded border border-purple-500/20 text-sm">
              <span className="text-purple-300 font-bold block mb-1">トータルブランディング</span>
              感情を動かす体験と演出
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
