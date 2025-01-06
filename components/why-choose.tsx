"use client";

import { Globe, Shield, Zap, Settings, Lock, DollarSign } from "lucide-react";

const features = [
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Global Content Acceleration",
    description:
      "Be it streaming, downloads, or web content - push your content closer to your audience for ultra-fast delivery across continents.",
  },
  {
    icon: <Settings className="w-12 h-12" />,
    title: "Smart Caching",
    description:
      "Be it streaming, downloads, or web content - push your content closer to your audience for ultra-fast delivery across continents.",
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Real-Time Optimization",
    description:
      "Deliver the fastest experience possible with dynamic content optimization. We fine-tune performance on the fly.",
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Global Content Acceleration",
    description:
      "Say hello to peace of mind with built-in DDoS protection, HTTPS encryption, and secure token authentication to protect your assets.",
  },
  {
    icon: <Lock className="w-12 h-12" />,
    title: "Robust Security",
    description:
      "Handle traffic surges with ease. Our scalable infrastructure ensures consistent perform-ance even during high-demand events.",
  },
  {
    icon: <DollarSign className="w-12 h-12" />,
    title: "Value for Money",
    description:
      "Deliver the fastest experience possible with dynamic content optimization. We fine-tune performance on the fly.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-background px-6 pb-12">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <span className="text-white/60">Why Choose Vergecloud</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Fast. Secure. Limitless.
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We are an agile, reliable, and scalable solution — everything your
            growing business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-[#0A0A0A] rounded-2xl border border-white/[0.08] transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#FF4D4D] opacity-0 rounded-2xl group-hover:opacity-40 blur-md transition-opacity" />

              {/* Content */}
              <div className="relative bg-[#0a102a] rounded-2xl p-8 space-y-4 z-[1]">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-colors group-hover:bg-[#FF4D4D]/20 group-hover:text-[#FF4D4D]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF4D4D] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
