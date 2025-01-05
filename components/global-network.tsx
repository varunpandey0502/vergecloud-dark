"use client";

import { Button } from "./ui/button";

export default function GlobalNetwork() {
  const networkPoints = [
    { top: "30%", left: "40%", type: "primary" },
    { top: "35%", left: "45%", type: "secondary" },
    // Add more points as needed
  ];

  const pointStyles = {
    primary: "bg-[#FF4D4D]",
    secondary: "bg-gray-400",
  };

  return (
    <section className="relative bg-background px-6 pt-24">
      {/* Content */}
      <div className="container px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            The VergeCloud Global Network
          </h2>
          <p className="text-lg text-gray-400">
            40+ strategically located PoP sites worldwide ensuring the lowest
            latency and fastest content delivery
          </p>
          <Button className="px-8 py-6 text-lg font-bold">
            Get Started For Free
          </Button>
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
