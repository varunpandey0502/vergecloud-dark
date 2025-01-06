"use client";
import { useEffect, useRef } from "react";
import { SignupForm } from "./SignupForm";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Ensure video is muted before attempting to play (crucial for iOS)
      videoRef.current.muted = true;
      videoRef.current.load();

      // set the video to autoplay
      videoRef.current.play();
    }
  }, []);

  return (
    <section className="relative bg-primary/60 pt-28 md:pt-40 px-6 pb-40 overflow-hidden">
      <video
        ref={videoRef}
        muted
        playsInline
        loop
        preload="none"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/hero-video.webm" type="video/webm" />
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="flex flex-col md:flex-row md:items-center justify-between max-w-screen-xl mx-auto items-center relative z-10 gap-32">
        <div className="space-y-6 flex flex-col items-start">
          <h1 className="md:text-5xl text-3xl font-bold text-white">
            Blazing-fast Content Delivery.
            <br />
            Everywhere, Every Time.
          </h1>
          <p className="md:text-xl text-md text-white">
            Now{" "}
            <span className="text-[#4ADE80] font-extrabold">
              free for 3 months
            </span>
            , on our Growth and Professional plan, on signing up
            <br />
            before 31st January 2025!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 self-center w-full">
            <div className="bg-[#ffffff1a] rounded-lg px-6 py-8 border border-white/[0.08] w-full">
              <h3 className="md:text-4xl text-2xl font-bold text-white">
                6 Mn+
              </h3>
              <p className="md:text-md text-sm text-white mt-2">
                Responses Per Minute+
              </p>
            </div>
            <div className="bg-[#ffffff1a] rounded-lg px-6 py-8 border border-white/[0.08] backdrop-blur-sm">
              <h3 className="md:text-4xl text-2xl font-bold text-white">
                99.99%
              </h3>
              <p className="md:text-md text-sm text-white mt-2">
                Uptime Reliability
              </p>
            </div>
            <div className="bg-[#ffffff1a] rounded-lg px-6 py-8 border border-white/[0.08] backdrop-blur-sm">
              <h3 className="md:text-4xl text-2xl font-bold text-white">80%</h3>
              <p className="md:text-md text-sm text-white mt-2">
                Reduced Bandwidth Cost
              </p>
            </div>
          </div>
        </div>

        <SignupForm />
      </div>
    </section>
  );
}
