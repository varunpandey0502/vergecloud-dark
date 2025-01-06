"use client";

import React, { useState } from "react";
import { ToggleButton } from "./ToggleButton";
import { data } from "./data";
import { FeatureDisplay } from "./FeatureDisplay";
import { CTAButton, GetStartedButton } from "../cta-button";

export const Features = () => {
  const [selected, setSelected] = useState(1);

  const el = data.find((d) => d.id === selected);

  return (
    <section className="px-6 py-12 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <span className="text-white/60">Use Cases</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Solutions That Speak Your Industry Language
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Tailored strategies to boost efficiency, security, and performance
            for every vertical.
          </p>
        </div>

        <div className="w-full">
          <div className="mb-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {data.map((d) => (
              <ToggleButton
                key={d.id}
                id={d.id}
                selected={selected}
                setSelected={setSelected}
              >
                {d.title}
              </ToggleButton>
            ))}
          </div>

          <div className="w-full">
            <FeatureDisplay
              selected={selected}
              cardSubtitle={el!.cardSubtitle}
              Component={el!.Component}
            />
          </div>

          <div className="mt-12">
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
};
