import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "./ui/section-heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

// Extract star rating component
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center justify-center flex-row">
    {Array.from({ length: Math.floor(rating) }).map((_, index) => (
      <img src="/images/comparison/star.svg" alt="review-star" key={index} />
    ))}
    {rating % 1 !== 0 && (
      <img src="/images/comparison/star-half.svg" alt="review-star" />
    )}
  </div>
);

function Review1() {
  return (
    <div className="flex flex-col space-y-4 items-start">
      <StarRating rating={5} />
      <h3 className="font-bold">Dominic Williamson | CTO, Hindsite</h3>
      <p className="text-sm">
        <span className="font-bold">Automating updation of OKRs</span>
        <br />I chose Peoplebox because it had integrations with the tools we
        use for sales and engineering to automate updating of key results and
        sync projects.
      </p>
    </div>
  );
}

export function Review2() {
  return (
    <div className="flex items-center justify-center flex-row space-x-4">
      <img
        src="/images/reviews/g2.png"
        alt="G2 Logo"
        className="w-12 lg:w-16"
      />
      <div className="flex flex-col space-y-2 items-start justify-start">
        <StarRating rating={4.5} />
        <p className="text-2xl">4.5/5 on G2</p>
      </div>
    </div>
  );
}

function Review3() {
  return (
    <div className="flex flex-col space-y-4 items-start">
      <StarRating rating={5} />
      <h3 className="font-bold">Easiest way to review OKRs</h3>
      <p className="text-sm">
        Peoplebox has the right structures in place for an org leader to review
        the progress on the goals taken. It helps give an overall executive view
        as well as a more granular MoM view when needed.
      </p>
    </div>
  );
}

function Review4() {
  return (
    <div className="flex flex-col space-y-4 items-start">
      <StarRating rating={5} />
      <h3 className="font-bold">
        Radically changed the experience of tracking OKRs
      </h3>
      <p className="text-sm">
        The best tool to track OKRs and to have a clear view of goals and
        progress. You can also link Google Sheets to track the progress
        automatically.
      </p>
    </div>
  );
}

function Review5() {
  return (
    <div className="flex flex-col space-y-4 items-start">
      <StarRating rating={5} />
      <h3 className="font-bold">Khilan Haria | VP-Product, Razorpay</h3>
      <p className="text-sm">
        <span className="font-bold">Great OKR Partners</span>
        <br />
        What stood out is the deep understanding of the Peoplebox team and their
        willingness to listen & enhance the platform to scale with our long-term
        needs.
      </p>
    </div>
  );
}

function Review6() {
  return (
    <div className="flex flex-col space-y-4 items-start">
      <StarRating rating={5} />
      <h3 className="font-bold">Vijaypal Singh | Product Head, Razorpay</h3>
      <p className="text-sm">
        <span className="font-bold">Best tool for reviews</span>
        <br />
        Peoplebox comes in very handy every 1st week when we have reviews. It is
        one place where any one can track the progress on the goals, along with
        the reasons for achieving / missing targets.
      </p>
    </div>
  );
}

function Review7() {
  return (
    <div className="flex flex-col space-y-4 items-start">
      <StarRating rating={5} />
      <h3 className="font-bold">Swapna Nair | VP-HR, Khatabook</h3>
      <p className="text-sm">
        <span className="font-bold">Slack Integration is brilliant</span>
        <br />
        Driving the entire interface through Slack is simply brilliant
        especially for a tech product company! There was zero time spent on
        training! It can not get easier than that!!
      </p>
    </div>
  );
}

function Review8() {
  return (
    <div className="flex flex-col space-y-4 items-start">
      <StarRating rating={5} />
      <h3 className="font-bold">
        Ruchika Sawhney | Senior Director-HR, Cometchat
      </h3>
      <p className="text-sm">
        <span className="font-bold">
          Biggest advantage is the flexible integration
        </span>
        <br />
        We ran performance review cycle and its been a breeze for me and my team
        to manage the entire process.
      </p>
    </div>
  );
}

export const ReviewCard = ({ children }: { children: React.ReactNode }) => (
  <Card className="shadow-lg shadow-primary/10 rounded-xl p-4 h-68">
    <CardContent className="flex flex-col justify-center items-center h-full w-full">
      {children}
    </CardContent>
  </Card>
);

export default function Reviews() {
  const reviews = [
    { Component: Review1 },
    { Component: Review2 },
    { Component: Review3 },
    { Component: Review4 },
    { Component: Review5 },
    { Component: Review6 },
    { Component: Review7 },
    { Component: Review8 },
  ];

  return (
    <section className="py-6 px-6">
      <div className="container px-12 lg:px-0">
        <SectionHeading>
          Loved by HR teams and Employees in Organizations like Yours
        </SectionHeading>
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {reviews.map(({ Component }, index) => (
            <ReviewCard key={index}>
              <div className="flex flex-col space-y-4 items-start">
                <Component />
              </div>
            </ReviewCard>
          ))}
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full lg:hidden"
        >
          <CarouselContent>
            {reviews.map(({ Component }, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/4">
                <ReviewCard>
                  <Component />
                </ReviewCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
