import GlobalNetwork from "@/components/global-network";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import SubscriptionSavings from "@/components/subscription-savings";
import WhyChoose from "@/components/why-choose";
import GetStarted from "@/components/get-started";
import Walkthrough from "@/components/walkthrough";
import Pricing from "@/components/pricing";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SubscriptionSavings />
      <Walkthrough />
      <GlobalNetwork />
      <WhyChoose />
      <GetStarted />
      <Pricing />
      {/* <Awards />
      <Stats />
      <Comparison />
      <FeatureToggles />
      <Reviews />
      <CTA />
      <Footer /> */}
    </main>
  );
}
