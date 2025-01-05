"use client";
import { Button } from "./ui/button";

export default function CTA() {
  const handleBookDemo = () => {
    const formElement = document.getElementById("hubspot-form-wrapper");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-screen-xl mx-auto px-12 my-16">
      <div className="bg-secondary py-16 rounded-t-[3rem] flex flex-col items-center justify-center text-center">
        <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-primary px-8">
          Become a goal-oriented, <br /> people-first company with Peoplebox
        </h2>
        <Button className="mt-8" variant="accent" onClick={handleBookDemo}>
          Book a Demo
        </Button>
      </div>
    </section>
  );
}
