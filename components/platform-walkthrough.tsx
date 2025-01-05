"use client";

import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const slides = [
  {
    image: "/images/walkthrough/dashboard.png",
    title: "Seamless Setup, Instant Results",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper malesu ada tellus risus posuere.",
  },
  // Add more slides as needed
];

export default function PlatformWalkthrough() {
  return (
    <section className="bg-[#030303] py-24 overflow-hidden">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-white/60">Platform Walkthrough</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              {slides[0].title}
            </h2>
            <p className="text-lg text-gray-400">{slides[0].description}</p>
            <Button className="px-8 py-6 text-lg font-bold">
              Get Started For Free
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#030303] to-transparent z-10 w-[20%] left-0" />
            <div className="absolute inset-0 bg-gradient-to-l from-[#030303] to-transparent z-10 w-[20%] right-0" />

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem key={index} className="md:basis-1/1">
                    <div className="relative rounded-2xl overflow-hidden">
                      <img
                        src={slide.image}
                        alt="Platform screenshot"
                        className="w-full h-auto"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                <CarouselPrevious className="relative h-8 w-8" />
                <CarouselNext className="relative h-8 w-8" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
