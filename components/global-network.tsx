"use client";

import { CTAButton } from "./cta-button";

export default function GlobalNetwork() {
  return (
    <section className="relative bg-background px-6 pt-24">
      {/* Content */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-bold text-white">
            The VergeCloud Global Network
          </h2>
          <p className="text-lg text-gray-400">
            40+ strategically located PoP sites worldwide ensuring the lowest
            latency and fastest content delivery
          </p>
          <CTAButton />
        </div>

        {/* World Map */}
        <div className="mt-16 relative">
          <img
            src="/images/network/world-map.png"
            alt="VergeCloud Global Network"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
