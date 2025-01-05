"use client";

import React, { useState } from "react";
import { ToggleButton } from "./ToggleButton";
import { data } from "./data";
import { FeatureDisplay } from "./FeatureDisplay";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSubheading } from "@/components/ui/section-subheading";

export const FeatureToggles = () => {
  const [selected, setSelected] = useState(1);

  const el = data.find((d) => d.id === selected);

  return (
    <section className="px-6 my-16 bg-secondary">
      <div className="container py-16">
        <SectionHeading>Align your people with business goals</SectionHeading>
        <SectionSubheading>
          Peoplebox helps you align your people with business goals and improve
          performance.
        </SectionSubheading>
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
          <div className="w-full translate-y-2 rounded-xl bg-primary">
            <div className="w-full -translate-y-2 rounded-lg shadow-lg">
              <FeatureDisplay
                selected={selected}
                cardTitle={el!.cardTitle}
                cardSubtitle={el!.cardSubtitle}
                Component={el!.Component}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
