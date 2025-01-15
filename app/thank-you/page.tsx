"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import successAnimation from "@/lottie/success.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-2xl mx-auto p-6">
        <div className="w-32 h-32 mx-auto">
          <Lottie
            animationData={successAnimation}
            loop={false}
            className="w-full h-full"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Thank You for Your Submission!
        </h1>
        <p className="text-lg mb-8 text-muted-foreground">
          You will receive the coupon code on your email. If not, please check
          your spam folder.
        </p>
        <Link
          href="https://auth.vergecloud.com/u/signup/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Sign up now
        </Link>
      </div>
    </div>
  );
}
