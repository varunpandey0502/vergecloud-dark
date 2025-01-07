"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import successAnimation from "@/lottie/success.json";

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
          Thank you! You will receive the coupon code on your email
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
