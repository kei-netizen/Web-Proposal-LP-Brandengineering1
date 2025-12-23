import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { PlanComparison } from "@/components/PlanComparison";
import { ProcessSection } from "@/components/ProcessSection";
import { ContentSection } from "@/components/ContentSection";
import { ContactCTA } from "@/components/ContactCTA";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <PlanComparison />
      <ProcessSection />
      <ContentSection />
      <ContactCTA />
    </Layout>
  );
}
