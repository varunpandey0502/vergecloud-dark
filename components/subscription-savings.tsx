"use client";

import { Button } from "./ui/button";
import Lottie from "lottie-react";
import checkAnimation from "@/lottie/check.json";

export default function SubscriptionSavings() {
  return (
    <section className="bg-[#0A0A0A] py-24 px-6">
      <div className="max-w-screen-xl mx-auto rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-16">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Save 70% by Subscribing for a Year
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Maximize value and minimize costs with VergeCloud&apos;s annual
            plan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mt-8">
            <div className="flex items-center gap-4 bg-[#ffffff0a] rounded-xl p-6">
              <div className="w-8 h-8">
                <Lottie
                  animationData={checkAnimation}
                  loop
                  className="w-8 h-8"
                />
              </div>
              <p className="text-white">
                Personalized onboarding for a seamless setup.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-[#ffffff0a] rounded-xl p-6">
              <div className="w-8 h-8">
                <Lottie
                  animationData={checkAnimation}
                  loop
                  className="w-8 h-8"
                />
              </div>
              <p className="text-white">
                Dedicated post-sales support to ensure you&apos;re always
                optimized.
              </p>
            </div>
          </div>

          <Button className="mt-8 px-8 py-6 text-lg font-bold">
            Get Started For Free
          </Button>
        </div>
      </div>
    </section>
  );
}