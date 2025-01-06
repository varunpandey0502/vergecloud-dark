import { Globe, Shield, Zap, Settings } from "lucide-react";

const MediaComponent = () => {
  return (
    <img
      src="/images/walkthrough/feature-1.png"
      alt="Media & Entertainment"
      className="w-full h-auto rounded-2xl"
    />
  );
};

const GamingComponent = () => {
  return (
    <img
      src="/images/walkthrough/feature-1.png"
      alt="Gaming"
      className="h-full w-full object-cover rounded-2xl"
    />
  );
};

const ElearningComponent = () => {
  return (
    <img
      src="/images/walkthrough/feature-1.png"
      alt="E-Learning"
      className="h-full w-full object-cover rounded-2xl"
    />
  );
};

const EcommerceComponent = () => {
  return (
    <img
      src="/images/walkthrough/feature-1.png"
      alt="E-Commerce"
      className="h-full w-full object-cover rounded-2xl"
    />
  );
};

export const data = [
  {
    id: 1,
    title: "Media & Entertainment",
    Component: MediaComponent,
    cardSubtitle: [
      {
        icon: "/icons/globe.svg",
        title: "Global Content Delivery",
        description:
          "Ensure fast access to media content for audiences worldwide.",
      },
      {
        icon: "/icons/cache.svg",
        title: "Content Caching",
        description:
          "Cache popular content to handle high traffic spikes during new releases or live events.",
      },
      {
        icon: "/icons/ad.svg",
        title: "Ad Delivery Optimization",
        description:
          "Efficiently serve ad content, enhancing ad load times and viewer experience.",
      },
      {
        icon: "/icons/security.svg",
        title: "Robust Data Security",
        description:
          "Secure your site with our DDoS protection, bot management, and SSL encryption.",
      },
    ],
  },
  {
    id: 2,
    title: "Gaming",
    Component: GamingComponent,
    cardSubtitle: [
      {
        icon: "/icons/latency.svg",
        title: "Latency Reduction",
        description:
          "Minimize lag for real-time multiplayer games by delivering content from edge servers close to players",
      },
      {
        icon: "/icons/traffic.svg",
        title: "Traffic management",
        description:
          "Scale Up for Traffic Surges During Game Launches and Events.",
      },
      {
        icon: "/icons/shield.svg",
        title: "DDoS Protection",
        description:
          "Protect game servers from DDoS attacks to ensure a stable gaming experience.",
      },
      {
        icon: "/icons/streaming.svg",
        title: "High-Quality Streaming",
        description:
          "Enable smooth live streaming of eSports events and in-game footage for better engagement",
      },
    ],
  },
  {
    id: 3,
    title: "E-Learning",
    Component: ElearningComponent,
    cardSubtitle: [
      {
        icon: "/icons/live-class.svg",
        title: "Live Class Streaming",
        description:
          "Stream live classes seamlessly to support virtual learning environments.",
      },
      {
        icon: "/icons/cache.svg",
        title: "Content Caching",
        description:
          "Deliver educational materials (videos, documents) efficiently across regions",
      },
      {
        icon: "/icons/access.svg",
        title: "Access Control",
        description:
          "Secure educational content access, ensuring only enrolled users can view materials.",
      },
      {
        icon: "/icons/latency.svg",
        title: "Latency Reduction",
        description:
          "Reduce latency for interactive learning tools, quizzes, and assessments.",
      },
    ],
  },
  {
    id: 4,
    title: "E-Commerce",
    Component: EcommerceComponent,
    cardSubtitle: [
      {
        icon: "/icons/speed.svg",
        title: "Page Load Speed",
        description:
          "Speed up loading times, especially during peak sales, to reduce cart abandonment rates.",
      },
      {
        icon: "/icons/fraud.svg",
        title: "Fraud Protection",
        description:
          "Block malicious traffic, reducing potential fraud during online transactions.",
      },
      {
        icon: "/icons/image.svg",
        title: "Image Optimization",
        description:
          "Optimize and deliver product images quickly for a smooth shopping experience.",
      },
      {
        icon: "/icons/cost.svg",
        title: "Lower operational cost",
        description:
          "Improve developer productivity and reduce infrastructure costs.",
      },
    ],
  },
];
