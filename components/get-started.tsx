"use client";

import { Button } from "./ui/button";

const steps = [
  {
    number: "1",
    title: "Get the Code",
    titleColor: "text-[#6366F1]",
    description: "Fill up the form to receive your exclusive discount code.",
  },
  {
    number: "2",
    title: "Create your Account",
    titleColor: "text-[#6366F1]",
    description:
      "Sign up using your email and apply the code to enjoy 3 months free - no credit card details required.",
  },
  {
    number: "3",
    title: "Configure and Launch",
    titleColor: "text-[#6366F1]",
    description:
      "Upload or connect your CDN resources in just a few clicks and start delivering blazing-fast content globally!",
  },
];

export default function GetStarted() {
  return (
    <section className="bg-background px-6 py-12">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Get Started in less than 5 Minutes
          </h2>
          <p className="text-lg text-gray-400">
            Launch your content delivery network quickly with our simple 3-step
            process. No credit card is required.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-12">
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#6366F1] opacity-20 blur-xl rounded-2xl" />

                      <div className="relative w-16 h-16 rounded-2xl bg-[#0F0F2D] flex items-center justify-center text-[#6366F1] text-4xl font-bold">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className={`text-xl font-bold ${step.titleColor}`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="px-8 py-6 text-lg font-bold">
              Get Started For Free
            </Button>
          </div>

          <div className="relative">
            <img
              src="/images/get-started/illustration.png"
              alt="Get Started Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
