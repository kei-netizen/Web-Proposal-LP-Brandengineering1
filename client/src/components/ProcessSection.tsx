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
            How we achieve "Original Design" differs by plan. We leverage technology for efficiency or craftsmanship for emotion.
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
              <h3 className="text-2xl font-bold mb-2 font-display">Hybrid AI Production</h3>
              <p className="text-sm font-mono text-blue-400 mb-4">STARTER PLAN (梅)</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We utilize state-of-the-art Generative AI to create the base Key Visual (KV). 
                A human designer then refines, crops, and implements it into the web layout.
                This dramatically reduces the "blank canvas" time while ensuring a unique look not found in templates.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground/80">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"/> Low Cost, High Speed</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"/> Unique, Non-stock Imagery</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"/> Best for abstract or atmospheric visuals</li>
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
                Experienced designers interview your team to understand the "soul" of the brand. 
                We design with specific intent—conveying trust, warmth, or innovation through carefully chosen layouts, typography, and color theory.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground/80">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-400 rounded-full"/> Intentional Visual Hierarchy</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-400 rounded-full"/> Emotional Resonance</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-400 rounded-full"/> Custom UI Elements</li>
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
                An Art Director oversees the entire project. We integrate video, micro-interactions, and sound design to create an immersive "Experience". 
                Every pixel is calculated to position your brand as a market leader.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground/80">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-400 rounded-full"/> Interactive Storytelling</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-400 rounded-full"/> Video & Motion Graphics</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-400 rounded-full"/> Complete Rebranding</li>
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
