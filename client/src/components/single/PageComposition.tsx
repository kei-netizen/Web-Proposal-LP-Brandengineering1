import { motion } from 'framer-motion';
import { Check, Minus } from 'lucide-react';

const companyPages = [
  { name: 'TOPページ', starter: true, standard: true, premium: true },
  { name: '事業紹介', starter: true, standard: true, premium: true },
  { name: '導入実績・事例', starter: false, standard: true, premium: true },
  { name: '私たちの強み', starter: false, standard: true, premium: true },
  { name: '会社案内', starter: true, standard: true, premium: true },
  { name: '代表メッセージ', starter: false, standard: true, premium: true },
  { name: '採用情報', starter: false, standard: true, premium: true },
  { name: 'お問い合わせ', starter: true, standard: true, premium: true },
  { name: 'お知らせ', starter: true, standard: true, premium: true },
  { name: 'プライバシーポリシー', starter: false, standard: true, premium: true },
];

const recruitPages = [
  { name: 'TOPページ', starter: true, standard: true, premium: true },
  { name: '募集要項一覧', starter: true, standard: true, premium: true },
  { name: '会社・事業紹介', starter: true, standard: true, premium: true },
  { name: '社員インタビュー', starter: true, standard: true, premium: true },
  { name: '働く環境・制度', starter: true, standard: true, premium: true },
  { name: 'キャリアパス', starter: true, standard: true, premium: true },
  { name: '数字で見る◯◯', starter: true, standard: true, premium: true },
  { name: '代表メッセージ', starter: true, standard: true, premium: true },
  { name: 'クロストーク', starter: true, standard: true, premium: true },
  { name: 'エントリーフォーム', starter: true, standard: true, premium: true },
];

function StatusIcon({ status }: { status: boolean | string }) {
  if (status === true) return <Check className="w-5 h-5 text-primary mx-auto" />;
  if (status === false) return <Minus className="w-4 h-4 text-white/10 mx-auto" />;
  return null;
}

export function PageComposition() {
  return (
    <section className="py-32 bg-card border-b border-white/10 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <h2 className="text-5xl font-display font-black text-white leading-none">
            PAGE<br/>COMPOSITION
          </h2>
          <p className="text-muted-foreground text-right mt-8 md:mt-0">
            プランごとのページ構成例。<br/>
            ボリューム内での入れ替えは可能です。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Corporate Site */}
          <div>
            <div className="flex items-center gap-4 mb-8">
               <div className="w-2 h-8 bg-white" />
               <h3 className="text-2xl font-display font-bold text-white">CORPORATE SITE</h3>
            </div>
            <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b-2 border-white/10">
                       <th className="p-4 text-white/40 font-mono text-xs uppercase">Page Item</th>
                       <th className="p-4 text-center text-white font-bold w-20">Silver</th>
                       <th className="p-4 text-center text-primary font-bold w-20 bg-white/5">Gold</th>
                       <th className="p-4 text-center text-white font-bold w-20">Platinum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                     {companyPages.map((page, i) => (
                       <tr key={i} className="group hover:bg-white/5 transition-colors">
                          <td className="p-4 font-bold text-white group-hover:text-primary transition-colors text-sm">{page.name}</td>
                          <td className="p-4 text-center"><StatusIcon status={page.starter} /></td>
                          <td className="p-4 text-center bg-white/5"><StatusIcon status={page.standard} /></td>
                          <td className="p-4 text-center"><StatusIcon status={page.premium} /></td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
          </div>

          {/* Recruit Site */}
          <div>
            <div className="flex items-center gap-4 mb-8">
               <div className="w-2 h-8 bg-primary" />
               <h3 className="text-2xl font-display font-bold text-white">RECRUIT SITE</h3>
            </div>
            <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b-2 border-white/10">
                       <th className="p-4 text-white/40 font-mono text-xs uppercase">Page Item</th>
                       <th className="p-4 text-center text-white font-bold w-20">Silver</th>
                       <th className="p-4 text-center text-primary font-bold w-20 bg-white/5">Gold</th>
                       <th className="p-4 text-center text-white font-bold w-20">Platinum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                     {recruitPages.map((page, i) => (
                       <tr key={i} className="group hover:bg-white/5 transition-colors">
                          <td className="p-4 font-bold text-white group-hover:text-primary transition-colors text-sm">{page.name}</td>
                          <td className="p-4 text-center"><StatusIcon status={page.starter} /></td>
                          <td className="p-4 text-center bg-white/5"><StatusIcon status={page.standard} /></td>
                          <td className="p-4 text-center"><StatusIcon status={page.premium} /></td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
