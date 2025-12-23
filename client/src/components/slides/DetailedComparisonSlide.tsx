import { SlideContainer } from './SlideLayout';

export function DetailedComparisonSlide() {
  return (
    <SlideContainer className="bg-white text-black">
      <div className="w-full h-full flex">
         {/* Sidebar Header */}
         <div className="w-1/6 bg-black text-white p-8 flex flex-col justify-center border-r border-white/10">
            <h2 className="text-4xl font-display font-bold vertical-text text-vertical tracking-widest h-full flex items-center">
              SPECIFICATION
            </h2>
         </div>

         {/* Content Area */}
         <div className="w-5/6 p-12 flex flex-col justify-center">
           <div className="grid grid-cols-4 gap-0 border border-black/10 text-sm">
              {/* Header Row */}
              <div className="p-4 font-bold bg-black/5 border-b border-black/10">ITEM</div>
              <div className="p-4 font-bold bg-black/5 border-b border-black/10 border-l">STARTER (梅)</div>
              <div className="p-4 font-bold bg-primary text-white border-b border-black/10 border-l border-primary">STANDARD (竹)</div>
              <div className="p-4 font-bold bg-black text-white border-b border-black/10 border-l border-black">PREMIUM (松)</div>

              {/* Design Row */}
              <div className="p-4 font-bold border-b border-black/10 flex items-center bg-black/5">デザイン</div>
              <div className="p-4 border-b border-black/10 border-l">
                <span className="font-bold block text-lg mb-1">AI Original</span>
                <span className="text-xs text-gray-500">AIベース生成 + 調整</span>
              </div>
              <div className="p-4 border-b border-black/10 border-l bg-primary/5">
                <span className="font-bold block text-lg mb-1 text-primary">Professional</span>
                <span className="text-xs text-gray-600">意図的設計・信頼感</span>
              </div>
              <div className="p-4 border-b border-black/10 border-l bg-black/5">
                <span className="font-bold block text-lg mb-1">Art Direction</span>
                <span className="text-xs text-gray-600">独自演出・動画・体験</span>
              </div>

              {/* Content Row */}
              <div className="p-4 font-bold border-b border-black/10 flex items-center bg-black/5">ライティング</div>
              <div className="p-4 border-b border-black/10 border-l">
                 <span className="text-gray-400">ご支給</span>
              </div>
              <div className="p-4 border-b border-black/10 border-l bg-primary/5">
                 <span className="font-bold block text-lg mb-1 text-primary">Rewrite</span>
                 <span className="text-xs text-gray-600">新規作成 + 整文</span>
              </div>
              <div className="p-4 border-b border-black/10 border-l bg-black/5">
                 <span className="font-bold block text-lg mb-1">Interview</span>
                 <span className="text-xs text-gray-600">取材・編集・構成代行</span>
              </div>

              {/* Photo Row */}
              <div className="p-4 font-bold border-b border-black/10 flex items-center bg-black/5">撮影</div>
              <div className="p-4 border-b border-black/10 border-l">
                 <span className="text-gray-400">ご支給</span>
              </div>
              <div className="p-4 border-b border-black/10 border-l bg-primary/5">
                 <span className="font-bold block text-lg mb-1 text-primary">Pro Photo</span>
                 <span className="text-xs text-gray-600">1日撮影 (社員/外観)</span>
              </div>
              <div className="p-4 border-b border-black/10 border-l bg-black/5">
                 <span className="font-bold block text-lg mb-1">Photo + Video</span>
                 <span className="text-xs text-gray-600">スチール + ムービー</span>
              </div>

              {/* Effort Row */}
              <div className="p-4 font-bold flex items-center bg-black/5">お客様負担</div>
              <div className="p-4 border-l">
                 <span className="bg-black/10 px-2 py-1 text-xs font-bold rounded">高</span>
                 <span className="ml-2 text-xs text-gray-500">原稿準備要</span>
              </div>
              <div className="p-4 border-l bg-primary/5">
                 <span className="bg-primary/20 text-primary px-2 py-1 text-xs font-bold rounded">中</span>
                 <span className="ml-2 text-xs text-gray-600">取材のみ</span>
              </div>
              <div className="p-4 border-l bg-black/5">
                 <span className="bg-black text-white px-2 py-1 text-xs font-bold rounded">低</span>
                 <span className="ml-2 text-xs text-gray-600">丸投げ可</span>
              </div>
           </div>
         </div>
      </div>
    </SlideContainer>
  );
}
