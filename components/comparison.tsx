"use client";
import React, { useState } from "react";
import { SectionHeading } from "./ui/section-heading";
import { Button } from "./ui/button";

const YesComponent = () => (
  <div className="flex items-center justify-center space-x-2">
    <img
      src="/images/comparison/check.svg"
      alt="Check"
      className="w-4 h-4 md:w-8 md:h-8"
    />
    <span>Yes</span>
  </div>
);

const NoComponent = () => (
  <div className="flex items-center justify-center space-x-2">
    <img
      src="/images/comparison/cross.svg"
      alt="Cross"
      className="w-4 h-4 md:w-8 md:h-8"
    />

    <span>No</span>
  </div>
);

const StarRating = ({ count }: { count: number }) => (
  <div className="flex items-center justify-center md:gap-2">
    {Array(count)
      .fill(0)
      .map((_, index) => (
        <img
          key={index}
          src="/images/comparison/star.svg"
          alt="Star"
          className="w-4 h-4"
        />
      ))}
  </div>
);

const comparisons = [
  {
    feature: "Starting Price",
    peoplebox: "$7/seat",
    leapsome: "$8/seat*",
  },
  {
    feature: "Ease of Setup",
    peoplebox: "9.3",
    leapsome: "9.1",
  },
  {
    feature: "Integrating Business and People Goals",
    peoplebox: <StarRating count={5} />,
    leapsome: <StarRating count={2} />,
  },
  {
    feature: "OKRs and Align Goals",
    peoplebox: <YesComponent />,
    leapsome: <YesComponent />,
  },
  {
    feature: "Native Project Management",
    peoplebox: <YesComponent />,
    leapsome: <NoComponent />,
  },
  {
    feature: "KPIs and Monthly Milestones",
    peoplebox: <YesComponent />,
    leapsome: <NoComponent />,
  },
  {
    feature: "Business Reviews",
    peoplebox: <YesComponent />,
    leapsome: <NoComponent />,
  },
  {
    feature: "Talent Management",
    peoplebox: <YesComponent />,
    leapsome: <YesComponent />,
  },
  {
    feature: "Performance Reviews",
    peoplebox: <YesComponent />,
    leapsome: <YesComponent />,
  },
  {
    feature: "360 Degree Feedback",
    peoplebox: <YesComponent />,
    leapsome: <YesComponent />,
  },
  {
    feature: "Calibration",
    peoplebox: <YesComponent />,
    leapsome: <YesComponent />,
  },
  {
    feature: "Engagement and Pulse Survey",
    peoplebox: <YesComponent />,
    leapsome: <YesComponent />,
  },
  {
    feature: "1:1 and Check-ins",
    peoplebox: <YesComponent />,
    leapsome: <YesComponent />,
  },
  {
    feature: "Compensation and Incentive Management",
    peoplebox: <YesComponent />,
    leapsome: <YesComponent />,
  },
  {
    feature: "Deep integration with Slack and MS Teams",
    peoplebox: <YesComponent />,
    leapsome: <NoComponent />,
  },
  {
    feature: "Integration with HRIS",
    peoplebox: <YesComponent />,
    leapsome: <YesComponent />,
  },
  {
    feature: "Integration with SaaS tools for auto KR updates",
    peoplebox: <YesComponent />,
    leapsome: <NoComponent />,
  },
  {
    feature: "Integration with database and BI tools",
    peoplebox: <YesComponent />,
    leapsome: <NoComponent />,
  },
  {
    feature: "Integration with project management & task management",
    peoplebox: <YesComponent />,
    leapsome: <NoComponent />,
  },
];

export default function Comparison() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 68);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const initialDisplayCount = isMobile ? 8 : 11;

  return (
    <section className="px-6 my-16">
      <div className="container">
        <SectionHeading>
          See How Peoplebox Stacks Up Against Leapsome
        </SectionHeading>
        <div className="overflow-x-auto mt-12">
          <table className="min-w-full bg-white">
            <thead className="">
              <tr>
                <th className="py-4 px-6 text-left text-xl font-semibold"></th>
                <th>
                  <img
                    src="/images/peoplebox-logo.svg"
                    alt="Peoplebox"
                    className="h-3 md:h-6 mx-auto"
                  />
                </th>
                <th>
                  <img
                    src="/images/comparison/leapsome-logo.svg"
                    alt="Leapsome"
                    className="h-4 md:h-8 mx-auto"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons
                .slice(0, showAll ? comparisons.length : initialDisplayCount)
                .map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100 border">
                    <td className="py-4 px-6 border text-sm md:text-lg ">
                      {item.feature}
                    </td>
                    <td className="py-4 px-6 border  text-center">
                      {item.peoplebox}
                    </td>
                    <td className="py-4 px-6 border text-center">
                      {item.leapsome}
                    </td>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} className="py-4 px-6 text-center">
                  <Button onClick={() => setShowAll(!showAll)}>
                    {showAll ? "View Less" : "View More"}
                  </Button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}
