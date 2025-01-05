import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Button } from "@/components/ui/button";

export const FeatureDisplay = ({
  selected,
  cardTitle,
  cardSubtitle,
  Component,
}: {
  selected: number;
  cardTitle: string;
  cardSubtitle: Array<{
    title: string;
    icon: React.ElementType;
  }>;
  Component: () => JSX.Element;
}) => {
  const handleBookDemo = () => {
    const formElement = document.getElementById("hubspot-form-wrapper");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="grid h-fit w-full grid-cols-1 overflow-hidden rounded-xl border-2 border-primary bg-secondary lg:grid-cols-12">
      <div className="col-span-1 flex flex-col justify-between p-8 md:col-span-5 md:p-12">
        <div>
          <AnimatePresence mode="popLayout">
            <motion.div
              initial={{
                opacity: 0,
                y: -25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 25,
              }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
              }}
              key={selected}
            >
              <h3 className="mb-4 text-3xl font-bold">{cardTitle}</h3>
              <div className="my-8 max-w-lg flex flex-col gap-6">
                {cardSubtitle.map((subtitle, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {subtitle.icon}
                    <span className="text-base leading-relaxed md:text-xl md:leading-relaxed">
                      {subtitle.title}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <Button variant="accent" onClick={handleBookDemo}>
          Book a Demo
        </Button>
      </div>
      <div className="relative col-span-1 min-h-80 p-8 pt-12 border-primary bg-secondary md:col-span-7">
        <AnimatePresence mode="popLayout">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              x: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
            }}
            exit={{
              opacity: 0,
              y: 50,
              x: 50,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            key={selected}
            className=""
          >
            <Component />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
