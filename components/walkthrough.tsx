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
    image: "/images/walkthrough/feature-1.png",
    title: "Seamless Setup, Instant Results",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper malesu ada tellus risus posuere.",
  },
  {
    image: "/images/walkthrough/feature-1.png",
    title: "Seamless Setup",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper malesu ada tellus risus posuere.",
  },
  // Add more slides as needed
];

export default function Walkthrough() {
  return (
    <section className="relative bg-background px-6 py-12">
      {/* Grid Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/walkthrough/grid.png")' }}
      />

      {/* Content */}
      <div className="container px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
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

          <div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full flex flex-col gap-6"
            >
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem key={index} className="md:basis-1/1">
                    <div className="relative overflow-hidden">
                      <img
                        src={slide.image}
                        alt="Platform screenshot"
                        className="w-full h-auto"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="flex justify-between mt-4">
                <CarouselPrevious className="static h-8 w-8 text-white" />
                <CarouselNext className="static h-8 w-8 text-white" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
