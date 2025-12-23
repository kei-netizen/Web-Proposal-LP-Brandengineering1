import { motion } from 'framer-motion';
import { Check, X, Sparkles, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    alias: '梅',
    price: '50',
    unit: '万円',
    icon: Zap,
    description: 'Cost-effective original design using AI + Professional finish.',
    features: [
      { label: 'Pages', value: 'Limited (~5P)' },
      { label: 'Design', value: 'AI + Human Refinement' },
      { label: 'Writing', value: 'Client Provided' },
      { label: 'Photos', value: 'Client Provided' },
      { label: 'Effort', value: 'High (Self-Prep)' },
    ],
    recommended: 'Startups, Urgent Projects',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30'
  },
  {
    name: 'Standard',
    alias: '竹',
    price: '100',
    unit: '万円',
    icon: Sparkles,
    description: 'Professional design designed to build trust and convey emotion.',
    features: [
      { label: 'Pages', value: 'Standard (~10P)' },
      { label: 'Design', value: 'Pro Designer Crafted' },
      { label: 'Writing', value: 'New Copywriting' },
      { label: 'Photos', value: 'Pro Photographer (1 Day)' },
      { label: 'Effort', value: 'Medium (Review)' },
    ],
    recommended: 'Reliability, Recruitment',
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
    description: 'Full branding experience with art direction and storytelling.',
    features: [
      { label: 'Pages', value: 'Comprehensive (15P+)' },
      { label: 'Design', value: 'Art Direction + Motion' },
      { label: 'Writing', value: 'Full Interview & Story' },
      { label: 'Photos', value: 'Photo + Video Direction' },
      { label: 'Effort', value: 'Low (Full Service)' },
    ],
    recommended: 'Rebranding, Impact',
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
            Choose the level of engagement that fits your vision. All plans guarantee a unique, 
            non-template outcome. The difference lies in the depth of craft and content strategy.
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
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-full">
                  Recommended
                </div>
              )}

              <div className="mb-6 flex justify-between items-start">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-serif italic text-muted-foreground">{plan.alias}</span>
                    <h3 className="text-xl font-bold tracking-wide">{plan.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground h-10">{plan.recommended}</p>
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
                SELECT PLAN
              </button>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table for larger screens */}
        <div className="mt-24 hidden lg:block overflow-hidden border border-white/10 rounded-xl bg-card/30">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="p-6 font-mono text-xs uppercase text-muted-foreground font-normal">Feature</th>
                {plans.map(p => (
                  <th key={p.name} className="p-6 font-display font-bold text-lg">{p.alias} <span className="text-sm font-normal text-muted-foreground">({p.name})</span></th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              <tr>
                <td className="p-6 font-medium text-muted-foreground">Design Methodology</td>
                <td className="p-6">AI Generated KV +<br/>Manual Adjustment</td>
                <td className="p-6 text-white font-medium">Professional Designer<br/>Custom KV + MV</td>
                <td className="p-6">Full Art Direction<br/>Motion & Interactions</td>
              </tr>
              <tr>
                <td className="p-6 font-medium text-muted-foreground">Copywriting</td>
                <td className="p-6">Client Provided</td>
                <td className="p-6">New Emotional Copy +<br/>Rewriting Facts</td>
                <td className="p-6 text-white font-medium">Full Interview +<br/>Storytelling</td>
              </tr>
              <tr>
                <td className="p-6 font-medium text-muted-foreground">Photography</td>
                <td className="p-6">Stock / Client Provided</td>
                <td className="p-6">1-Day Pro Shoot</td>
                <td className="p-6">Photo + Video Production</td>
              </tr>
              <tr>
                <td className="p-6 font-medium text-muted-foreground">Client Effort</td>
                <td className="p-6">High</td>
                <td className="p-6">Medium</td>
                <td className="p-6 text-emerald-400 font-medium">Low (We handle it)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
