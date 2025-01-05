"use client";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return <FlyoutNav />;
};

const FlyoutNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50 ? true : false);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-white 
      transition-all duration-300 ease-out lg:px-12
      ${
        scrolled
          ? "bg-white py-2 shadow-xl backdrop-blur-sm"
          : "bg-transparent py-4 shadow-none"
      }`}
    >
      <div className="flex max-w-screen-xl mx-auto items-center justify-between">
        <Logo scrolled={scrolled} />
        <div className="hidden gap-6 md:flex">
          <CTAs />
        </div>
      </div>
    </nav>
  );
};

const Logo = ({ scrolled = false }: { scrolled?: boolean }) => {
  return (
    <img
      src={
        scrolled
          ? "/images/vergecloud-logo.svg"
          : "/images/vergecloud-logo-white.svg"
      }
      alt="VergeCloud Logo"
      className="h-6 md:h-16"
    />
  );
};

const CTAs = () => {
  const handleBookDemo = () => {
    const formElement = document.getElementById("hubspot-form-wrapper");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button variant="accent" size="lg" onClick={handleBookDemo}>
      Book a Demo
    </Button>
  );
};

export default Navbar;
