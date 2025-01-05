import { arial } from "@/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peoplebox vs Leapsome",
  description: "Compare Peoplebox vs Leapsome",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arial.variable} font-sans`}>{children}</body>
    </html>
  );
}
