import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";

export default function Awards() {
  return (
    <section className="my-16 px-6">
      <div className="container px-12 lg:px-0">
        <SectionHeading>Highly Rated Across the Board</SectionHeading>
        <SectionSubheading>
          Trusted by industry leaders like you
        </SectionSubheading>

        <div className="flex flex-col lg:flex-row justify-center gap-x-16 mt-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="">
                <img
                  src={`/images/awards/award-${index + 1}.svg`}
                  alt={`Award ${index + 1}`}
                  className="w-full h-20 lg:h-28"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-x-8 mt-8 lg:mt-0">
            {Array.from({ length: 3 }, (_, index) => index + 7).map((num) => (
              <div key={num} className="">
                <img
                  src={`/images/awards/award-${num}.svg`}
                  alt={`Award ${num}`}
                  className="w-full h-20 lg:h-28"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
