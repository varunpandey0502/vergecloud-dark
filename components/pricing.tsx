"use client";
import { useState } from "react";

type PlanFeature = {
  name: string;
  growth: string | number;
  professional: string | number;
  enterprise: string | number;
};

const features: PlanFeature[] = [
  {
    name: "Monthly Data Transfer",
    growth: "500GB",
    professional: "5 TB",
    enterprise: "20 TB",
  },
  {
    name: "Monthly Request",
    growth: "500,000",
    professional: "5,000,000",
    enterprise: "50,000,000",
  },
  {
    name: "DNS Management",
    growth: "Included",
    professional: "Included",
    enterprise: "Included",
  },
  {
    name: "Caching Features",
    growth: "Basic",
    professional: "Advanced",
    enterprise: "Premium",
  },
  {
    name: "Connection Security",
    growth: "Free SSL",
    professional: "Custom SSL",
    enterprise: "Advanced SSL",
  },
  {
    name: "DDoS Protection",
    growth: "Standard",
    professional: "Enhanced",
    enterprise: "Comprehensive",
  },
  {
    name: "Firewall Rules",
    growth: "10 Rules",
    professional: "100 Rules",
    enterprise: "500 Rules",
  },
  {
    name: "Rate Limiting",
    growth: "2 Rules",
    professional: "5 Rules",
    enterprise: "100 Rules",
  },
  {
    name: "WAF Protection",
    growth: "Basic",
    professional: "Advanced",
    enterprise: "Premium",
  },
  {
    name: "Page Rules",
    growth: "20 Rules",
    professional: "50 Rules",
    enterprise: "150 Rules",
  },
  {
    name: "Performance Acceleration",
    growth: "Standard",
    professional: "Enhanced",
    enterprise: "Premium",
  },
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<
    "growth" | "professional" | "enterprise"
  >("growth");

  return (
    <section className="bg-background px-6 py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Premium Performance, Priced for Growth
          </h2>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block overflow-clip rounded-3xl">
          <div className="relative">
            <table className="w-full border-separate border-spacing-x-2 border-spacing-y-0 rounded-3xl bg-[#1A1A3A]/90 backdrop-blur-sm p-4">
              <thead>
                <tr>
                  <th className="text-left p-4 text-lg font-medium text-white rounded-t-3xl w-1/4">
                    Features
                  </th>
                  <th className="p-4 w-1/4 bg-[#1F1F47] rounded-t-3xl relative overflow-visible">
                    <div className="absolute -bottom-[800px] left-1/2 -translate-x-1/2 w-[400px] h-[1200px] bg-[#8B5CF6] rounded-full mix-blend-plus-lighter filter blur-[100px] opacity-40 pointer-events-none" />
                    <div className="relative z-10">
                      <div className="">
                        <h3 className="text-xl font-bold text-white text-center">
                          Growth
                          <span className="block text-sm text-white/60 mt-1">
                            ₹1679/month
                          </span>
                        </h3>
                      </div>
                    </div>
                  </th>
                  <th className="p-4 w-1/4 bg-[#1F1F47] rounded-t-3xl relative overflow-visible">
                    <div className="absolute -bottom-[800px] left-1/2 -translate-x-1/2 w-[400px] h-[1200px] bg-[#818CF8] rounded-full mix-blend-plus-lighter filter blur-[100px] opacity-40 pointer-events-none" />
                    <div className="relative z-10">
                      <div className="">
                        <h3 className="text-xl font-bold text-white text-center">
                          Professional
                          <span className="block text-sm text-white/60 mt-1">
                            ₹16790/month
                          </span>
                        </h3>
                      </div>
                    </div>
                  </th>
                  <th className="p-4 w-1/4 bg-[#1F1F47] rounded-t-3xl relative overflow-visible">
                    <div className="absolute -bottom-[800px] left-1/2 -translate-x-1/2 w-[400px] h-[1200px] bg-[#F472B6] rounded-full mix-blend-plus-lighter filter blur-[100px] opacity-40 pointer-events-none" />
                    <div className="relative z-10">
                      <div className="">
                        <h3 className="text-xl font-bold text-white text-center">
                          Enterprise
                          <span className="block text-sm text-white/60 mt-1">
                            ₹167900/month
                          </span>
                        </h3>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index}>
                    <td className="p-4 text-white border-t border-white/[0.08]">
                      {feature.name}
                    </td>
                    <td className="p-4 text-center text-white bg-[#1F1F47] border-t border-white/[0.08]">
                      {feature.growth}
                    </td>
                    <td className="p-4 text-center text-white bg-[#1F1F47] border-t border-white/[0.08]">
                      {feature.professional}
                    </td>
                    <td className="p-4 text-center text-white bg-[#1F1F47] border-t border-white/[0.08]">
                      {feature.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View */}
        <div className="block lg:hidden space-y-6">
          {/* Plan Tabs */}
          <div className="flex rounded-xl bg-[#1A1A3A] p-1">
            <button
              onClick={() => setSelectedPlan("growth")}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                selectedPlan === "growth"
                  ? "bg-[#1F1F47] text-white"
                  : "text-white/60"
              }`}
            >
              Growth
            </button>
            <button
              onClick={() => setSelectedPlan("professional")}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                selectedPlan === "professional"
                  ? "bg-[#1F1F47] text-white"
                  : "text-white/60"
              }`}
            >
              Professional
            </button>
            <button
              onClick={() => setSelectedPlan("enterprise")}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                selectedPlan === "enterprise"
                  ? "bg-[#1F1F47] text-white"
                  : "text-white/60"
              }`}
            >
              Enterprise
            </button>
          </div>

          {/* Selected Plan Features */}
          <div className="rounded-3xl bg-[#1A1A3A]/90 backdrop-blur-sm overflow-hidden">
            <div className="relative">
              {/* Gradient Effect */}
              <div
                className={`absolute inset-0 ${
                  selectedPlan === "growth"
                    ? "bg-[#8B5CF6]"
                    : selectedPlan === "professional"
                    ? "bg-[#818CF8]"
                    : "bg-[#F472B6]"
                } rounded-full mix-blend-plus-lighter filter blur-[100px] opacity-40 pointer-events-none`}
              />

              {/* Plan Header */}
              <div className="relative z-10 p-6 text-center border-b border-white/[0.08]">
                <h3 className="text-xl font-bold text-white">
                  {selectedPlan === "growth"
                    ? "Growth"
                    : selectedPlan === "professional"
                    ? "Professional"
                    : "Enterprise"}
                  <span className="block text-sm text-white/60 mt-1">
                    {selectedPlan === "growth"
                      ? "₹1679"
                      : selectedPlan === "professional"
                      ? "₹16790"
                      : "₹167900"}
                    /month
                  </span>
                </h3>
              </div>

              {/* Features List */}
              <div className="relative z-10">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border-b border-white/[0.08]"
                  >
                    <span className="text-white">{feature.name}</span>
                    <span className="text-white ml-4">
                      {feature[selectedPlan]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
