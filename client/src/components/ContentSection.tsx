import { motion } from 'framer-motion';
import { FileText, Mic, PenLine } from 'lucide-react';

export function ContentSection() {
  return (
    <section id="content" className="py-24 bg-card/20 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">CONTENT STRATEGY</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Design catches the eye, but content captures the heart. 
            We offer different levels of writing support based on your internal resources.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-white/5 bg-background/50 rounded-xl hover:border-white/20 transition-colors">
            <FileText className="w-8 h-8 text-blue-400 mb-6" />
            <h3 className="text-xl font-bold mb-2">Client Provided</h3>
            <p className="text-xs font-mono text-muted-foreground mb-4 uppercase">Starter Plan</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Best for companies with existing brochures or a strong marketing team. 
              We take your text files and implement them exactly as provided.
            </p>
          </div>

          <div className="p-8 border border-white/5 bg-background/50 rounded-xl hover:border-white/20 transition-colors">
            <PenLine className="w-8 h-8 text-emerald-400 mb-6" />
            <h3 className="text-xl font-bold mb-2">Refinement & New Copy</h3>
            <p className="text-xs font-mono text-muted-foreground mb-4 uppercase">Standard Plan</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We write the key messages (Catchphrase, CEO Message, USP) from scratch to ensure emotional impact. 
              Fact-based pages (Services, History) are rewritten from your drafts for web readability.
            </p>
          </div>

          <div className="p-8 border border-white/5 bg-background/50 rounded-xl hover:border-white/20 transition-colors">
            <Mic className="w-8 h-8 text-purple-400 mb-6" />
            <h3 className="text-xl font-bold mb-2">Full Interview & Story</h3>
            <p className="text-xs font-mono text-muted-foreground mb-4 uppercase">Premium Plan</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              "I can't put it into words." No problem. Our professional editor interviews you to extract your passion and philosophy. 
              We turn your unspoken thoughts into a compelling narrative. Zero writing effort required from you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
