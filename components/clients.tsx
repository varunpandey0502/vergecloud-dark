"use client";

import { motion } from "framer-motion";
import {
  SiNike,
  Si3M,
  SiAbstract,
  SiAdobe,
  SiAirtable,
  SiAmazon,
  SiBox,
  SiBytedance,
  SiChase,
  SiCloudbees,
  SiBurton,
  SiBmw,
  SiHeroku,
  SiBuildkite,
  SiCouchbase,
  SiDailymotion,
  SiDeliveroo,
  SiEpicgames,
  SiGenius,
  SiGodaddy,
} from "react-icons/si";
import { IconType } from "react-icons";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";
import Awards from "./awards";

const clientLogos = [
  {
    src: "/images/clients/arab-monetary-fund.svg",
    name: "Arab Monetary Fund",
  },
  {
    src: "/images/clients/cargobase.svg",
    name: "Cargobase",
  },
  {
    src: "/images/clients/elevo.svg",
    name: "Elevo",
  },
  {
    src: "/images/clients/equity-fund.svg",
    name: "Equity Fund",
  },
  {
    src: "/images/clients/fenergo.svg",
    name: "Fenergo",
  },
  {
    src: "/images/clients/hacker-rank.svg",
    name: "Hacker Rank",
  },
  {
    src: "/images/clients/hotstar.svg",
    name: "Hotstar",
  },
  {
    src: "/images/clients/ind-money.svg",
    name: "Ind Money",
  },
  {
    src: "/images/clients/khatabook.svg",
    name: "Khatabook",
  },
  {
    src: "/images/clients/kuku-fm.svg",
    name: "Kuku FM",
  },
  {
    src: "/images/clients/lightspeed.svg",
    name: "Lightspeed",
  },
  {
    src: "/images/clients/quadrant-advisory.svg",
    name: "Quadrant Advisory",
  },
  {
    src: "/images/clients/razorpay.svg",
    name: "Razorpay",
  },
  {
    src: "/images/clients/redbus.svg",
    name: "Redbus",
  },
  {
    src: "/images/clients/syfe.svg",
    name: "Syfe",
  },
  {
    src: "/images/clients/talent-500.svg",
    name: "Talent 500",
  },
  {
    src: "/images/clients/tfs.svg",
    name: "TFS",
  },
  {
    src: "/images/clients/toronto.svg",
    name: "Toronto",
  },
  {
    src: "/images/clients/ula.svg",
    name: "ULA",
  },
  {
    src: "/images/clients/veriff.svg",
    name: "Veriff",
  },
  {
    src: "/images/clients/zluri.svg",
    name: "Zluri",
  },
];

const Clients = () => {
  return (
    <div className="mt-8">
      <section className="pb-8">
        <div className="flex overflow-hidden mt-4 max-w-screen-xl mx-auto">
          <TranslateWrapper>
            <LogoItemsTop />
          </TranslateWrapper>
          <TranslateWrapper>
            <LogoItemsTop />
          </TranslateWrapper>
          <TranslateWrapper>
            <LogoItemsTop />
          </TranslateWrapper>
        </div>
        <div className="flex overflow-hidden mt-0 max-w-screen-xl mx-auto">
          <TranslateWrapper reverse>
            <LogoItemsBottom />
          </TranslateWrapper>
          <TranslateWrapper reverse>
            <LogoItemsBottom />
          </TranslateWrapper>
          <TranslateWrapper reverse>
            <LogoItemsBottom />
          </TranslateWrapper>
        </div>
      </section>
    </div>
  );
};

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="w-28 md:w-36 h-16 md:h-24 flex justify-center items-center ">
      <img src={src} alt={alt} className="w-full h-12 object-contain" />
    </div>
  );
};

const LogoItemsTop = () => (
  <>
    {clientLogos.slice(0, 10).map((client) => (
      <LogoItem key={client.name} src={client.src} alt={client.name} />
    ))}
  </>
);

const LogoItemsBottom = () => (
  <>
    {clientLogos.slice(10, 20).map((client) => (
      <LogoItem key={client.name} src={client.src} alt={client.name} />
    ))}
  </>
);

export default Clients;
