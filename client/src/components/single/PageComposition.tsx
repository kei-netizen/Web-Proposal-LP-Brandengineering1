import { motion } from 'framer-motion';
import { Check, Circle, Minus } from 'lucide-react';

const companyPages = [
  { name: 'TOPページ', starter: true, standard: true, premium: true },
  { name: '会社案内 (概要/沿革/アクセス)', starter: true, standard: true, premium: true },
  { name: '事業紹介 (サービス一覧)', starter: true, standard: true, premium: true },
  { name: 'お問い合わせフォーム', starter: true, standard: true, premium: true },
  { name: 'お知らせ (CMS一覧・詳細)', starter: true, standard: true, premium: true },
  { name: '代表メッセージ', starter: false, standard: true, premium: true },
  { name: '私たちの強み (選ばれる理由)', starter: false, standard: true, premium: true },
  { name: '導入実績・事例 (CMS)', starter: false, standard: true, premium: true },
  { name: '採用情報 (簡易版)', starter: false, standard: true, premium: true },
  { name: 'プライバシーポリシー', starter: false, standard: true, premium: true },
  { name: 'サステナビリティ / SDGs', starter: false, standard: false, premium: true },
  { name: 'IR情報', starter: false, standard: false, premium: true },
  { name: 'お役立ちコラム (SEO集客)', starter: false, standard: false, premium: true },
  { name: 'サービス別詳細LP', starter: false, standard: false, premium: true },
];

const recruitPages = [
  { name: 'TOPページ', starter: true, standard: true, premium: true },
  { name: '会社を知る (事業/数字)', starter: true, standard: true, premium: true },
  { name: '社員インタビュー', starter: 'multiple', standard: 'individual', premium: 'unlimited' },
  { name: '募集要項一覧', starter: true, standard: true, premium: true },
  { name: 'エントリーフォーム', starter: true, standard: true, premium: true },
  { name: '代表メッセージ', starter: false, standard: true, premium: true },
  { name: 'ミッション・ビジョン', starter: false, standard: true, premium: true },
  { name: '1日の流れ / オフィス紹介', starter: false, standard: true, premium: true },
  { name: 'よくある質問 (FAQ)', starter: false, standard: true, premium: true },
  { name: '福利厚生・制度', starter: false, standard: true, premium: true },
  { name: 'ブランドムービー特設', starter: false, standard: false, premium: true },
  { name: 'プロジェクトストーリー', starter: false, standard: false, premium: true },
  { name: '社員座談会 (クロストーク)', starter: false, standard: false, premium: true },
  { name: 'キャリアパス紹介', starter: false, standard: false, premium: true },
];

function StatusIcon({ status }: { status: boolean | string }) {
  if (status === true) return <Circle className="w-4 h-4 fill-white text-white mx-auto" />;
  if (status === false) return <Minus className="w-4 h-4 text-white/20 mx-auto" />;
  if (status === 'multiple') return <span className="text-[10px] text-white/70 block w-full text-center leading-tight">1Pに複数</span>;
  if (status === 'individual') return <span className="text-[10px] text-primary font-bold block w-full text-center leading-tight">2名分/個別</span>;
  if (status === 'unlimited') return <span className="text-[10px] text-white block w-full text-center leading-tight">人数無制限</span>;
  return null;
}

export function PageComposition() {
  return (
    <section className="py-32 bg-background border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-5xl font-display font-bold text-white mb-6">PAGE COMPOSITION</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            プランごとのページ数上限に合わせて、最適な組み合わせをご提案します。<br/>
            ※あくまで一例ですので、同等のボリュームであれば入れ替え可能です。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Company Site */}
          <div className="border border-white/10 bg-card rounded-none overflow-hidden">
            <div className="bg-white/5 p-6 border-b border-white/10">
              <h3 className="font-bold text-xl flex items-center gap-3">
                <span className="w-2 h-8 bg-primary block"/>
                企業サイトの場合
              </h3>
            </div>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs text-muted-foreground">
                  <th className="p-4 font-normal">ページ項目</th>
                  <th className="p-4 text-center w-16">Silver</th>
                  <th className="p-4 text-center w-16 text-primary">Gold</th>
                  <th className="p-4 text-center w-16">Platinum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {companyPages.map((page, i) => (
                  <tr key={i} className="hover:bg-white/2 transition-colors">
                    <td className="p-4 text-white/80">{page.name}</td>
                    <td className="p-4"><StatusIcon status={page.starter} /></td>
                    <td className="p-4 bg-primary/5"><StatusIcon status={page.standard} /></td>
                    <td className="p-4"><StatusIcon status={page.premium} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Recruit Site */}
          <div className="border border-white/10 bg-card rounded-none overflow-hidden">
            <div className="bg-white/5 p-6 border-b border-white/10">
              <h3 className="font-bold text-xl flex items-center gap-3">
                <span className="w-2 h-8 bg-white block"/>
                採用サイトの場合
              </h3>
            </div>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs text-muted-foreground">
                  <th className="p-4 font-normal">ページ項目</th>
                  <th className="p-4 text-center w-16">Silver</th>
                  <th className="p-4 text-center w-16 text-primary">Gold</th>
                  <th className="p-4 text-center w-16">Platinum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recruitPages.map((page, i) => (
                  <tr key={i} className="hover:bg-white/2 transition-colors">
                    <td className="p-4 text-white/80">{page.name}</td>
                    <td className="p-4"><StatusIcon status={page.starter} /></td>
                    <td className="p-4 bg-primary/5"><StatusIcon status={page.standard} /></td>
                    <td className="p-4"><StatusIcon status={page.premium} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
