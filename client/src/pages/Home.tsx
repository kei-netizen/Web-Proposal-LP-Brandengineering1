import { Hero } from "@/components/single/Hero";
import { Concept } from "@/components/single/Concept";
import { WhyHighQuality } from "@/components/single/WhyHighQuality";
import { PlanComparison } from "@/components/single/PlanComparison";
import { PageComposition } from "@/components/single/PageComposition";
import { ProcessAndContent } from "@/components/single/ProcessAndContent";
import { Maintenance } from "@/components/single/Maintenance";
import { CaseStudy } from "@/components/single/CaseStudy";
import { FAQ } from "@/components/single/FAQ";
import { Contact } from "@/components/single/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white">
      <Hero />
      <Concept />
      <WhyHighQuality />
      <PlanComparison />
      <PageComposition />
      <ProcessAndContent />
      <Maintenance />
      <CaseStudy />
      <FAQ />
      <Contact />

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10 text-xs text-white/40">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <p>© 2025 PROTOTYPE.WEB</p>
          <p className="font-mono">DESIGNED IN TOKYO</p>
        </div>
      </footer>
    </div>
  );
}
