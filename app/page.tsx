import GlobalNetwork from "@/components/global-network";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PlatformWalkthrough from "@/components/platform-walkthrough";
import SubscriptionSavings from "@/components/subscription-savings";
import WhyChoose from "@/components/why-choose";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SubscriptionSavings />
      <PlatformWalkthrough />
      <GlobalNetwork />
      <WhyChoose />
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
