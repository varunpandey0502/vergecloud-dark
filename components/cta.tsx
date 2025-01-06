import { CTAButton } from "./cta-button";

export const Cta = () => {
  return (
    <section className="bg-background px-6 py-24">
      <div className="container">
        <div className="rounded-3xl bg-gradient-to-br from-[#573FE7]/20 to-[#573FE7]/5 py-24 px-6 relative overflow-hidden">
          {/* Gradient circles */}
          <div className="absolute left-1/8 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#573FE7]/30 to-purple-400/20 blur-3xl" />
          <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-[#573FE7]/30 to-purple-400/20 blur-3xl" />

          {/* Content */}
          <div className="flex flex-col items-center text-center space-y-6 relative z-10">
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
