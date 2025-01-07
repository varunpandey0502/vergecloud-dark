import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  weight: "500",
  display: "swap",
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export { notoSans };
