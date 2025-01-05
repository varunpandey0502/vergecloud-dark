import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Clients from "@/components/clients";
import Stats from "@/components/stats";
import Comparison from "@/components/comparison";
import { FeatureToggles } from "@/components/feature-toggles/FeatureToggles";
import Reviews from "@/components/reviews";
import Awards from "@/components/awards";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import SubscriptionSavings from "@/components/subscription-savings";
import PlatformWalkthrough from "@/components/platform-walkthrough";
import GlobalNetwork from "@/components/global-network";
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
