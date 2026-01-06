import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

export function FAQ() {
  const items = [
    {
      q: "バイブコーディングツール「Replit（レプリット）」とは何ですか？",
      a: (
        <div className="space-y-4">
          <p className="font-bold text-white">AIと対話しながらシステムを作り上げる、次世代のクラウド開発プラットフォームです。</p>
          <p>
            Replitは、GoogleやMicrosoft出身のエンジニアが開発した、世界で最も注目されている開発環境の一つです。「バイブコーディング（Vibe Coding）」とは、専門的なコードを一文字ずつ手入力するのではなく、「AIへの自然言語による指示（直感的なイメージ）」で瞬時にプログラムを生成・実行する最新の開発手法を指します。
          </p>
          <p>当社はこのReplitを全面採用することで、以下の3つのメリットをお客様に提供しています。</p>
          <ul className="list-decimal list-inside space-y-1 ml-2">
            <li><span className="font-bold text-white/90">圧倒的な開発スピード:</span> AIとの協業により、制作期間を従来の数分の一に短縮しました。</li>
            <li><span className="font-bold text-white/90">サーバー費用の圧縮:</span> 開発環境がそのまま本番サーバーとして機能するため、高額なサーバー構築費が不要です。</li>
            <li><span className="font-bold text-white/90">強固なセキュリティ:</span> 全世界の開発者が利用するプラットフォームであり、セキュリティ対策や環境更新が自動で行われます。</li>
          </ul>
          <p className="font-bold border-l-2 border-primary pl-4 text-white">
            つまり、「AI時代の恩恵を最大限に活かし、高品質なサイトを安く・速く作るためのエンジン」とお考えください。
          </p>
        </div>
      )
    },
    {
      q: "クラウド環境（Replit）のセキュリティは大丈夫ですか？",
      a: (
        <div className="space-y-4">
          <p className="font-bold text-white">はい、Google等の大手企業が採用している「世界最高水準のインフラ基盤」を利用しているため、非常に安全です。</p>
          <p>
            Replitは、Google自身も使用している強固なクラウド基盤（Google Cloud Platform）の上で動作しています。
            「古いサーバーを自社で管理し、更新を忘れて脆弱になる」ことの方が、現代においては最大のリスクです。当社はReplitを採用することで、以下の3つのセキュリティメリットを提供します。
          </p>
          <ul className="list-decimal list-inside space-y-1 ml-2">
            <li><span className="font-bold text-white/90">世界基準のインフラ:</span> 世界中のトップ企業が信頼するGoogle Cloudを基盤としているため、物理的なサーバーの安全性やネットワーク強度は世界最高レベルです。</li>
            <li><span className="font-bold text-white/90">国際規格の認証:</span> Replit社は、セキュリティの厳格な国際基準である「SOC 2 Type II」認証を取得しており、客観的にも高い安全性が証明されています。</li>
            <li><span className="font-bold text-white/90">通信の暗号化:</span> 全ページで「HTTPS（SSL化）」が標準適用され、通信内容はすべて暗号化されます。なりすましや盗聴を防止します。</li>
          </ul>
          <p className="font-bold border-l-2 border-primary pl-4 text-white">
            お客様は面倒なセキュリティ対策を意識することなく、「大手IT企業と同じセキュリティ基盤」の上で、安全にWebサイトを運用いただけます。
          </p>
        </div>
      )
    },
    {
      q: "ITに詳しくないのですが、運用は難しくありませんか？",
      a: "専門知識は一切不要です。弊社が管理を代行しますので、御社は面倒な更新作業から解放されます。独自のドメイン（.co.jp等）もそのまま利用可能です。"
    },
    {
      q: "デザインの著作権は？",
      a: "納品時に全ての権利を譲渡いたします。AIを活用して作成した画像素材も、商用利用可能な状態で納品します。"
    },
    {
      q: "原稿を書く時間がありません。",
      a: "「ゴールドプラン」以上をご利用ください。箇条書きのメモや既存のパンフレットをいただくだけで、プロがWeb用の文章に仕上げます。"
    }
  ];

  return (
    <section className="bg-background py-32 border-b border-white/10 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-6">FAQ</h2>
          <p className="text-muted-foreground">よくあるご質問</p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {items.map((item, i) => (
            <Accordion.Item key={i} value={`item-${i}`} className="border border-white/10 bg-card overflow-hidden group data-[state=open]:border-primary/50 transition-colors">
              <Accordion.Header>
                <Accordion.Trigger className="flex justify-between items-center w-full p-8 text-left hover:bg-white/5 transition-colors">
                  <span className="text-lg md:text-xl font-bold text-white group-data-[state=open]:text-primary transition-colors pr-8">
                    <span className="text-primary mr-4 font-mono">Q.</span>
                    {item.q}
                  </span>
                  <Plus className="w-6 h-6 text-white/40 group-data-[state=open]:rotate-45 transition-transform duration-300 shrink-0" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-collapse-up data-[state=open]:animate-collapse-down">
                <div className="p-8 pt-0 text-muted-foreground leading-relaxed pl-16 flex">
                  <span className="text-white/40 mr-4 font-mono font-bold -ml-8 shrink-0">A.</span>
                  <div className="flex-grow">
                    {item.a}
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

      </div>
    </section>
  );
}
