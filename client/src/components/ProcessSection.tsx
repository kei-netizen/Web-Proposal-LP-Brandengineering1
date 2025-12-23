import { motion } from 'framer-motion';
import { Bot, PenTool, Palette } from 'lucide-react';

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 skew-x-[-12deg] z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">DESIGN PROCESS</h2>
          <p className="text-muted-foreground max-w-2xl">
            「オリジナルデザイン」へのアプローチは、プランによって異なります。<br />
            最新テクノロジーによる効率化か、プロフェッショナルによる手仕事か。
          </p>
        </div>

        <div className="space-y-24">
          {/* Plum Plan */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 border border-blue-500/20">
                <Bot className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2 font-display">AI Hybrid Production</h3>
              <p className="text-sm font-mono text-blue-400 mb-4">STARTER PLAN (梅)</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                最新の画像生成AIを活用してキービジュアル（KV）のベースを作成し、デザイナーがWebサイト用に調整・配置します。
                ゼロから描く工数を削減することで、<span className="text-white">低コストながら「他社と被らないオリジナルデザイン」</span>を実現します。
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground/80">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"/> 低コスト・短納期</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"/> 脱テンプレート・独自素材</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"/> 抽象的・先進的なビジュアルに最適</li>
              </ul>
            </motion.div>
            <div className="order-1 md:order-2 relative aspect-video bg-card/50 border border-white/10 rounded-xl overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-50" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="font-mono text-xs border border-white/20 px-2 py-1 rounded bg-black/50 backdrop-blur">AI_GENERATION_V4.0</span>
               </div>
            </div>
          </div>

          {/* Bamboo Plan */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="relative aspect-video bg-card/50 border border-white/10 rounded-xl overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-50" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="font-mono text-xs border border-white/20 px-2 py-1 rounded bg-black/50 backdrop-blur">HUMAN_DESIGN_CRAFT</span>
               </div>
             </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6 border border-emerald-500/20">
                <PenTool className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2 font-display">Professional Intent</h3>
              <p className="text-sm font-mono text-emerald-400 mb-4">STANDARD PLAN (竹)</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                経験豊富なデザイナーが、御社のターゲット層や伝えたいイメージをヒアリング。
                「信頼感」「温かみ」「誠実さ」など、微妙なニュアンスをデザインで正確に表現します。
                意図を持ってキービジュアルと下層ページのメインビジュアル（MV）を設計します。
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground/80">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-400 rounded-full"/> 戦略的な視線誘導設計</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-400 rounded-full"/> 感情に響くニュアンス表現</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-400 rounded-full"/> 独自のUIエレメント作成</li>
              </ul>
            </motion.div>
          </div>

          {/* Pine Plan */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 border border-purple-500/20">
                <Palette className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2 font-display">Total Art Direction</h3>
              <p className="text-sm font-mono text-purple-400 mb-4">PREMIUM PLAN (松)</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                アートディレクターが参画し、動画、アニメーション、インタラクションを含めたトータルブランディングを行います。
                訪問者の感情を動かす<span className="text-white">「体験」としてのWebサイト</span>を提供します。
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground/80">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-400 rounded-full"/> インタラクティブなストーリーテリング</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-400 rounded-full"/> モーション・動画による演出</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-400 rounded-full"/> 完全なリブランディング</li>
              </ul>
            </motion.div>
             <div className="order-1 md:order-2 relative aspect-video bg-card/50 border border-white/10 rounded-xl overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-50" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="font-mono text-xs border border-white/20 px-2 py-1 rounded bg-black/50 backdrop-blur">ART_DIRECTION_FULL</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
