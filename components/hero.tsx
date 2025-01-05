"use client";
import { useEffect, useRef } from "react";
import { HubspotProvider } from "next-hubspot";
import Clients from "./clients";
import HubspotForm from "./form";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Ensure video is muted before attempting to play (crucial for iOS)
      videoRef.current.muted = true;
      videoRef.current.load();

      // set the video to autoplay
      videoRef.current.play();

      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Auto-play was prevented:", error);
          // Retry play on user interaction if needed
          document.addEventListener(
            "touchstart",
            () => {
              videoRef.current?.play();
            },
            { once: true }
          );
        });
      }
    }
  }, []);

  return (
    <section className="relative bg-primary/80 pt-44 px-6 pb-28 overflow-hidden">
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

      <div className="flex flex-col md:flex-row md:items-start justify-between max-w-screen-xl mx-auto items-center relative z-10">
        <div className="space-y-6 flex flex-col items-start">
          <h1 className="text-5xl font-bold text-white">
            Blazing-fast Content Delivery.
            <br />
            Everywhere, Every Time.
          </h1>
          <p className="text-xl text-white">
            Now{" "}
            <span className="text-[#4ADE80] font-bold">free for 3 months</span>,
            on our Growth and Professional plan, on signing up
            <br />
            before 31st January 2025!
          </p>

          <div className="grid grid-cols-3 gap-8 pt-12">
            <div className="bg-[#ffffff1a] rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-4xl font-bold text-white">6 Mn+</h3>
              <p className="text-white mt-2">Responses Per Minute+</p>
            </div>
            <div className="bg-[#ffffff1a] rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-4xl font-bold text-white">99.99%</h3>
              <p className="text-white mt-2">Uptime Reliability</p>
            </div>
            <div className="bg-[#ffffff1a] rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-4xl font-bold text-white">80%</h3>
              <p className="text-white mt-2">Reduced Bandwidth Cost</p>
            </div>
          </div>
        </div>

        {/* <div className="bg-[#ffffff1a] rounded-xl backdrop-blur-sm p-8 w-[400px]"> */}
        {/* <HubspotProvider>
            <HubspotForm />
          </HubspotProvider> */}
        {/* </div> */}
      </div>

      {/* <Clients /> */}
    </section>
  );
}
