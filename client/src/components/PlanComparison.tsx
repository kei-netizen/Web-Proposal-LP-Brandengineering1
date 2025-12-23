import { motion } from 'framer-motion';
import { Check, X, Sparkles, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    alias: '梅',
    price: '50',
    unit: '万円',
    icon: Zap,
    description: 'コストを抑えてオリジナルを持ちたい方へ。創業期や急募案件に最適。',
    features: [
      { label: 'ページ数', value: '必要最小限 (~5P)' },
      { label: 'デザイン', value: 'AI活用オリジナル' },
      { label: 'ライティング', value: 'ご支給' },
      { label: '写真素材', value: 'ご支給' },
      { label: 'お客様負担', value: '高 (原稿準備要)' },
    ],
    recommended: '創業期・急募案件',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30'
  },
  {
    name: 'Standard',
    alias: '竹',
    price: '100',
    unit: '万円',
    icon: Sparkles,
    description: '企業の想いを言葉と写真で伝えたい方へ。信頼獲得とミスマッチ防止に。',
    features: [
      { label: 'ページ数', value: '標準構成 (~10P)' },
      { label: 'デザイン', value: 'デザイナー制作' },
      { label: 'ライティング', value: '新規ライティング' },
      { label: '写真素材', value: 'プロカメラマン撮影' },
      { label: 'お客様負担', value: '中 (事実情報のみ)' },
    ],
    recommended: '信頼獲得・採用強化',
    highlight: true,
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/50'
  },
  {
    name: 'Premium',
    alias: '松',
    price: '180',
    unit: '万円〜',
    icon: Crown,
    description: '圧倒的な世界観でファンを作りたい方へ。リブランディングや優秀層採用に。',
    features: [
      { label: 'ページ数', value: '充実構成 (15P~)' },
      { label: 'デザイン', value: 'フルスクラッチ' },
      { label: 'ライティング', value: '取材・完全代行' },
      { label: '写真素材', value: '撮影 ＋ 動画制作' },
      { label: 'お客様負担', value: '低 (企画から丸投げ)' },
    ],
    recommended: 'リブランディング',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30'
  }
];

export function PlanComparison() {
  return (
    <section id="plans" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">PLANS</h2>
          <p className="text-muted-foreground max-w-2xl">
            ご予算と目的に合わせて、最適なプランをお選びください。<br/>
            全てのプランでテンプレートではない「オリジナルデザイン」を提供します。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-xl border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all group ${
                plan.highlight ? 'border-white/30 shadow-2xl shadow-emerald-900/10' : 'border-white/10'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-full shadow-lg">
                  Recommended
                </div>
              )}

              <div className="mb-6 flex justify-between items-start">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-serif italic text-muted-foreground">{plan.alias}</span>
                    <h3 className="text-xl font-bold tracking-wide">{plan.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground h-10 flex items-center">{plan.recommended}</p>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-br ${plan.color} border ${plan.borderColor}`}>
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="mb-8 pb-8 border-b border-white/10">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold font-display">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.unit}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed opacity-80">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{feature.label}</span>
                    <span className="font-medium text-right text-white/90 max-w-[60%]">{feature.value}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 text-sm font-bold tracking-wide transition-all border ${
                plan.highlight 
                  ? 'bg-white text-black hover:bg-white/90 border-transparent' 
                  : 'bg-transparent text-white border-white/20 hover:border-white hover:bg-white/5'
              }`}>
                詳細を見る
              </button>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table for larger screens */}
        <div className="mt-24 hidden lg:block overflow-hidden border border-white/10 rounded-xl bg-card/30">
          <div className="p-6 bg-white/5 border-b border-white/10 flex justify-between items-center">
             <h3 className="font-bold text-lg">機能・制作範囲の詳細比較</h3>
             <span className="text-xs text-muted-foreground">※ページ構成は柔軟に入れ替え可能です</span>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="p-6 font-mono text-xs uppercase text-muted-foreground font-normal w-1/4">Feature</th>
                {plans.map(p => (
                  <th key={p.name} className="p-6 font-display font-bold text-lg w-1/4">
                    <span className="text-sm font-serif italic font-normal text-muted-foreground block mb-1">{p.alias}</span>
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              <tr>
                <td className="p-6 font-medium text-muted-foreground">デザイン手法</td>
                <td className="p-6">
                  <span className="font-bold text-blue-400 block mb-1">AI活用オリジナル</span>
                  AIによるKV生成<br/>＋デザイナー調整
                </td>
                <td className="p-6">
                  <span className="font-bold text-emerald-400 block mb-1">デザイナー制作</span>
                  KV ＋ 下層MV<br/>(プロによる意図的な設計)
                </td>
                <td className="p-6">
                  <span className="font-bold text-purple-400 block mb-1">フルスクラッチ</span>
                  アートディレクション<br/>全ページ独自演出・動画
                </td>
              </tr>
              <tr>
                <td className="p-6 font-medium text-muted-foreground">ライティング</td>
                <td className="p-6">ご支給<br/>(貴社でご用意)</td>
                <td className="p-6">
                  <span className="font-bold text-white block mb-1">新規ライティング</span>
                  メッセージ・強み等<br/>※事業データはリライト
                </td>
                <td className="p-6">
                  <span className="font-bold text-white block mb-1">取材・完全代行</span>
                  プロによる編集・構成<br/>インタビュー取材含む
                </td>
              </tr>
              <tr>
                <td className="p-6 font-medium text-muted-foreground">写真素材</td>
                <td className="p-6">ご支給<br/>(貴社でご用意 or 素材集)</td>
                <td className="p-6">
                  <span className="font-bold text-white block mb-1">プロカメラマン撮影</span>
                  1日撮影<br/>社員・外観等
                </td>
                <td className="p-6">
                  <span className="font-bold text-white block mb-1">撮影 ＋ 動画制作</span>
                  プロの演出<br/>ディレクション
                </td>
              </tr>
              <tr>
                <td className="p-6 font-medium text-muted-foreground">お客様の作業負担</td>
                <td className="p-6">
                   <span className="inline-block px-2 py-1 bg-white/10 rounded mb-2">高</span><br/>
                   写真・原稿の準備が必要
                </td>
                <td className="p-6">
                   <span className="inline-block px-2 py-1 bg-white/10 rounded mb-2">中</span><br/>
                   取材・撮影日の調整<br/>事実情報の原稿提供
                </td>
                <td className="p-6">
                   <span className="inline-block px-2 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded mb-2">低</span><br/>
                   企画から丸投げ可能
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
