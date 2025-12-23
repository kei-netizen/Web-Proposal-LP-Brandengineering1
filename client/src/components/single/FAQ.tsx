import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';

export function FAQ() {
  const items = [
    {
      q: "バイブコーディングツールReplitのことが分かりません。",
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
                <div className="p-8 pt-0 text-muted-foreground leading-relaxed pl-16">
                  <span className="text-white/40 mr-4 font-mono font-bold -ml-8">A.</span>
                  {item.a}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

      </div>
    </section>
  );
}
