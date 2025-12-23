import { motion } from 'framer-motion';

export function ProcessAndContent() {
  return (
    <section className="py-32 bg-background relative border-b border-white/10">
      <div className="container mx-auto px-6">
        
        {/* Design Process */}
        <div className="mb-32">
          <h2 className="text-5xl font-display font-bold text-white mb-16 tracking-tight">
            DESIGN PROCESS <span className="text-primary stroke-text text-transparent">DIFFERENCE</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
             {/* Silver */}
             <div className="relative group">
                <div className="aspect-video bg-white/5 border border-white/10 mb-8 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent opacity-50" />
                   <span className="absolute bottom-4 left-4 text-6xl font-display font-bold text-white/10">AI</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                  <span className="text-sm px-2 py-1 border border-white/20 rounded-full font-serif italic text-muted-foreground">Silver</span>
                  AIハイブリッド制作
                </h3>
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    <strong className="text-white block mb-1">制作手法:</strong>
                    最新の画像生成AIを活用してキービジュアル（KV）のベースを作成し、デザイナーがWebサイト用に調整・配置します。
                  </p>
                  <p>
                    <strong className="text-white block mb-1">メリット:</strong>
                    ゼロから描く工数を削減することで、<strong className="text-white bg-white/10 px-1">低コストながら「他社と被らないオリジナルデザイン」</strong>を実現します。
                  </p>
                  <p className="text-xs text-white/40">
                    注意点: 細かい描写の指定修正は難しい場合があります（AIの特性上）。
                  </p>
                </div>
             </div>

             {/* Gold */}
             <div className="relative group">
                <div className="aspect-video bg-white/5 border border-primary/50 mb-8 overflow-hidden relative shadow-2xl shadow-primary/10">
                   <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-50" />
                   <span className="absolute bottom-4 left-4 text-6xl font-display font-bold text-primary/20">PRO</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary flex items-center gap-3">
                  <span className="text-sm px-2 py-1 border border-primary/20 rounded-full font-serif italic text-primary">Gold</span>
                  プロフェッショナル制作
                </h3>
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    <strong className="text-white block mb-1">制作手法:</strong>
                    経験豊富なデザイナーが、御社のターゲット層や伝えたいイメージをヒアリングし、意図を持ってKVと下層MVを設計します。
                  </p>
                  <p>
                    <strong className="text-white block mb-1">メリット:</strong>
                    「信頼感」「温かみ」「誠実さ」など、微妙なニュアンスをデザインで正確に表現できます。
                  </p>
                </div>
             </div>

             {/* Platinum */}
             <div className="relative group">
                <div className="aspect-video bg-white/5 border border-white/10 mb-8 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-transparent opacity-50" />
                   <span className="absolute bottom-4 left-4 text-6xl font-display font-bold text-white/10">ART</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                  <span className="text-sm px-2 py-1 border border-white/20 rounded-full font-serif italic text-muted-foreground">Platinum</span>
                  ブランディング制作
                </h3>
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    <strong className="text-white block mb-1">制作手法:</strong>
                    アートディレクターが参画し、動画、アニメーション、インタラクションを含めたトータルブランディングを行います。
                  </p>
                  <p>
                    <strong className="text-white block mb-1">メリット:</strong>
                    訪問者の感情を動かす<strong className="text-white bg-white/10 px-1">「体験」としてのWebサイト</strong>を提供します。
                  </p>
                </div>
             </div>
          </div>
        </div>

        {/* Content Strategy */}
        <div>
          <h2 className="text-5xl font-display font-bold text-white mb-16 tracking-tight">
            CONTENT STRATEGY <span className="text-primary stroke-text text-transparent">DIFFERENCE</span>
          </h2>

          <div className="grid md:grid-cols-3 divide-x divide-white/10 border-t border-b border-white/10">
             {/* Silver */}
             <div className="p-8 hover:bg-white/2 transition-colors">
                <div className="text-xl font-bold mb-2 text-white">Silverプラン</div>
                <div className="text-xs text-white/40 mb-6 font-mono">CLIENT PROVIDED</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-white block mb-2">原稿:</strong>
                  基本的にお客様からの完全支給となります。
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-white block mb-2">適した用途:</strong>
                  すでにパンフレットなどの原稿がある場合や、社内に書ける人がいる場合。
                </p>
             </div>

             {/* Gold */}
             <div className="p-8 bg-primary/5 hover:bg-primary/10 transition-colors relative">
                <div className="absolute top-0 right-0 p-2 text-[10px] font-bold text-primary border border-primary/20 bg-black">RECOMMENDED</div>
                <div className="text-xl font-bold mb-2 text-primary">Goldプラン</div>
                <div className="text-xs text-primary/60 mb-6 font-mono">REWRITE & CREATE</div>
                <div className="space-y-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-white block mb-2">情緒的コンテンツ（新規作成）:</strong>
                    キャッチコピー、代表挨拶、企業の強みなど、「共感」や「魅力」を伝える部分はプロのライターが新規で執筆します。
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-white block mb-2">機能的コンテンツ（リライト）:</strong>
                    事業内容の詳細、沿革、募集要項などの「事実情報」は、頂いた原稿をベースにWeb向けに読みやすくリライト（整文）します。
                  </p>
                </div>
             </div>

             {/* Platinum */}
             <div className="p-8 hover:bg-white/2 transition-colors">
                <div className="text-xl font-bold mb-2 text-white">Platinumプラン</div>
                <div className="text-xs text-white/40 mb-6 font-mono">INTERVIEW & STORY</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-white block mb-2">取材・インタビュー:</strong>
                  プロのライターとディレクターが訪問し、1からインタビューを行います。
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  「うまく言葉にできない想い」を引き出し、魅力的なストーリーに仕上げます。原稿作成の手間はほぼゼロです。
                </p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
