import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const SignupForm = () => {
  return (
    <div className="bg-primary/40 rounded-3xl p-8 w-full max-w-sm border border-white/[0.08] backdrop-blur-sm">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">
            Claim Your <span className="text-[#4ADE80]">3 Months Free</span>{" "}
            Subscription
          </h2>
          <p className="text-white/80">No credit card details are required.</p>
        </div>

        <form className="space-y-4">
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Full Name*"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              required
            />
            <Input
              type="email"
              placeholder="Work Email*"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              required
            />
            <Input
              type="text"
              placeholder="Company Name"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Input
              type="url"
              placeholder="Company Website"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
          </div>

          <Button className="w-full bg-white/5 hover:bg-white text-white hover:text-primary font-semibold text-lg border border-white/[0.08] backdrop-blur-sm">
            Get Your Discount Code
          </Button>

          <p className="text-sm text-white/60 text-left">T&C Applied*</p>
        </form>
      </div>
    </div>
  );
};
