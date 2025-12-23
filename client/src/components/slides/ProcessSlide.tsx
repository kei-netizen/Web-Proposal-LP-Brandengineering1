import { SlideContainer } from './SlideLayout';

export function ProcessSlide() {
  return (
    <SlideContainer>
      <div className="w-full h-full flex flex-col">
        {/* Header */}
        <div className="h-1/5 px-12 flex items-center border-b border-white/10">
          <h2 className="text-5xl font-display font-bold text-white tracking-tight">
            PROCESS <span className="text-primary">&</span> METHOD
          </h2>
        </div>

        {/* Content */}
        <div className="h-4/5 flex">
          {/* AI */}
          <div className="flex-1 border-r border-white/10 p-12 relative group overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-white/20 group-hover:bg-primary transition-colors" />
             <span className="text-[12rem] font-bold text-white/5 absolute -bottom-10 -right-10 leading-none select-none">AI</span>
             
             <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-primary transition-colors">AI Hybrid</h3>
             <p className="text-white/70 text-sm leading-7 relative z-10">
               最新の<strong className="text-white">画像生成AI</strong>を活用し、KVのベースを作成。
               デザイナーがWeb用に調整・配置することで、ゼロイチの工数を削減。
               <br/><br/>
               「低コスト」ながら「他社と被らない」オリジナルデザインを実現します。
             </p>
          </div>

          {/* Human */}
          <div className="flex-1 border-r border-white/10 p-12 relative group overflow-hidden bg-white/5">
             <div className="absolute top-0 left-0 w-full h-1 bg-white/40 group-hover:bg-primary transition-colors" />
             <span className="text-[12rem] font-bold text-white/5 absolute -bottom-10 -right-10 leading-none select-none">PRO</span>
             
             <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-primary transition-colors">Professional</h3>
             <p className="text-white/70 text-sm leading-7 relative z-10">
               経験豊富なデザイナーによる<strong className="text-white">意図的な設計</strong>。
               「信頼感」「温かみ」など、AIでは難しい微妙なニュアンスをコントロールします。
               <br/><br/>
               ターゲット層に響く、王道のブランディングアプローチです。
             </p>
          </div>

          {/* Art */}
          <div className="flex-1 p-12 relative group overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-white/60 group-hover:bg-primary transition-colors" />
             <span className="text-[12rem] font-bold text-white/5 absolute -bottom-10 -right-10 leading-none select-none">ART</span>
             
             <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-primary transition-colors">Art Direction</h3>
             <p className="text-white/70 text-sm leading-7 relative z-10">
               アートディレクターが参画し、静止画だけでなく<strong className="text-white">動画・アニメーション</strong>を含めたトータル体験を設計。
               <br/><br/>
               訪問者の感情を動かす、圧倒的な世界観を構築します。
             </p>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
