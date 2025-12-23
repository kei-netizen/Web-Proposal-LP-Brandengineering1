import { SlideContainer } from './SlideLayout';
import { Check, X } from 'lucide-react';

export function DetailedComparisonSlide() {
  return (
    <SlideContainer>
      <div className="h-full flex flex-col">
        <h2 className="text-3xl font-display font-bold mb-8">機能・制作範囲の詳細比較</h2>
        
        <div className="flex-grow bg-card/30 rounded-xl border border-white/10 overflow-hidden text-sm">
           <div className="grid grid-cols-4 bg-white/5 border-b border-white/10 font-bold text-base">
             <div className="p-6 text-muted-foreground">項目</div>
             <div className="p-6 text-blue-400 border-l border-white/5">梅 (Starter)</div>
             <div className="p-6 text-emerald-400 border-l border-white/5">竹 (Standard)</div>
             <div className="p-6 text-purple-400 border-l border-white/5">松 (Premium)</div>
           </div>

           {/* Design */}
           <div className="grid grid-cols-4 border-b border-white/5 items-stretch">
             <div className="p-6 font-medium text-muted-foreground bg-white/2">デザイン</div>
             <div className="p-6 border-l border-white/5">
               <strong className="block mb-2 text-white">AI活用オリジナル</strong>
               <span className="text-muted-foreground text-xs leading-relaxed">
                 画像生成AIでベースを作成しデザイナーが調整。低コストで独自性を確保。
               </span>
             </div>
             <div className="p-6 border-l border-white/5 bg-emerald-900/5">
               <strong className="block mb-2 text-white">デザイナー制作</strong>
               <span className="text-muted-foreground text-xs leading-relaxed">
                 意図的な視線誘導と信頼感を醸成するプロのデザイン設計。
               </span>
             </div>
             <div className="p-6 border-l border-white/5 bg-purple-900/5">
               <strong className="block mb-2 text-white">フルスクラッチ</strong>
               <span className="text-muted-foreground text-xs leading-relaxed">
                 アートディレクションに基づく独自の演出・アニメーション・動画。
               </span>
             </div>
           </div>

           {/* Content */}
           <div className="grid grid-cols-4 border-b border-white/5 items-stretch">
             <div className="p-6 font-medium text-muted-foreground bg-white/2">ライティング</div>
             <div className="p-6 border-l border-white/5">
               <span className="text-muted-foreground">ご支給</span>
             </div>
             <div className="p-6 border-l border-white/5 bg-emerald-900/5">
               <strong className="block mb-2 text-white">新規＋リライト</strong>
               <span className="text-muted-foreground text-xs leading-relaxed">
                 キャッチコピー等は新規作成。事業情報はWeb向けに整文。
               </span>
             </div>
             <div className="p-6 border-l border-white/5 bg-purple-900/5">
               <strong className="block mb-2 text-white">取材・完全代行</strong>
               <span className="text-muted-foreground text-xs leading-relaxed">
                 プロの編集者がインタビューを行いストーリーを構築。
               </span>
             </div>
           </div>

           {/* Photo */}
           <div className="grid grid-cols-4 border-b border-white/5 items-stretch">
             <div className="p-6 font-medium text-muted-foreground bg-white/2">写真素材</div>
             <div className="p-6 border-l border-white/5">
               <span className="text-muted-foreground">ご支給</span>
             </div>
             <div className="p-6 border-l border-white/5 bg-emerald-900/5">
               <strong className="block mb-2 text-white">プロ撮影 (1日)</strong>
               <span className="text-muted-foreground text-xs leading-relaxed">
                 社員・オフィス・外観等を高品質に撮影。
               </span>
             </div>
             <div className="p-6 border-l border-white/5 bg-purple-900/5">
               <strong className="block mb-2 text-white">撮影 ＋ 動画</strong>
               <span className="text-muted-foreground text-xs leading-relaxed">
                 スチール撮影に加え、ブランドムービーの演出・制作も実施。
               </span>
             </div>
           </div>

           {/* Effort */}
           <div className="grid grid-cols-4 items-stretch">
             <div className="p-6 font-medium text-muted-foreground bg-white/2">お客様負担</div>
             <div className="p-6 border-l border-white/5">
               <span className="inline-block px-2 py-1 bg-white/10 rounded text-xs mb-2">高</span><br/>
               <span className="text-xs text-muted-foreground">原稿・素材の準備が必要</span>
             </div>
             <div className="p-6 border-l border-white/5 bg-emerald-900/5">
               <span className="inline-block px-2 py-1 bg-white/10 rounded text-xs mb-2">中</span><br/>
               <span className="text-xs text-muted-foreground">取材対応・事実確認のみ</span>
             </div>
             <div className="p-6 border-l border-white/5 bg-purple-900/5">
               <span className="inline-block px-2 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded text-xs mb-2">低</span><br/>
               <span className="text-xs text-muted-foreground">企画から丸投げ可能</span>
             </div>
           </div>
        </div>
      </div>
    </SlideContainer>
  );
}
