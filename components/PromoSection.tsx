import { CTAButton } from "./cta-button";

export const PromoSection = () => {
  return (
    <section className="bg-background px-6 py-24">
      <div className="container">
        <div className="rounded-3xl bg-gradient-to-br from-[#573FE7]/20 to-[#573FE7]/5 py-24 px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              3 Months On Us. Sign Up and Save!
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Get started in seconds. Limited Time Offer. No credit card
              required.
            </p>
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
};
