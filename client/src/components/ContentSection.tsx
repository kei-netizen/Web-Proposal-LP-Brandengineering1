import { motion } from 'framer-motion';
import { FileText, Mic, PenLine } from 'lucide-react';

export function ContentSection() {
  return (
    <section id="content" className="py-24 bg-card/20 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">CONTENT STRATEGY</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            デザインは目を惹き、コンテンツは心を掴みます。<br/>
            社内リソースの状況に合わせて、3つのライティング支援をご用意しました。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-white/5 bg-background/50 rounded-xl hover:border-white/20 transition-colors">
            <FileText className="w-8 h-8 text-blue-400 mb-6" />
            <h3 className="text-xl font-bold mb-2">完全ご支給</h3>
            <p className="text-xs font-mono text-muted-foreground mb-4 uppercase">Starter Plan</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              すでにパンフレットなどの原稿がある場合や、社内に書ける人がいる場合に最適です。
              頂いた原稿をそのままWebサイトに反映します。
            </p>
          </div>

          <div className="p-8 border border-white/5 bg-background/50 rounded-xl hover:border-white/20 transition-colors">
            <PenLine className="w-8 h-8 text-emerald-400 mb-6" />
            <h3 className="text-xl font-bold mb-2">新規作成 & リライト</h3>
            <p className="text-xs font-mono text-muted-foreground mb-4 uppercase">Standard Plan</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              キャッチコピーや代表挨拶など「共感」を生む部分はプロが新規執筆。
              沿革や募集要項などの「事実情報」は、頂いた原稿をWeb向けに読みやすくリライトします。
            </p>
          </div>

          <div className="p-8 border border-white/5 bg-background/50 rounded-xl hover:border-white/20 transition-colors">
            <Mic className="w-8 h-8 text-purple-400 mb-6" />
            <h3 className="text-xl font-bold mb-2">取材・インタビュー</h3>
            <p className="text-xs font-mono text-muted-foreground mb-4 uppercase">Premium Plan</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              「うまく言葉にできない想い」もお任せください。
              プロのライターとディレクターが訪問し、1からインタビュー。
              魅力的なストーリーに仕上げます。原稿作成の手間はほぼゼロです。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
