import { motion } from 'framer-motion';
import { Cpu, Code2, MessageSquareQuote } from 'lucide-react';

export function Innovation() {
  const cards = [
    {
      title: "AI-Driven Design",
      jpTitle: "AIによるデザイン設計とコーディング",
      desc: "AIを活用し、デザインの試行錯誤を「2週間」から「1日」、コーディングも「1ヶ月」から「3日」に短縮。テンプレートを使わず、御社だけのオリジナルデザインを即座に構築します。",
      icon: <Cpu className="w-10 h-10 text-primary" />
    },
    {
      title: "Replit",
      jpTitle: "コーディングコストの圧縮",
      desc: "バイブコーディングツール「Replit」を採用。高額なコーディング費をカットし、サイト維持や複雑な保守も月額1万円の運用を実現しました。",
      icon: <Code2 className="w-10 h-10 text-primary" />
    },
    {
      title: "Message Focus",
      jpTitle: "「言葉」への還元",
      desc: "浮いた工数を、AIでは代替できない「プロの言語化」へ還元。技術的な強みや企業の想いを深くヒアリングし、求職者や顧客の心に響くメッセージへと昇華させます。",
      icon: <MessageSquareQuote className="w-10 h-10 text-primary" />
    }
  ];

  return (
    <section className="bg-background py-32 border-b border-white/10 relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-display font-black text-white mb-8"
          >
            INNOVATION
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
            className="border-l-4 border-primary pl-6 max-w-2xl"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              なぜ、高品質なのに50万円から可能なのか？
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              従来の人月商売は行いません。AIとクラウド技術で工程を圧縮し、本質的な価値に投資します。
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.2), duration: 1.0, ease: "easeOut" }}
              className="bg-card border border-white/10 p-8 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="mb-8 p-4 bg-white/5 inline-block rounded-none group-hover:bg-primary/20 transition-colors">
                {card.icon}
              </div>
              
              <h4 className="text-2xl font-display font-black text-white mb-2">{card.title}</h4>
              <h5 className="text-sm font-bold text-primary mb-6 border-b border-white/10 pb-4 inline-block">{card.jpTitle}</h5>
              
              <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
